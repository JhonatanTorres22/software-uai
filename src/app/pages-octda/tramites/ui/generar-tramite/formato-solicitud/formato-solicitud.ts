import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { UiTextAreaComponent } from '../../../../../shared/components/ui-text-area/ui-text-area.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { FormatoSolicitudData } from '../../../domain/entity/formato-solicitud.model';
import { TramiteStateService, FormatoSolicitudSnapshot } from '../../../domain/services/tramite-state.service';
import { ObtenerFormatoSolicitudPorTramiteUseCase } from '../../../application/use-cases/formatoSolicitud/obtenerFormatoSolicitud.use-case';
import { CrearFormatoSolicitudUseCase } from '../../../application/use-cases/formatoSolicitud/crearFormatoSolicitud.use-case';
import { EditarFormatoSolicitudUseCase } from '../../../application/use-cases/formatoSolicitud/editarFormatoSolicitud.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { TramiteSignal } from '../../../domain/signals/tramite.signal';

import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { ActualizarEstadoTramite, CrearFormatoSolicitud, EditarFormatoSolicitud, ListarTramite } from '@/pages-octda/tramites/domain/entity/tramite.entity';
import { ActualizarEstadoTramiteUseCase } from '@/pages-octda/tramites/application/use-cases/tramites/actualizarEstadoTramite.use-case';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';

@Component({
  selector: 'app-formato-solicitud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiInputComponent, UiTextAreaComponent, ButtonModule, CheckboxModule, UiButtonComponent, UiLoading],
  templateUrl: './formato-solicitud.html',
  styleUrl: './formato-solicitud.scss',
})
export class FormatoSolicitud implements OnInit, OnDestroy {
  readonly solicitudData = input<FormatoSolicitudData | null>(null);

  private readonly tramiteState = inject(TramiteStateService);
  private readonly obtenerFormatoSolicitudUseCase = inject(ObtenerFormatoSolicitudPorTramiteUseCase);
  private readonly crearFormatoSolicitudUseCase = inject(CrearFormatoSolicitudUseCase);
  private readonly editarFormatoSolicitudUseCase = inject(EditarFormatoSolicitudUseCase);
  private readonly notificationService = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly tramiteSignal = inject(TramiteSignal);
  private readonly actualizarEstadoTramiteUseCase = inject(ActualizarEstadoTramiteUseCase);

  loading = this.tramiteSignal.loading;

  formSolicitud = new FormGroup({
    destinatario: new FormControl('OCTDA', [Validators.required, Validators.maxLength(120)]),
    datosUsuario: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(120)]),
    carreraProfesional: new FormControl('', [Validators.maxLength(120)]),
    semestre: new FormControl('', [Validators.maxLength(20)]),
    turno: new FormControl('', [Validators.maxLength(20)]),
    numeroContacto: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    nCarnet: new FormControl('', [Validators.maxLength(20)]),
    numeroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(120)]),
    domicilioSolicitante: new FormControl('', [Validators.maxLength(200)]),
    facebook: new FormControl('', [Validators.maxLength(100)]),
    fundamento: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
    anexos: new FormControl('', [Validators.maxLength(500)]),
    fecha: new FormControl(this.getFechaActual(), [Validators.required, Validators.maxLength(20)]),
    firma: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    conformidad: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  private snapshotRestored = false;

  constructor() {
    effect(() => {
      const data = this.solicitudData();
      if (!data) return;

      const snapshot = this.tramiteState.formatoSolicitudSnapshot();
      if (!snapshot && !this.snapshotRestored) {
        this.formSolicitud.patchValue({
          datosUsuario: data.nombreCompleto,
          numeroContacto: data.numeroContacto,
          numeroDocumento: data.numeroDocumento,
          email: data.email,
          fundamento: data.fundamento,
          anexos: data.anexos,
          fecha: this.getFechaActual(),
        });
      }
    });
  }

  ngOnInit(): void {
    const snapshot = this.tramiteState.formatoSolicitudSnapshot();
    const isEditMode = this.tramiteState.isEditMode();

    // Si hay snapshot, SIEMPRE tiene prioridad (usuario retrocedió y avanzó)
    if (snapshot) {
      this.restoreSnapshot(snapshot);
      this.snapshotRestored = true;
      return;
    }

    // No hay snapshot, verificar si es modo edición
    if (isEditMode) {
      const idFormatoSolicitud = this.tramiteState.idFormatoSolicitud();
      console.log('  idFormatoSolicitud del state:', idFormatoSolicitud);

      if (!idFormatoSolicitud || idFormatoSolicitud === 0) {
        console.log('  → Modo edición SIN idFormatoSolicitud, cargando desde API');
        this.cargarFormatoExistente();
      }
    } else {
      console.log('  → Modo creación, esperando datos de solicitudData');
    }
  }

  ngOnDestroy(): void {
    this.tramiteState.formatoSolicitudSnapshot.set(this.buildSnapshot());
  }

  get invalid(): boolean {
    return this.formSolicitud.invalid;
  }

  get isEditMode() {
    return this.tramiteState.isEditMode;
  }

  get isEditingFormato(): boolean {
    const idFormatoSolicitud = this.tramiteState.idFormatoSolicitud();
    return idFormatoSolicitud !== null && idFormatoSolicitud !== undefined && idFormatoSolicitud > 0;
  }

  generarTramite(): void {
    if (this.formSolicitud.invalid) {
      this.formSolicitud.markAllAsTouched();
      this.notificationService.warn('Por favor completa todos los campos requeridos');
      return;
    }

    const idTramite = this.tramiteState.idTramite();
    const idFormatoSolicitud = this.tramiteState.idFormatoSolicitud();

    const basePayload = {
      idTramite,
      nombreDestinatario: this.formSolicitud.controls['destinatario'].value ?? 'OCTDA',
      mombresYApellidos: this.formSolicitud.controls['datosUsuario'].value ?? '',
      carreraProfesional: this.formSolicitud.controls['carreraProfesional'].value ?? '',
      semestre: this.formSolicitud.controls['semestre'].value ?? '',
      turno: this.formSolicitud.controls['turno'].value ?? '',
      celularSolicitante: this.formSolicitud.controls['numeroContacto'].value ?? '',
      nCarnet: this.formSolicitud.controls['nCarnet'].value ?? '',
      nDocumento: this.formSolicitud.controls['numeroDocumento'].value ?? '',
      correoSolicitante: this.formSolicitud.controls['email'].value ?? '',
      domicilioSolicitante: this.formSolicitud.controls['domicilioSolicitante'].value ?? '',
      facebook: this.formSolicitud.controls['facebook'].value ?? '',
      fundamento: this.formSolicitud.controls['fundamento'].value ?? '',
    };

    this.confirmDialogService.open({
      type: 'question',
      message: idFormatoSolicitud && idFormatoSolicitud > 0
        ? '¿Estás seguro de que deseas actualizar el formato de solicitud?'
        : '¿Estás seguro de que deseas crear el formato de solicitud? Al guardarlo, el trámite será derivado inmediatamente al área de OCTDA.',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      onAccept: () => {
        this.loading.set(true);

        if (idFormatoSolicitud && idFormatoSolicitud > 0) {
          const editPayload = { ...basePayload, idFormatoSolicitud };

          this.editarFormatoSolicitud(editPayload);
        } else {
          if (!idTramite) {
            this.notificationService.warn('No se pudo identificar el trámite. Regrese al paso 1.');
            this.loading.set(false);
            return;
          }
          this.crearFormatoSolicitud(basePayload)
        }
      }
    })
  }

  crearFormatoSolicitud(crear: CrearFormatoSolicitud) {
    this.crearFormatoSolicitudUseCase.execute(crear).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.notificationService.success(`${response.message}, formato de solicitud creado correctamente`);
        if (response.isSuccess) {
          this.actualizarEstadoTramite(this.tramiteSignal.selectTramite());
        }
      },
      error: (err) => {
        console.error('Error al crear formato:', err);
        this.loading.set(false);
        this.notificationService.error('No se pudo crear el formato de solicitud');
      }
    });
  }

  editarFormatoSolicitud(editar: EditarFormatoSolicitud) {
    this.editarFormatoSolicitudUseCase.execute(editar).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.notificationService.success(`${response.message}, formato de solicitud actualizado correctamente`);
        if (response.isSuccess) {
          this.actualizarEstadoTramite(this.tramiteSignal.selectTramite());
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error('No se pudo actualizar el formato de solicitud');
      }
    });

  }

  private cargarFormatoExistente(): void {
    const idTramite = this.tramiteState.idTramite();
    this.loading.set(true);
    this.obtenerFormatoSolicitudUseCase.execute(idTramite).subscribe({
      next: (response) => {
        const formatos = response.data ?? [];

        if (formatos.length > 0) {
          // Existe formato → Modo EDICIÓN
          const formato = formatos[0];
          this.tramiteState.idFormatoSolicitud.set(formato.idFormatoSolicitud);
          this.formSolicitud.patchValue({
            destinatario: formato.nombreDestinatario,
            datosUsuario: formato.mombresYApellidos,
            carreraProfesional: formato.carreraProfesional,
            semestre: formato.semestre,
            turno: formato.turno,
            numeroContacto: formato.celularSolicitante,
            nCarnet: formato.nCarnet,
            numeroDocumento: formato.nDocumento,
            email: formato.correoSolicitante,
            domicilioSolicitante: formato.domicilioSolicitante,
            facebook: formato.facebook,
            fundamento: formato.fundamento,
          });
        } else {
          this.tramiteState.idFormatoSolicitud.set(0);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar formato:', err);
        // Si hay error, asumir que no existe → Modo CREACIÓN
        this.tramiteState.idFormatoSolicitud.set(0);
        this.loading.set(false);
      }
    });
  }

  private getFechaActual(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private buildSnapshot(): FormatoSolicitudSnapshot {
    const form = this.formSolicitud.getRawValue();
    return {
      idFormatoSolicitud: this.tramiteState.idFormatoSolicitud(),
      destinatario: form.destinatario ?? 'OCTDA',
      datosUsuario: form.datosUsuario ?? '',
      numeroContacto: form.numeroContacto ?? '',
      numeroDocumento: form.numeroDocumento ?? '',
      email: form.email ?? '',
      fundamento: form.fundamento ?? '',
      anexos: form.anexos ?? '',
      fecha: form.fecha ?? this.getFechaActual(),
      firma: form.firma ?? '',
      conformidad: form.conformidad ?? false,
    };
  }

  private restoreSnapshot(snapshot: FormatoSolicitudSnapshot): void {
    console.log('🔄 Restaurando snapshot con idFormatoSolicitud:', snapshot.idFormatoSolicitud);
    // Restaurar el idFormatoSolicitud al state
    this.tramiteState.idFormatoSolicitud.set(snapshot.idFormatoSolicitud);

    this.formSolicitud.patchValue({
      destinatario: snapshot.destinatario,
      datosUsuario: snapshot.datosUsuario,
      numeroContacto: snapshot.numeroContacto,
      numeroDocumento: snapshot.numeroDocumento,
      email: snapshot.email,
      fundamento: snapshot.fundamento,
      anexos: snapshot.anexos,
      fecha: snapshot.fecha,
      firma: snapshot.firma,
      conformidad: snapshot.conformidad,
    });
  }

  actualizarEstadoTramite(tramite: ListarTramite) {
    let actualizarTramite: ActualizarEstadoTramite = {
      estado: 'INGRESADO',
      idTramite: tramite.idTramite
    }

    this.loading.set(true);

    this.actualizarEstadoTramiteUseCase.execute(actualizarTramite).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.notificationService.success(`${response.message}, estado del trámite actualizado a INGRESADO`)
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error(`Error al actualizar estado del trámite: ${err.message || 'Error desconocido'}`)
      }
    })
  }

}
