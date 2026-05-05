import { CommonModule } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit, output, signal, ViewChild } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { StepperModule } from 'primeng/stepper';
import { DatosTramite } from "./datos-tramite/datos-tramite";
import { FormatoSolicitud } from "./formato-solicitud/formato-solicitud";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { FormatoSolicitudData } from '../../domain/entity/formato-solicitud.model';
import { TramiteStateService } from '../../domain/services/tramite-state.service';
import { TramiteSignal } from '../../domain/signals/tramite.signal';
import { NotificationService } from '@/shared/services/notification.service';

@Component({
  selector: 'app-generar-tramite',
  imports: [ButtonModule, StepperModule, CommonModule, DatosTramite, FormatoSolicitud, UiIconButton, UiButtonComponent],
  templateUrl: './generar-tramite.html',
  styleUrl: './generar-tramite.scss',
})
export class GenerarTramite implements OnInit, OnDestroy {
  @ViewChild(DatosTramite) datosTramiteStep?: DatosTramite;

  readonly idTramite = input<number>(0);
  readonly closeRequested = output<void>();

  private readonly tramiteState = inject(TramiteStateService);
  private readonly tramiteSignal = inject(TramiteSignal);
  private readonly notificationService = inject(NotificationService);

  readonly solicitudData = this.tramiteState.solicitudData;
  readonly isEditMode = this.tramiteState.isEditMode;

  activeStep = signal(1);

  ngOnInit(): void {
    const id = this.idTramite();
    const tramite = this.tramiteSignal.selectTramite();
    this.tramiteState.idTramite.set(id);

    if (id > 0) {
      // Modo edición: pre-poblar datos del trámite seleccionado
      const prePopulated: FormatoSolicitudData = {
        idTramite: tramite.idTramite,
        idFormatoSolicitud: 0,
        nombreCompleto: [tramite.nombreSolicitante, tramite.apePaternoSolicitante, tramite.apeMaternoSolicitante]
          .filter(Boolean).join(' ').trim(),
        numeroContacto: tramite.celularSolicitante,
        numeroDocumento: tramite.numeroDoc,
        email: tramite.correoSolicitante,
        fundamento: tramite.asunto,
        anexos: tramite.archivoAnexo,
      };
      this.tramiteState.solicitudData.set(prePopulated);
    }
  }

  ngOnDestroy(): void {
    this.tramiteState.reset();
  }

  get actionLabel(): string {
    return this.isEditMode() ? 'Actualizar y continuar' : 'Registrar y continuar';
  }

  setStep(step: number): void {
    if (step === 2 && !this.solicitudData()) {
      this.notificationService.warn('Primero debes completar los datos del trámite');
      return;
    }
    this.activeStep.set(step);
  }

  registrarYContinuar(): void {
    this.datosTramiteStep?.registrarTramite();
  }

  onTramiteRegistrado(data: FormatoSolicitudData): void {
    this.tramiteState.solicitudData.set(data);
    this.activeStep.set(2);
  }

  closeDrawer(): void {
    this.closeRequested.emit();
  }
}

