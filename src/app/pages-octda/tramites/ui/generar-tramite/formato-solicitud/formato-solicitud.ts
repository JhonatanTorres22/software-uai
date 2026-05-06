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
  private readonly tramiteSignal = inject(TramiteSignal);

  loading = this.tramiteSignal.loading;

  formSolicitud = new FormGroup({
    destinatario: new FormControl('OCTDA', [Validators.required, Validators.maxLength(120)]),
    datosUsuario: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(120)]),
    numeroContacto: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    numeroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(120)]),
    fundamento: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
    anexos: new FormControl('', [Validators.maxLength(500)]),
    fecha: new FormControl(this.getFechaActual(), [Validators.required, Validators.maxLength(20)]),
    firma: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    conformidad: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  // Flag para controlar si ya cargamos el snapshot
  private snapshotRestored = false;

  constructor() {
    effect(() => {
      const data = this.solicitudData();
      if (!data) return;
      
      // SOLO precargamos si no hay snapshot Y no lo hemos restaurado ya
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
    
    console.log('🚀 formato-solicitud ngOnInit');
    console.log('  snapshot:', snapshot);
    console.log('  isEditMode:', isEditMode);
    console.log('  idTramite:', this.tramiteState.idTramite());
    console.log('  idFormatoSolicitud actual:', this.tramiteState.idFormatoSolicitud());
    
    // Si hay snapshot, SIEMPRE tiene prioridad (usuario retrocedió y avanzó)
    if (snapshot) {
      console.log('  → Restaurando snapshot (tiene prioridad)');
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

  generarTramite(): void {
    if (this.formSolicitud.invalid) {
      this.formSolicitud.markAllAsTouched();
      this.notificationService.warn('Por favor completa todos los campos requeridos');
      return;
    }

    const idTramite = this.tramiteState.idTramite();
    const idFormatoSolicitud = this.tramiteState.idFormatoSolicitud();
    
    console.log('🔍 DEBUG - generarTramite()');
    console.log('  idTramite:', idTramite);
    console.log('  idFormatoSolicitud:', idFormatoSolicitud);
    console.log('  isEditMode:', this.tramiteState.isEditMode());

    const basePayload = {
      idTramite,
      nombreDestinatario: this.formSolicitud.controls['destinatario'].value ?? 'OCTDA',
      mombresYApellidos: this.formSolicitud.controls['datosUsuario'].value ?? '',
      carreraProfesional: '',
      semestre: '',
      turno: '',
      celularSolicitante: this.formSolicitud.controls['numeroContacto'].value ?? '',
      nCarnet: '',
      nDocumento: this.formSolicitud.controls['numeroDocumento'].value ?? '',
      correoSolicitante: this.formSolicitud.controls['email'].value ?? '',
      domicilioSolicitante: '',
      facebook: '',
      fundamento: this.formSolicitud.controls['fundamento'].value ?? '',
    };

    this.loading.set(true);

    // Si tiene idFormatoSolicitud > 0, es EDICIÓN
    if (idTramite > 0) {
      const editPayload = { ...basePayload, idFormatoSolicitud };
      this.editarFormatoSolicitudUseCase.execute(editPayload).subscribe({
        next: (response) => {
          this.loading.set(false);
          this.notificationService.success(response.message + ', formato actualizado correctamente');
        },
        error: () => {
          this.loading.set(false);
          this.notificationService.error('No se pudo actualizar el formato de solicitud');
        }
      });
    } else {
      // Crear nuevo formato
      if (!idTramite) {
        this.notificationService.warn('No se pudo identificar el tramite. Regrese al paso 1.');
        this.loading.set(false);
        return;
      }
      this.crearFormatoSolicitudUseCase.execute(basePayload).subscribe({
        next: (response) => {
          this.loading.set(false);
          this.notificationService.success(response.message + ', formato de solicitud creado correctamente');
        },
        error: () => {
          this.loading.set(false);
          this.notificationService.error('No se pudo crear el formato de solicitud');
        }
      });
    }
  }

  private cargarFormatoExistente(): void {
    const idTramite = this.tramiteState.idTramite();
    console.log('📥 Cargando formato existente para idTramite:', idTramite);
    this.loading.set(true);
    this.obtenerFormatoSolicitudUseCase.execute(idTramite).subscribe({
      next: (response) => {
        console.log('📦 Response obtenerFormatoSolicitud:', response);
        const formatos = response.data ?? [];
        if (formatos.length > 0) {
          const formato = formatos[0];
          console.log('✅ Formato encontrado, idFormatoSolicitud:', formato.idFormatoSolicitud);
          this.tramiteState.idFormatoSolicitud.set(formato.idFormatoSolicitud);
          this.formSolicitud.patchValue({
            destinatario: formato.nombreDestinatario,
            datosUsuario: formato.mombresYApellidos,
            numeroContacto: formato.celularSolicitante,
            numeroDocumento: formato.nDocumento,
            email: formato.correoSolicitante,
            fundamento: formato.fundamento,
          });
        }
        this.loading.set(false);
      },
      error: () => {
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

}
