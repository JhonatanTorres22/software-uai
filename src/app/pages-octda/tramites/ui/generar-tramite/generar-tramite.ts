import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { StepperModule } from 'primeng/stepper';
import { DatosTramite } from "./datos-tramite/datos-tramite";
import { FormatoSolicitud } from "./formato-solicitud/formato-solicitud";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
@Component({
  selector: 'app-generar-tramite',
  imports: [ButtonModule, StepperModule, CommonModule, DatosTramite, FormatoSolicitud, UiIconButton, UiButtonComponent],
  templateUrl: './generar-tramite.html',
  styleUrl: './generar-tramite.scss',
})
export class GenerarTramite {
  readonly closeRequested = output<void>();
  activeStep = signal(1);

  setStep(step: number): void {
    this.activeStep.set(step);
  }

  closeDrawer(): void {
    this.closeRequested.emit();
  }
}
