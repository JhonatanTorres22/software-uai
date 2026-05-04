import { UiSelect } from '@/shared/components/ui-select/ui-select.interface';
import { Component, inject, OnInit } from '@angular/core';
import { UiSelectComponent } from "@/shared/components/ui-select/ui-select.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from "@/shared/components/ui-input/ui-input.component";
import { UiTextAreaComponent } from "@/shared/components/ui-text-area/ui-text-area.component";
import { CommonModule } from '@angular/common';
import { TramiteValidation } from '../../../domain/validation/tramite.validation';
import { ObtenerCategoriaUseCase } from '@/pages-octda/categoria/application/use-cases/categorias/obtenerCategoria.use-case';

import { CrearTramiteUseCase } from '../../../application/use-cases/tramites/crearTramite.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { UiButtonComponent } from '@/shared/components/ui-button/ui-button.component';
import { ListarCategoria } from '@/pages-octda/categoria/domain/entity/categoria.model';
import { ListarSubCategoria } from '@/pages-octda/categoria/domain/entity/subCategoria.entity';
import { ObtenerSubCategoriaPorCategoriaUseCase } from '@/pages-octda/categoria/application/use-cases/subCategorias/obtenerSubCategoriaPorCategoria.use-case';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';

@Component({
  selector: 'app-datos-tramite',
  imports: [CommonModule, UiSelectComponent, FormsModule, ReactiveFormsModule, UiInputComponent, UiTextAreaComponent, UiButtonComponent],
  templateUrl: './datos-tramite.html',
  styleUrl: './datos-tramite.scss',
})
export class DatosTramite implements OnInit {
  private readonly tramiteValidation = inject(TramiteValidation);
  private readonly obtenerCategoriaUseCase = inject(ObtenerCategoriaUseCase);
  private readonly obtenerSubCategoriaPorCategoriaUseCase = inject(ObtenerSubCategoriaPorCategoriaUseCase);
  private readonly crearTramiteUseCase = inject(CrearTramiteUseCase);
  private readonly notificationService = inject(NotificationService);
  private readonly tramiteSignal = inject(TramiteSignal);
  loading = this.tramiteSignal.loading;
  readonly listTipoDocumento: UiSelect[] = [
    { text: 'DNI', value: 'DNI' },
    { text: 'CARNET DE EXTRANJERIA', value: 'CARNET DE EXTRANJERIA' },
  ];

  listCategorias: UiSelect[] = [];
  listSubCategorias: UiSelect[] = [];
  private categoriasData: ListarCategoria[] = [];
  private subCategoriasData: ListarSubCategoria[] = [];


  readonly formGenerarTramite: FormGroup;
  readonly formPagoRealizado: FormGroup;

  constructor() {
    this.formGenerarTramite = new FormGroup({
      tipoDoc: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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

    this.cargarCategorias();
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

  guardarTramite(): void {
    
    this.formGenerarTramite.markAllAsTouched();

    if (this.formGenerarTramite.invalid) {
      this.notificationService.warn('Completa los campos obligatorios del tramite.');
      return;
    }

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
    console.log(payload);

    this.crearTramiteUseCase.execute(payload).subscribe({
      next: (response) => {
        this.notificationService.success(`${response.message}, tramite creado correctamente`);
        this.formGenerarTramite.reset({
          tipoDoc: 'DNI',
          tipoSolicitante: 'alumno',
          numeroDoc: '',
          nombreSolicitante: '',
          apePaternoSolicitante: '',
          apeMaternoSolicitante: '',
          celularSolicitante: '',
          correoSolicitante: '',
          idCategoriaTramite: '',
          idSubCategoriaTramite: '',
          asunto: '',
          archivoAnexo: '',
        });
        this.listSubCategorias = [];
      },
      error: () => {
        this.notificationService.error('No se pudo crear el tramite');
      }
    });
  }

  private cargarCategorias(): void {
    this.obtenerCategoriaUseCase.execute().subscribe({
      next: (response) => {
        this.categoriasData = response.data ?? [];
        this.listCategorias = this.categoriasData.map((categoria) => ({
          text: categoria.nombre,
          value: String(categoria.idCategoriaTramite),
        }));
      },
      error: () => {
        this.notificationService.error('No se pudieron cargar las categorias');
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
