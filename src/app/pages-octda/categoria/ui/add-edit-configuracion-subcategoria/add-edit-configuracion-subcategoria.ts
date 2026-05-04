import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { UiIconButton } from '@/shared/components/ui-icon-button/ui-icon-button';
import { NotificationService } from '@/shared/services/notification.service';
import { ListarSubCategoria, SubCategoriaArchivoRequerido, SubCategoriaDetalle, SubCategoriaEtapaProceso } from '../../domain/entity/subCategoria.entity';

interface AreaDisponible {
  id: number;
  nombre: string;
  responsable: string;
}

interface DocumentoDisponible {
  id: number;
  nombre: string;
  tipos: string[];
}

type EtapaForm = FormGroup<{
  areaId: FormControl<number>;
  nombreArea: FormControl<string>;
  responsable: FormControl<string>;
  diasEstimados: FormControl<number>;
  observaciones: FormControl<string>;
}>;

type DocumentoForm = FormGroup<{
  documentoId: FormControl<number>;
  nombreDocumento: FormControl<string>;
  tipos: FormControl<string>;
}>;

@Component({
  selector: 'app-add-edit-configuracion-subcategoria',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule,
    DividerModule,
    ToggleSwitchModule,
    InputTextModule,
    TagModule,
    UiInputComponent,
    UiIconButton,
  ],
  templateUrl: './add-edit-configuracion-subcategoria.html',
  styleUrl: './add-edit-configuracion-subcategoria.scss',
})
export class AddEditConfiguracionSubcategoria implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);
  private readonly notificationService = inject(NotificationService);

  subCategoria: ListarSubCategoria | null = null;
  submitted = false;

  selectedAreaModel: AreaDisponible | null = null;
  selectedDocumentoModel: DocumentoDisponible | null = null;
  areaSuggestions: AreaDisponible[] = [];
  documentoSuggestions: DocumentoDisponible[] = [];

  readonly areasDisponibles: AreaDisponible[] = [
    { id: 1, nombre: 'Mesa de Partes', responsable: 'Coordinador de Mesa de Partes' },
    { id: 2, nombre: 'Gerencia Tecnica', responsable: 'Jefe de Gerencia Tecnica' },
    { id: 3, nombre: 'Gerencia General', responsable: 'Gerente General' },
    { id: 4, nombre: 'Asesoria Legal', responsable: 'Asesor Legal' },
    { id: 5, nombre: 'Control Interno', responsable: 'Especialista de Control Interno' },
    { id: 6, nombre: 'Registros Academicos', responsable: 'Jefe de Registros Academicos' },
  ];

  readonly documentosDisponibles: DocumentoDisponible[] = [
    { id: 1, nombre: 'Solicitud simple', tipos: ['PDF'] },
    { id: 2, nombre: 'DNI escaneado', tipos: ['PDF', 'JPG', 'PNG'] },
    { id: 3, nombre: 'Plano firmado', tipos: ['PDF'] },
    { id: 4, nombre: 'Documento tecnico', tipos: ['DOCX', 'PDF'] },
    { id: 5, nombre: 'Declaracion jurada', tipos: ['PDF'] },
  ];

  readonly formConfiguracion = new FormGroup({
    requiereCosto: new FormControl(false, { nonNullable: true }),
    costo: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.pattern(/^\d+(\.\d{1,2})?$/)]
    }),
    etapasProceso: new FormArray<EtapaForm>([]),
    archivosRequeridos: new FormArray<DocumentoForm>([]),
  });

  get modalPrimaryLabel(): string {
    return 'Guardar Configuracion';
  }

  get modalPrimaryDisabled(): boolean {
    return this.formConfiguracion.invalid || this.etapasProceso.length === 0 || this.archivosRequeridos.length === 0;
  }

  get etapasProceso(): FormArray<EtapaForm> {
    return this.formConfiguracion.controls.etapasProceso;
  }

  get archivosRequeridos(): FormArray<DocumentoForm> {
    return this.formConfiguracion.controls.archivosRequeridos;
  }

  ngOnInit(): void {
    const payload = this.config?.data?.payload ?? {};
    this.subCategoria = (payload.subCategoria as ListarSubCategoria | undefined) ?? null;

    const requiereCostoInicial = (this.subCategoria?.detalle?.costo ?? null) !== null && (this.subCategoria?.detalle?.costo ?? 0) > 0;
    this.formConfiguracion.controls.requiereCosto.setValue(requiereCostoInicial);

    if (requiereCostoInicial) {
      this.formConfiguracion.controls.costo.enable({ emitEvent: false });
      this.formConfiguracion.controls.costo.setValue(this.subCategoria?.detalle?.costo ?? 0);
    } else {
      this.formConfiguracion.controls.costo.setValue(0, { emitEvent: false });
      this.formConfiguracion.controls.costo.disable({ emitEvent: false });
    }

    this.formConfiguracion.controls.requiereCosto.valueChanges.subscribe((requiereCosto) => {
      if (requiereCosto) {
        this.formConfiguracion.controls.costo.enable();
        if (this.formConfiguracion.controls.costo.value <= 0) {
          this.formConfiguracion.controls.costo.setValue(1);
        }
        return;
      }

      this.formConfiguracion.controls.costo.setValue(0);
      this.formConfiguracion.controls.costo.disable();
    });

    this.precargarDetalle(this.subCategoria?.detalle);
  }

  cancelar(): void {
    this.ref.close(null);
  }

  guardar(): void {
    this.submitted = true;
    this.formConfiguracion.markAllAsTouched();

    if (this.modalPrimaryDisabled) {
      return;
    }

    const detalle: SubCategoriaDetalle = {
      costo: this.formConfiguracion.controls.requiereCosto.value ? Number(this.formConfiguracion.controls.costo.value) : null,
      tiempoEstimadoTotalDias: this.etapasProceso.controls.reduce((acc, etapa) => acc + Number(etapa.controls.diasEstimados.value), 0),
      etapasProceso: this.etapasProceso.controls.map((etapa, index) => ({
        orden: index + 1,
        nombreArea: etapa.controls.nombreArea.value,
        responsable: etapa.controls.responsable.value,
        diasEstimados: Number(etapa.controls.diasEstimados.value),
        estado: 'pendiente',
        observaciones: etapa.controls.observaciones.value,
      } as SubCategoriaEtapaProceso)),
      archivosRequeridos: this.archivosRequeridos.controls.map((documento) => ({
        nombreDocumento: documento.controls.nombreDocumento.value,
        obligatorio: true,
        formatosPermitidos: documento.controls.tipos.value.split('/').map((item) => item.trim()).filter(Boolean),
        tamanoMaximoMb: 0,
      } as SubCategoriaArchivoRequerido)),
    };

    this.notificationService.success('Configuracion de subcategoria guardada correctamente');
    this.ref.close({ success: true, detalle });
  }

  onCostoInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value ?? '';
    const sanitized = raw.replace(/[^\d.]/g, '');
    const parts = sanitized.split('.');
    const normalized = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : sanitized;
    const formatted = normalized.includes('.')
      ? `${normalized.split('.')[0]}.${normalized.split('.')[1].slice(0, 2)}`
      : normalized;

    const value = Number(formatted || 0);
    this.formConfiguracion.controls.costo.setValue(value, { emitEvent: false });
  }

  completarAreas(event: { query: string }): void {
    const q = (event.query ?? '').trim().toLowerCase();
    this.areaSuggestions = this.areasDisponibles
      .filter((area) => !this.etapasProceso.controls.some((item) => item.controls.areaId.value === area.id))
      .filter((area) => area.nombre.toLowerCase().includes(q) || area.responsable.toLowerCase().includes(q));
  }

  agregarAreaDesdeEvento(event: { value: AreaDisponible }): void {
    this.agregarArea(event.value);
  }

  agregarArea(area: AreaDisponible): void {
    const existe = this.etapasProceso.controls.some((item) => item.controls.areaId.value === area.id);
    if (existe) {
      return;
    }

    this.etapasProceso.push(this.createEtapaForm(area));
    this.selectedAreaModel = null;
    this.actualizarOrdenEtapas();
  }

  eliminarArea(index: number): void {
    this.etapasProceso.removeAt(index);
    this.actualizarOrdenEtapas();
  }

  subirArea(index: number): void {
    if (index <= 0) {
      return;
    }

    const current = this.etapasProceso.at(index);
    const previous = this.etapasProceso.at(index - 1);

    this.etapasProceso.setControl(index - 1, current);
    this.etapasProceso.setControl(index, previous);
    this.actualizarOrdenEtapas();
  }

  bajarArea(index: number): void {
    if (index >= this.etapasProceso.length - 1) {
      return;
    }

    const current = this.etapasProceso.at(index);
    const next = this.etapasProceso.at(index + 1);

    this.etapasProceso.setControl(index + 1, current);
    this.etapasProceso.setControl(index, next);
    this.actualizarOrdenEtapas();
  }

  completarDocumentos(event: { query: string }): void {
    const q = (event.query ?? '').trim().toLowerCase();
    this.documentoSuggestions = this.documentosDisponibles
      .filter((documento) => !this.archivosRequeridos.controls.some((item) => item.controls.documentoId.value === documento.id))
      .filter((documento) => documento.nombre.toLowerCase().includes(q));
  }

  agregarDocumentoDesdeEvento(event: { value: DocumentoDisponible }): void {
    const documento = event.value;
    const existe = this.archivosRequeridos.controls.some((item) => item.controls.documentoId.value === documento.id);
    if (existe) {
      return;
    }

    this.archivosRequeridos.push(new FormGroup({
      documentoId: new FormControl(documento.id, { nonNullable: true }),
      nombreDocumento: new FormControl(documento.nombre, { nonNullable: true }),
      tipos: new FormControl(documento.tipos.join(' / '), { nonNullable: true }),
    }));

    this.selectedDocumentoModel = null;
  }

  eliminarDocumento(index: number): void {
    this.archivosRequeridos.removeAt(index);
  }

  private createEtapaForm(area: AreaDisponible): EtapaForm {
    return new FormGroup({
      areaId: new FormControl(area.id, { nonNullable: true }),
      nombreArea: new FormControl(area.nombre, { nonNullable: true }),
      responsable: new FormControl(area.responsable, { nonNullable: true }),
      diasEstimados: new FormControl(1, { nonNullable: true, validators: [Validators.required, Validators.min(1), Validators.max(365)] }),
      observaciones: new FormControl('Accion principal del area en esta etapa.', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(180)] }),
    });
  }

  private actualizarOrdenEtapas(): void {
    this.etapasProceso.updateValueAndValidity({ emitEvent: false });
  }

  private precargarDetalle(detalle?: SubCategoriaDetalle): void {
    if (!detalle) {
      return;
    }

    (detalle.etapasProceso ?? []).forEach((etapa) => {
      this.etapasProceso.push(new FormGroup({
        areaId: new FormControl(etapa.orden, { nonNullable: true }),
        nombreArea: new FormControl(etapa.nombreArea, { nonNullable: true }),
        responsable: new FormControl(etapa.responsable ?? etapa.nombreArea, { nonNullable: true }),
        diasEstimados: new FormControl(etapa.diasEstimados, { nonNullable: true, validators: [Validators.required, Validators.min(1), Validators.max(365)] }),
        observaciones: new FormControl(etapa.observaciones ?? 'Accion principal del area en esta etapa.', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(180)] }),
      }));
    });

    (detalle.archivosRequeridos ?? []).forEach((archivo, index) => {
      this.archivosRequeridos.push(new FormGroup({
        documentoId: new FormControl(index + 1, { nonNullable: true }),
        nombreDocumento: new FormControl(archivo.nombreDocumento, { nonNullable: true }),
        tipos: new FormControl(archivo.formatosPermitidos.join(' / '), { nonNullable: true }),
      }));
    });
  }

}
