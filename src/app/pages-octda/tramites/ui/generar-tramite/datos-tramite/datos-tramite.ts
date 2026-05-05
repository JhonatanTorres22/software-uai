import { UiSelect } from '@/shared/components/ui-select/ui-select.interface';
import { Component, inject, OnDestroy, OnInit, output } from '@angular/core';
import { UiSelectComponent } from "@/shared/components/ui-select/ui-select.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from "@/shared/components/ui-input/ui-input.component";
import { UiTextAreaComponent } from "@/shared/components/ui-text-area/ui-text-area.component";
import { CommonModule } from '@angular/common';
import { TramiteValidation } from '../../../domain/validation/tramite.validation';
import { ObtenerCategoriaUseCase } from '@/pages-octda/categoria/application/use-cases/categorias/obtenerCategoria.use-case';
import { CrearTramiteUseCase } from '../../../application/use-cases/tramites/crearTramite.use-case';
import { EditarTramiteUseCase } from '../../../application/use-cases/tramites/editarTramite.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { ListarCategoria } from '@/pages-octda/categoria/domain/entity/categoria.model';
import { ListarSubCategoria } from '@/pages-octda/categoria/domain/entity/subCategoria.entity';
import { ObtenerSubCategoriaPorCategoriaUseCase } from '@/pages-octda/categoria/application/use-cases/subCategorias/obtenerSubCategoriaPorCategoria.use-case';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';
import { FormatoSolicitudData } from '../../../domain/entity/formato-solicitud.model';
import { TramiteStateService, DatosTramiteSnapshot } from '../../../domain/services/tramite-state.service';
import { ListarTramite } from '../../../domain/entity/tramite.entity';
import { forkJoin } from 'rxjs';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";

@Component({
  selector: 'app-datos-tramite',
  imports: [CommonModule, UiSelectComponent, FormsModule, ReactiveFormsModule, UiInputComponent, UiTextAreaComponent, UiLoading],
  templateUrl: './datos-tramite.html',
  styleUrl: './datos-tramite.scss',
})
export class DatosTramite implements OnInit, OnDestroy {
  private readonly tramiteValidation = inject(TramiteValidation);
  private readonly obtenerCategoriaUseCase = inject(ObtenerCategoriaUseCase);
  private readonly obtenerSubCategoriaPorCategoriaUseCase = inject(ObtenerSubCategoriaPorCategoriaUseCase);
  private readonly crearTramiteUseCase = inject(CrearTramiteUseCase);
  private readonly editarTramiteUseCase = inject(EditarTramiteUseCase);
  private readonly notificationService = inject(NotificationService);
  private readonly tramiteSignal = inject(TramiteSignal);
  selectTramite = this.tramiteSignal.selectTramite
  private readonly tramiteState = inject(TramiteStateService);
  loading = this.tramiteSignal.loading;
  readonly listTipoDocumento: UiSelect[] = [
    { text: 'DNI', value: 'DNI' },
    { text: 'CARNET DE EXTRANJERIA', value: 'CARNET DE EXTRANJERIA' },
  ];

  listCategorias: UiSelect[] = [];
  listSubCategorias: UiSelect[] = [];
  private categoriasData: ListarCategoria[] = [];
  private subCategoriasData: ListarSubCategoria[] = [];

  readonly tramiteRegistrado = output<FormatoSolicitudData>();

  readonly formGenerarTramite: FormGroup;
  readonly formPagoRealizado: FormGroup;

  constructor() {
    this.formGenerarTramite = new FormGroup({
      tipoDoc: new FormControl('DNI', { nonNullable: true, validators: [Validators.required] }),
      numeroDoc: new FormControl('', { nonNullable: true }),
      nombreSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(this.tramiteValidation.minNombres),
          Validators.maxLength(this.tramiteValidation.maxNombres),
          Validators.pattern(this.tramiteValidation.soloLetras),
        ]
      }),
      apePaternoSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(this.tramiteValidation.minApellidos),
          Validators.maxLength(this.tramiteValidation.maxApellidos),
          Validators.pattern(this.tramiteValidation.soloLetras),
        ]
      }),
      apeMaternoSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(this.tramiteValidation.minApellidos),
          Validators.maxLength(this.tramiteValidation.maxApellidos),
          Validators.pattern(this.tramiteValidation.soloLetras),
        ]
      }),
      celularSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(this.tramiteValidation.celularLength),
          Validators.maxLength(this.tramiteValidation.celularLength),
          Validators.pattern(this.tramiteValidation.soloNumeros),
        ]
      }),
      correoSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(this.tramiteValidation.emailPattern)]
      }),
      idCategoriaTramite: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      idSubCategoriaTramite: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      asunto: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(this.tramiteValidation.minAsunto),
          Validators.maxLength(this.tramiteValidation.maxAsunto),
        ]
      }),
      archivoAnexo: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });

    this.formPagoRealizado = new FormGroup({
      numeroVoucher: new FormControl('', { nonNullable: true }),
      fechaPago: new FormControl('', { nonNullable: true }),
      horaPago: new FormControl('', { nonNullable: true }),
      montoPago: new FormControl('', { nonNullable: true }),
    });
  }

  ngOnInit(): void {
    this.aplicarValidacionDocumento(this.formGenerarTramite.controls['tipoDoc'].value);

    this.formGenerarTramite.controls['tipoDoc'].valueChanges.subscribe((tipoDoc) => {
      this.formGenerarTramite.controls['numeroDoc'].setValue('');
      this.aplicarValidacionDocumento(tipoDoc);
    });

    this.formGenerarTramite.controls['idCategoriaTramite'].valueChanges.subscribe((categoriaIdValue) => {
      this.onCategoriaChange(categoriaIdValue);
    });

    // La restauración del snapshot y carga de datos de edición se hace dentro de cargarCategorias()
    this.cargarCategorias();
  }

  ngOnDestroy(): void {
    this.tramiteState.datosTramiteSnapshot.set(this.buildSnapshot());
  }

  get numeroDocMaxLength(): number {
    return this.formGenerarTramite.controls['tipoDoc'].value === 'DNI'
      ? this.tramiteValidation.dniLength
      : this.tramiteValidation.carnetExtranjeriaMaxLength;
  }

  onOnlyNumbersInput(controlName: 'numeroDoc' | 'celularSolicitante', event: Event): void {
    const input = event.target as HTMLInputElement;
    const sanitized = (input.value ?? '').replace(/\D/g, '');
    this.formGenerarTramite.controls[controlName].setValue(sanitized as never, { emitEvent: false });
  }

  onArchivoSeleccionado(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] ?? null;
    this.formGenerarTramite.controls['archivoAnexo'].setValue(file ? file.name : '');
  }

  registrarTramite(): void {
    this.formGenerarTramite.markAllAsTouched();

    if (this.formGenerarTramite.invalid) {
      this.notificationService.warn('Completa los campos obligatorios del tramite.');
      return;
    }

    const isEdit = this.tramiteState.isEditMode();

    const payload = {
      idSubCategoriaTramite: Number(this.formGenerarTramite.controls['idSubCategoriaTramite'].value),
      tipoDoc: this.formGenerarTramite.controls['tipoDoc'].value,
      numeroDoc: this.formGenerarTramite.controls['numeroDoc'].value.trim(),
      tipoSolicitante: 'DOCENTE',
      nombreSolicitante: this.formGenerarTramite.controls['nombreSolicitante'].value.trim(),
      apePaternoSolicitante: this.formGenerarTramite.controls['apePaternoSolicitante'].value.trim(),
      apeMaternoSolicitante: this.formGenerarTramite.controls['apeMaternoSolicitante'].value.trim(),
      celularSolicitante: this.formGenerarTramite.controls['celularSolicitante'].value.trim(),
      correoSolicitante: this.formGenerarTramite.controls['correoSolicitante'].value.trim(),
      asunto: this.formGenerarTramite.controls['asunto'].value.trim(),
      archivoAnexo: this.formGenerarTramite.controls['archivoAnexo'].value.trim(),
    };

    this.loading.set(true);

    if (isEdit) {
      const editPayload = { ...payload, idTramite: this.tramiteState.idTramite() };
      this.editarTramiteUseCase.execute(editPayload).subscribe({
        next: (response) => {
          this.loading.set(false);
          this.notificationService.success(`${response.message}, trámite actualizado correctamente`);
          // En modo edición, emitir los datos para avanzar al paso 2
          this.tramiteRegistrado.emit(this.buildFormatoSolicitudData(this.tramiteState.idTramite()));
        },
        error: () => {
          this.loading.set(false);
          this.notificationService.error('No se pudo actualizar el trámite');
        }
      });
    } else {
      this.crearTramiteUseCase.execute(payload).subscribe({
        next: (response) => {
          this.loading.set(false);
          this.notificationService.success(`${response.message}, tramite creado correctamente`);
          const data = response.data as { codigoTramite?: number } | null;
          const idTramite = data?.codigoTramite ?? 0;
          this.tramiteState.idTramite.set(idTramite);
          this.tramiteRegistrado.emit(this.buildFormatoSolicitudData(idTramite));
        },
        error: () => {
          this.loading.set(false);
          this.notificationService.error('No se pudo crear el tramite');
        }
      });
    }
  }

  private buildFormatoSolicitudData(idTramite: number): FormatoSolicitudData {
    const nombre = this.formGenerarTramite.controls['nombreSolicitante'].value.trim();
    const apePaterno = this.formGenerarTramite.controls['apePaternoSolicitante'].value.trim();
    const apeMaterno = this.formGenerarTramite.controls['apeMaternoSolicitante'].value.trim();

    return {
      idTramite,
      idFormatoSolicitud: 0,
      nombreCompleto: `${nombre} ${apePaterno} ${apeMaterno}`.replace(/\s+/g, ' ').trim(),
      numeroContacto: this.formGenerarTramite.controls['celularSolicitante'].value.trim(),
      numeroDocumento: this.formGenerarTramite.controls['numeroDoc'].value.trim(),
      email: this.formGenerarTramite.controls['correoSolicitante'].value.trim(),
      fundamento: this.formGenerarTramite.controls['asunto'].value.trim(),
      anexos: this.formGenerarTramite.controls['archivoAnexo'].value.trim(),
    };
  }

  private buildSnapshot(): DatosTramiteSnapshot {
    const form = this.formGenerarTramite.getRawValue();
    const pago = this.formPagoRealizado.getRawValue();
    return {
      tipoDoc: form['tipoDoc'],
      numeroDoc: form['numeroDoc'],
      nombreSolicitante: form['nombreSolicitante'],
      apePaternoSolicitante: form['apePaternoSolicitante'],
      apeMaternoSolicitante: form['apeMaternoSolicitante'],
      celularSolicitante: form['celularSolicitante'],
      correoSolicitante: form['correoSolicitante'],
      idCategoriaTramite: form['idCategoriaTramite'],
      idSubCategoriaTramite: form['idSubCategoriaTramite'],
      asunto: form['asunto'],
      archivoAnexo: form['archivoAnexo'],
      numeroVoucher: pago['numeroVoucher'],
      fechaPago: pago['fechaPago'],
      horaPago: pago['horaPago'],
      montoPago: pago['montoPago'],
    };
  }

  private restoreSnapshot(snapshot: DatosTramiteSnapshot): void {
    this.formGenerarTramite.patchValue({
      tipoDoc: snapshot.tipoDoc,
      numeroDoc: snapshot.numeroDoc,
      nombreSolicitante: snapshot.nombreSolicitante,
      apePaternoSolicitante: snapshot.apePaternoSolicitante,
      apeMaternoSolicitante: snapshot.apeMaternoSolicitante,
      celularSolicitante: snapshot.celularSolicitante,
      correoSolicitante: snapshot.correoSolicitante,
      idCategoriaTramite: snapshot.idCategoriaTramite,
      idSubCategoriaTramite: snapshot.idSubCategoriaTramite,
      asunto: snapshot.asunto,
      archivoAnexo: snapshot.archivoAnexo,
    }, { emitEvent: false });

    this.formPagoRealizado.patchValue({
      numeroVoucher: snapshot.numeroVoucher,
      fechaPago: snapshot.fechaPago,
      horaPago: snapshot.horaPago,
      montoPago: snapshot.montoPago,
    });
  }

  private cargarCategorias(): void {
    this.loading.set(true);
    this.obtenerCategoriaUseCase.execute().subscribe({
      next: (response) => {
        this.categoriasData = response.data ?? [];
        this.listCategorias = this.categoriasData.map((categoria) => ({
          text: categoria.nombre,
          value: String(categoria.idCategoriaTramite),
        }));

        // Prioridad: 1. Snapshot (volver del paso 2), 2. Modo edición (primer acceso)
        const snapshot = this.tramiteState.datosTramiteSnapshot();
                
        if (snapshot && snapshot.idCategoriaTramite) {
          this.restoreSnapshot(snapshot);
          this.cargarSubCategoriasPorCategoria(Number(snapshot.idCategoriaTramite), snapshot.idSubCategoriaTramite);
        } else if (this.tramiteState.isEditMode()) {
          // Modo edición, cargar datos del trámite seleccionado
          const tramite = this.tramiteSignal.selectTramite(); 
          this.patchTramiteParaEdicion(tramite);
        }

        this.loading.set(false);
      },
      error: () => {
        this.notificationService.error('No se pudieron cargar las categorias');
      }
    });
  }

  private cargarSubCategoriasPorCategoria(catId: number, selectedSubCatId: string): void {
    this.obtenerSubCategoriaPorCategoriaUseCase.execute(catId).subscribe({
      next: (response) => {
        this.subCategoriasData = response.data ?? [];
        this.listSubCategorias = this.subCategoriasData.map((subCategoria) => ({
          text: subCategoria.nombre,
          value: String(subCategoria.idSubCategoriaTramite),
        }));
        if (selectedSubCatId) {
          this.formGenerarTramite.get('idSubCategoriaTramite')?.setValue(selectedSubCatId, { emitEvent: false });
        }
      }
    });
  }

  private patchTramiteParaEdicion(tramite: ListarTramite): void {
    this.formGenerarTramite.patchValue({
      tipoDoc: tramite.tipoDoc,
      numeroDoc: tramite.numeroDoc,
      nombreSolicitante: tramite.nombreSolicitante,
      apePaternoSolicitante: tramite.apePaternoSolicitante,
      apeMaternoSolicitante: tramite.apeMaternoSolicitante,
      celularSolicitante: tramite.celularSolicitante,
      correoSolicitante: tramite.correoSolicitante,
      asunto: tramite.asunto,
      archivoAnexo: tramite.archivoAnexo,
    }, { emitEvent: false });

    const idSubCat = tramite.idSubCategoriaTramite;
    const categoriaIds = this.categoriasData.map(c => c.idCategoriaTramite);

    forkJoin(
      categoriaIds.map(catId => this.obtenerSubCategoriaPorCategoriaUseCase.execute(catId))
    ).subscribe({
      next: (resultados) => {
        for (let i = 0; i < resultados.length; i++) {
          const subcats = resultados[i].data ?? [];
          const found = subcats.find(s => s.idSubCategoriaTramite === idSubCat);
          if (found) {
            this.subCategoriasData = subcats;
            this.listSubCategorias = subcats.map(s => ({
              text: s.nombre,
              value: String(s.idSubCategoriaTramite),
            }));
            this.formGenerarTramite.get('idCategoriaTramite')?.setValue(String(categoriaIds[i]), { emitEvent: false });
            this.formGenerarTramite.get('idSubCategoriaTramite')?.setValue(String(idSubCat), { emitEvent: false });
            break;
          }
        }
      }
    });
  }

  private onCategoriaChange(categoriaIdValue: string): void {
    this.formGenerarTramite.controls['idSubCategoriaTramite'].setValue('');

    const categoriaId = Number(categoriaIdValue);
    if (!categoriaId) {
      this.listSubCategorias = [];
      this.subCategoriasData = [];
      return;
    }

    this.obtenerSubCategoriaPorCategoriaUseCase.execute(categoriaId).subscribe({
      next: (response) => {
        this.subCategoriasData = response.data ?? [];
        this.listSubCategorias = this.subCategoriasData.map((subCategoria) => ({
          text: subCategoria.nombre,
          value: String(subCategoria.idSubCategoriaTramite),
        }));
      },
      error: () => {
        this.listSubCategorias = [];
        this.subCategoriasData = [];
        this.notificationService.error('No se pudieron cargar las subcategorias');
      }
    });
  }

  private aplicarValidacionDocumento(tipoDoc: string): void {
    const numeroDocControl = this.formGenerarTramite.controls['numeroDoc'];

    if (tipoDoc === 'DNI') {
      numeroDocControl.setValidators([
        Validators.required,
        Validators.minLength(this.tramiteValidation.dniLength),
        Validators.maxLength(this.tramiteValidation.dniLength),
        Validators.pattern(this.tramiteValidation.soloNumeros),
      ]);
    } else {
      numeroDocControl.setValidators([
        Validators.required,
        Validators.minLength(this.tramiteValidation.carnetExtranjeriaMinLength),
        Validators.maxLength(this.tramiteValidation.carnetExtranjeriaMaxLength),
        Validators.pattern(this.tramiteValidation.soloNumeros),
      ]);
    }

    numeroDocControl.updateValueAndValidity();
  }
}
