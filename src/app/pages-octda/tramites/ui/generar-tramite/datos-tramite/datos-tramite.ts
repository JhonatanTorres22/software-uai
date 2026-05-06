import { UiSelect } from '@/shared/components/ui-select/ui-select.interface';
import { Component, inject, OnInit, output } from '@angular/core';
import { UiSelectComponent } from "@/shared/components/ui-select/ui-select.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from "@/shared/components/ui-input/ui-input.component";
import { UiTextAreaComponent } from "@/shared/components/ui-text-area/ui-text-area.component";
import { UiDatePickerComponent } from "@/shared/components/ui-date-picker";
import { CommonModule } from '@angular/common';
import { TramiteValidation } from '../../../domain/validation/tramite.validation';
import { ObtenerCategoriaUseCase } from '@/pages-octda/categoria/application/use-cases/categorias/obtenerCategoria.use-case';
import { CrearTramiteUseCase } from '../../../application/use-cases/tramites/crearTramite.use-case';
import { CrearTramiteConRetornoUseCase } from '../../../application/use-cases/tramites/crearTramiteConRetorno.use-case';
import { EditarTramiteUseCase } from '../../../application/use-cases/tramites/editarTramite.use-case';
import { CrearPagoTramiteUseCase } from '../../../application/use-cases/pagoTramite/crearPagoTramite.use-case';
import { EditarPagoTramiteUseCase } from '../../../application/use-cases/pagoTramite/editarPagoTramite.use-case';
import { ObtenerPagosPorTramiteUseCase } from '../../../application/use-cases/pagoTramite/obtenerPagosPorTramite.use-case';
import { CrearEntidadUseCase } from '../../../application/use-cases/entidad/crearEntidad.use-case';
import { EditarEntidadUseCase } from '../../../application/use-cases/entidad/editarEntidad.use-case';
import { ObtenerEntidadesPorTramiteUseCase } from '../../../application/use-cases/entidad/obtenerEntidadPorTramite.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { ListarCategoria } from '@/pages-octda/categoria/domain/entity/categoria.model';
import { ListarSubCategoria } from '@/pages-octda/categoria/domain/entity/subCategoria.entity';
import { ObtenerSubCategoriaPorCategoriaUseCase } from '@/pages-octda/categoria/application/use-cases/subCategorias/obtenerSubCategoriaPorCategoria.use-case';
import { ObtenerSubCategoriaPorIdUseCase } from '@/pages-octda/categoria/application/use-cases/subCategorias/obtenerSubCategoriaPorId.use-case';
import { TramiteSignal } from '@/pages-octda/tramites/domain/signals/tramite.signal';
import { TramiteStateService } from '../../../domain/services/tramite-state.service';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";

@Component({
  selector: 'app-datos-tramite',
  imports: [CommonModule, UiSelectComponent, FormsModule, ReactiveFormsModule, UiInputComponent, UiTextAreaComponent, UiDatePickerComponent, UiLoading, UiButtonComponent],
  templateUrl: './datos-tramite.html',
  styleUrl: './datos-tramite.scss',
})
export class DatosTramite implements OnInit {
  private readonly tramiteValidation = inject(TramiteValidation);
  expLockNumber = this.tramiteValidation.lockInputNumber;
  expLockText = this.tramiteValidation.lockInputText
  private readonly obtenerCategoriaUseCase = inject(ObtenerCategoriaUseCase);
  private readonly obtenerSubCategoriaPorCategoriaUseCase = inject(ObtenerSubCategoriaPorCategoriaUseCase);
  private readonly obtenerSubCategoriaPorIdUseCase = inject(ObtenerSubCategoriaPorIdUseCase);
  private readonly crearTramiteUseCase = inject(CrearTramiteUseCase);
  private readonly crearTramiteConRetornoUseCase = inject(CrearTramiteConRetornoUseCase);
  private readonly editarTramiteUseCase = inject(EditarTramiteUseCase);
  private readonly crearPagoTramiteUseCase = inject(CrearPagoTramiteUseCase);
  private readonly editarPagoTramiteUseCase = inject(EditarPagoTramiteUseCase);
  private readonly obtenerPagosPorTramiteUseCase = inject(ObtenerPagosPorTramiteUseCase);
  private readonly crearEntidadUseCase = inject(CrearEntidadUseCase);
  private readonly editarEntidadUseCase = inject(EditarEntidadUseCase);
  private readonly obtenerEntidadesPorTramiteUseCase = inject(ObtenerEntidadesPorTramiteUseCase);
  private readonly notificationService = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly tramiteSignal = inject(TramiteSignal);
  selectTramite = this.tramiteSignal.selectTramite
  loading = this.tramiteSignal.loading;

  idTramite: number | null = null;
  idPagoTramite: number | null = null;
  idEntidad: number | null = null;
  monto: number = 0;
  requierePago: boolean = false;
  pagoRegistrado: boolean = false;
  tramiteGuardado: boolean = false;
  entidadGuardada: boolean = false;
  mostrarFormularioEntidad: boolean = false;
  
  // Fecha máxima para el date picker (fecha actual)
  get maxFechaPago(): Date {
    return new Date();
  }

  readonly listTipoDocumento: UiSelect[] = [
    { text: 'DNI', value: 'DNI' },
    { text: 'CARNET DE EXTRANJERIA', value: 'CARNET DE EXTRANJERIA' },
  ];

  readonly listTipoSolicitante: UiSelect[] = [
    { text: 'Alumno', value: 'ALUMNO' },
    { text: 'Docente', value: 'DOCENTE' },
    { text: 'Administrativo', value: 'ADMINISTRATIVO' },
    { text: 'Externo', value: 'EXTERNO' },
  ];

  listCategorias: UiSelect[] = [];
  listSubCategorias: UiSelect[] = [];
  private categoriasData: ListarCategoria[] = [];
  private subCategoriasData: ListarSubCategoria[] = [];

  readonly tramiteRegistrado = output<number>();

  readonly formGenerarTramite: FormGroup;
  readonly formPagoRealizado: FormGroup;
  readonly formEntidad: FormGroup;

  constructor() {
    this.formGenerarTramite = new FormGroup({
      tipoSolicitante: new FormControl('ALUMNO', { nonNullable: true, validators: [Validators.required] }),
      tipoDoc: new FormControl('DNI', { nonNullable: true, validators: [Validators.required] }),
      numeroDoc: new FormControl('', { nonNullable: true }),
      nombreSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [ Validators.required,Validators.minLength(this.tramiteValidation.minNombres), Validators.maxLength(this.tramiteValidation.maxNombres), Validators.pattern(this.tramiteValidation.soloLetras),
        ]
      }),
      apePaternoSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required, Validators.minLength(this.tramiteValidation.minApellidos), Validators.maxLength(this.tramiteValidation.maxApellidos), Validators.pattern(this.tramiteValidation.soloLetras),
        ]
      }),
      apeMaternoSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required, Validators.minLength(this.tramiteValidation.minApellidos), Validators.maxLength(this.tramiteValidation.maxApellidos), Validators.pattern(this.tramiteValidation.soloLetras),
        ]
      }),
      celularSolicitante: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required, Validators.minLength(this.tramiteValidation.celularLength), Validators.maxLength(this.tramiteValidation.celularLength), Validators.pattern(this.tramiteValidation.soloNumeros),
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
      fechaPago: new FormControl<Date | null>(null),
      montoPago: new FormControl('', { nonNullable: true }),
    });

    this.formEntidad = new FormGroup({
      razonSocial: new FormControl('', { nonNullable: true }),
      ruc: new FormControl('', { nonNullable: true, validators: [Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^[0-9]+$/)] }),
      direccion: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(150)] }),
    });
  }

  ngOnInit(): void {
    this.aplicarValidacionDocumento(this.formGenerarTramite.controls['tipoDoc'].value);

    this.formGenerarTramite.controls['tipoSolicitante'].valueChanges.subscribe((tipo) => {
      this.mostrarFormularioEntidad = tipo === 'EXTERNO';
    });

    this.formGenerarTramite.controls['tipoDoc'].valueChanges.subscribe((tipoDoc) => {
      this.formGenerarTramite.controls['numeroDoc'].setValue('');
      this.aplicarValidacionDocumento(tipoDoc);
    });

    this.formGenerarTramite.controls['idCategoriaTramite'].valueChanges.subscribe((categoriaIdValue) => {
      this.onCategoriaChange(categoriaIdValue);
    });

    this.formGenerarTramite.controls['idSubCategoriaTramite'].valueChanges.subscribe((subCategoriaIdValue) => {
      this.onSubCategoriaChange(subCategoriaIdValue);
    });

    this.cargarCategorias();
    
    // Cargar pago y entidad si es edición
    const tramiteActual = this.selectTramite();
    if (tramiteActual.idTramite !== 0) {
      this.idTramite = tramiteActual.idTramite;
      this.tramiteGuardado = true;
      this.cargarPagoExistente(tramiteActual.idTramite);
      this.cargarEntidadExistente(tramiteActual.idTramite);
    }
  }

  get numeroDocMaxLength(): number {
    return this.formGenerarTramite.controls['tipoDoc'].value === 'DNI'
      ? this.tramiteValidation.dniLength
      : this.tramiteValidation.carnetExtranjeriaMaxLength;
  }



  onArchivoSeleccionado(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] ?? null;
    this.formGenerarTramite.controls['archivoAnexo'].setValue(file ? file.name : '');
  }

  registrarTramite(): void {
    this.formGenerarTramite.markAllAsTouched();

    if (this.formGenerarTramite.invalid) {
      this.notificationService.warn('Completa los campos obligatorios del trámite.');
      return;
    }

    if (this.tramiteGuardado) {
      this.notificationService.info('El trámite ya ha sido guardado');
      return;
    }

    const tramiteActual = this.selectTramite();
    const isEdit = tramiteActual.idTramite !== 0;

    if (isEdit) {
      this.editarTramite(tramiteActual.idTramite);
    } else {
      this.crearTramite();
    }
  }

  actualizarTramite(): void {
    this.formGenerarTramite.markAllAsTouched();

    if (this.formGenerarTramite.invalid) {
      this.notificationService.warn('Completa los campos obligatorios del trámite.');
      return;
    }

    if (!this.idTramite) {
      this.notificationService.error('No se puede actualizar, ID de trámite no encontrado');
      return;
    }

    this.editarTramite(this.idTramite);
  }

  registrarPago(): void {
    if (!this.idTramite) {
      this.notificationService.warn('Debe guardar el trámite primero');
      return;
    }

    if (!this.validarFormularioPago()) {
      this.notificationService.warn('Completa los datos del pago');
      return;
    }

    if (this.pagoRegistrado && this.idPagoTramite) {
      // Si ya existe un pago, actualizar
      this.actualizarPagoTramite(this.idTramite, this.idPagoTramite);
    } else {
      // Si no existe, crear nuevo
      this.crearPagoTramite(this.idTramite);
    }
  }

  puedeAvanzar(): boolean {
    return this.tramiteGuardado && (!this.requierePago || this.pagoRegistrado);
  }

  avanzarAlSiguientePaso(): void {
    if (!this.puedeAvanzar()) {
      if (!this.tramiteGuardado) {
        this.notificationService.warn('Debe guardar el trámite primero');
      } else if (this.requierePago && !this.pagoRegistrado) {
        this.notificationService.warn('Debe registrar el pago para continuar');
      }
      return;
    }

    if (this.idTramite) {
      this.tramiteRegistrado.emit(this.idTramite);
    }
  }

  private crearTramite(): void {
    const payload = this.buildTramitePayload();

    this.loading.set(true);
    this.crearTramiteConRetornoUseCase.execute(payload).subscribe({
      next: (response) => {
        this.loading.set(false);
        
        if (response.isSuccess && response.data) {
          this.idTramite = response.data.codigoTramite;
          this.tramiteGuardado = true;
          this.notificationService.success('Trámite creado correctamente');
          
          if (!this.requierePago) {
            // Si no requiere pago, avanzar directamente
            this.tramiteRegistrado.emit(this.idTramite);
          } else {
            this.notificationService.info('Ahora debe registrar el pago para continuar');
          }
        }
      },
      error: () => {
        this.loading.set(false);
        this.notificationService.error('No se pudo crear el trámite');
      }
    });
  }

  private editarTramite(idTramite: number): void {
    const payload = { ...this.buildTramitePayload(), idTramite };

    this.loading.set(true);
    this.editarTramiteUseCase.execute(payload).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.notificationService.success('Trámite actualizado correctamente');
        this.idTramite = idTramite;
        this.tramiteGuardado = true;
        
        if (!this.requierePago) {
          this.tramiteRegistrado.emit(idTramite);
        } else {
          this.notificationService.info('Ahora debe registrar el pago para continuar');
        }
      },
      error: () => {
        this.loading.set(false);
        this.notificationService.error('No se pudo actualizar el trámite');
      }
    });
  }

  private buildTramitePayload() {
    return {
      idSubCategoriaTramite: Number(this.formGenerarTramite.controls['idSubCategoriaTramite'].value),
      tipoDoc: this.formGenerarTramite.controls['tipoDoc'].value,
      numeroDoc: this.formGenerarTramite.controls['numeroDoc'].value.trim(),
      tipoSolicitante: this.formGenerarTramite.controls['tipoSolicitante'].value,
      nombreSolicitante: this.formGenerarTramite.controls['nombreSolicitante'].value.trim(),
      apePaternoSolicitante: this.formGenerarTramite.controls['apePaternoSolicitante'].value.trim(),
      apeMaternoSolicitante: this.formGenerarTramite.controls['apeMaternoSolicitante'].value.trim(),
      celularSolicitante: this.formGenerarTramite.controls['celularSolicitante'].value.trim(),
      correoSolicitante: this.formGenerarTramite.controls['correoSolicitante'].value.trim(),
      asunto: this.formGenerarTramite.controls['asunto'].value.trim(),
      archivoAnexo: this.formGenerarTramite.controls['archivoAnexo'].value.trim(),
    };
  }

  private validarFormularioPago(): boolean {
    const voucher = this.formPagoRealizado.controls['numeroVoucher'].value?.trim();
    const fecha = this.formPagoRealizado.controls['fechaPago'].value;
    const monto = this.formPagoRealizado.controls['montoPago'].value?.trim();
    
    return !!voucher && !!fecha && !!monto;
  }

  private crearPagoTramite(idTramite: number): void {
    const pagoData = this.buildPagoPayload(idTramite);

    this.loading.set(true);
    this.crearPagoTramiteUseCase.execute(pagoData).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.pagoRegistrado = true;
        this.notificationService.success('Pago de trámite registrado correctamente');
      },
      error: (err) => {
        console.log(err);
        
        this.loading.set(false);
        this.notificationService.error('No se pudo registrar el pago del trámite');
      }
    });
  }

  private actualizarPagoTramite(idTramite: number, idPagoTramite: number): void {
    const pagoData = { ...this.buildPagoPayload(idTramite), idPagoTramite };

    this.loading.set(true);
    this.editarPagoTramiteUseCase.execute(pagoData).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.notificationService.success('Pago actualizado correctamente');
      },
      error: (err) => {
        console.log(err);
        this.loading.set(false);
        this.notificationService.error('No se pudo actualizar el pago');
      }
    });
  }

  private buildPagoPayload(idTramite: number) {
    const fechaPago = this.formPagoRealizado.controls['fechaPago'].value as Date;
    
    if (!fechaPago) {
      throw new Error('Fecha de pago no especificada');
    }

    // Formatear fecha como YYYY-MM-DD
    const year = fechaPago.getFullYear();
    const month = String(fechaPago.getMonth() + 1).padStart(2, '0');
    const day = String(fechaPago.getDate()).padStart(2, '0');
    const fechaFormateada = `${year}-${month}-${day}`;

    // Extraer hora y minutos
    const hora = String(fechaPago.getHours()).padStart(2, '0');
    const minuto = String(fechaPago.getMinutes()).padStart(2, '0');

    return {
      idTramite,
      constanciaPago: this.formPagoRealizado.controls['numeroVoucher'].value.trim(),
      fechaPago: fechaFormateada,
      horaPago: hora,
      minutoPago: minuto,
    };
  }

  private cargarPagoExistente(idTramite: number): void {
    this.obtenerPagosPorTramiteUseCase.execute(idTramite).subscribe({
      next: (response) => {
        if (response.isSuccess && response.data && response.data.length > 0) {
          const pago = response.data[0];
          this.pagoRegistrado = true;
          this.idPagoTramite = pago.idPagoTramite;

          // Reconstruir fecha completa
          const fechaHora = this.construirFechaDesdePartes(
            pago.fechaPago,
            pago.horaPago,
            pago.minutoPago
          );

          this.formPagoRealizado.patchValue({
            numeroVoucher: pago.constanciaPago,
            fechaPago: fechaHora,
            montoPago: this.monto.toString(),
          });
        }

        this.loading.set(false)
      },
      error: () => {
        this.loading.set(false)
        // Si no hay pago, continuar normalmente
        console.log('No se encontró pago para este trámite');
      }
    });
  }

  private construirFechaDesdePartes(fechaStr: string, hora: string, minuto: string): Date {
    // Espera formato YYYY-MM-DD o DD/MM/YYYY
    let fecha: Date;
    
    if (fechaStr.includes('-')) {
      // Formato YYYY-MM-DD
      fecha = new Date(fechaStr);
    } else {
      // Formato DD/MM/YYYY
      const [dia, mes, anio] = fechaStr.split('/');
      fecha = new Date(Number(anio), Number(mes) - 1, Number(dia));
    }

    fecha.setHours(Number(hora), Number(minuto), 0, 0);
    return fecha;
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

        const tramite = this.selectTramite();
        if (tramite.idTramite !== 0) {
          this.formGenerarTramite.patchValue({
            tipoSolicitante: tramite.tipoSolicitante,
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

          // Actualizar estado de formulario de entidad
          this.mostrarFormularioEntidad = tramite.tipoSolicitante === 'EXTERNO';

          this.cargarSubCategorias(tramite.idSubCategoriaTramite);
        }

        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false)
        this.notificationService.error('No se pudieron cargar las categorias');
      }
    });
  }

  private cargarSubCategorias(idSubCategoriaSeleccionada?: number): void {
    for (const categoria of this.categoriasData) {
      this.obtenerSubCategoriaPorCategoriaUseCase.execute(categoria.idCategoriaTramite).subscribe({
        next: (response) => {
          this.loading.set(false)
          const subcats = response.data ?? [];
          const found = subcats.find(s => s.idSubCategoriaTramite === idSubCategoriaSeleccionada);
          
          if (found) {
            this.subCategoriasData = subcats;
            this.listSubCategorias = subcats.map(s => ({
              text: s.nombre,
              value: String(s.idSubCategoriaTramite),
            }));
            this.formGenerarTramite.patchValue({
              idCategoriaTramite: String(categoria.idCategoriaTramite),
              idSubCategoriaTramite: String(idSubCategoriaSeleccionada),
            }, { emitEvent: false });
            
            // Cargar monto en modo edición
            if (idSubCategoriaSeleccionada) {
              this.cargarMontoSubcategoria(idSubCategoriaSeleccionada);
            }
          }
        },
        error : () => {
          this.loading.set(false)
        }
      });
    }
  }

  private cargarMontoSubcategoria(subCategoriaId: number): void {
    this.obtenerSubCategoriaPorIdUseCase.execute(subCategoriaId).subscribe({
      next: (response) => {
        if (response.isSuccess && response.data) {
          const montoStr = response.data.montoTramite;
          this.monto = montoStr ? parseFloat(montoStr) : 0;
          this.requierePago = this.monto > 0;
          
          if (this.requierePago) {
            this.formPagoRealizado.controls['montoPago'].setValue(this.monto.toString());
          }
        }
      },
      error: () => {
        console.log('No se pudo cargar el monto de la subcategoría');
      }
    });
  }

  private onSubCategoriaChange(subCategoriaIdValue: string): void {
    this.monto = 0;
    this.requierePago = false;

    const subCategoriaId = Number(subCategoriaIdValue);
    if (!subCategoriaId) return;

    this.obtenerSubCategoriaPorIdUseCase.execute(subCategoriaId).subscribe({
      next: (response) => {
        if (response.isSuccess && response.data) {
          const montoStr = response.data.montoTramite;
          this.monto = montoStr ? parseFloat(montoStr) : 0;
          this.requierePago = this.monto > 0;
          
          if (this.requierePago) {
            this.formPagoRealizado.controls['montoPago'].setValue(this.monto.toString());
          }
        }
      },
      error: () => {
        this.notificationService.error('No se pudo consultar el monto del trámite');
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

  registrarEntidad(): void {
    if (!this.tramiteGuardado || !this.idTramite) {
      this.notificationService.warn('Debe guardar el trámite antes de registrar la entidad');
      return;
    }

    if (!this.mostrarFormularioEntidad) {
      this.notificationService.info('La entidad solo está disponible para solicitantes externos');
      return;
    }

    // Validar que si llenó algún campo, debe llenar todos
    const razonSocial = this.formEntidad.controls['razonSocial'].value?.trim();
    const ruc = this.formEntidad.controls['ruc'].value?.trim();
    const direccion = this.formEntidad.controls['direccion'].value?.trim();

    if (!razonSocial && !ruc && !direccion) {
      this.notificationService.info('No hay datos de entidad para guardar');
      return;
    }

    if (!razonSocial || !ruc || !direccion) {
      this.notificationService.warn('Complete todos los campos de la entidad');
      return;
    }

    if (ruc.length !== 11) {
      this.notificationService.warn('El RUC debe tener 11 dígitos');
      return;
    }

    if (this.entidadGuardada && this.idEntidad) {
      this.actualizarEntidad(this.idTramite, this.idEntidad);
    } else {
      this.crearEntidad(this.idTramite);
    }
  }

  private crearEntidad(idTramite: number): void {
    const payload = {
      idTramite,
      razonSocial: this.formEntidad.controls['razonSocial'].value.trim(),
      ruc: this.formEntidad.controls['ruc'].value.trim(),
      direccion: this.formEntidad.controls['direccion'].value.trim(),
    };

    this.loading.set(true);
    this.crearEntidadUseCase.execute(payload).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.entidadGuardada = true;
          this.notificationService.success('Entidad registrada correctamente');
          // Cargar la entidad recién creada para obtener su ID
          this.cargarEntidadExistente(idTramite);
        } else {
          this.loading.set(false);
          this.notificationService.error('No se pudo registrar la entidad');
        }
      },
      error: () => {
        this.loading.set(false);
        this.notificationService.error('No se pudo registrar la entidad');
      }
    });
  }

  private actualizarEntidad(idTramite: number, idEntidad: number): void {
    const payload = {
      idEntidad,
      idTramite,
      razonSocial: this.formEntidad.controls['razonSocial'].value.trim(),
      ruc: this.formEntidad.controls['ruc'].value.trim(),
      direccion: this.formEntidad.controls['direccion'].value.trim(),
    };

    this.loading.set(true);
    this.editarEntidadUseCase.execute(payload).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.notificationService.success('Entidad actualizada correctamente');
      },
      error: () => {
        this.loading.set(false);
        this.notificationService.error('No se pudo actualizar la entidad');
      }
    });
  }

  private cargarEntidadExistente(idTramite: number): void {
    this.obtenerEntidadesPorTramiteUseCase.execute(idTramite).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.isSuccess && response.data && response.data.length > 0) {
          const entidad = response.data[0];
          this.entidadGuardada = true;
          this.idEntidad = entidad.idEntidad;

          this.formEntidad.patchValue({
            razonSocial: entidad.razonSocial,
            ruc: entidad.ruc,
            direccion: entidad.direccion,
          });
        }
      },
      error: () => {
        this.loading.set(false);
        console.log('No se encontró entidad para este trámite');
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
