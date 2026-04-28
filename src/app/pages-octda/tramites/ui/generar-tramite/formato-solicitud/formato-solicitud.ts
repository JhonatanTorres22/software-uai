import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { UiTextAreaComponent } from '../../../../../shared/components/ui-text-area/ui-text-area.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";

@Component({
  selector: 'app-formato-solicitud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiInputComponent, UiTextAreaComponent, ButtonModule, CheckboxModule, UiButtonComponent],
  templateUrl: './formato-solicitud.html',
  styleUrl: './formato-solicitud.scss',
})
export class FormatoSolicitud {
  readonly expRegNombre = /[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g;
  readonly expRegDocumento = /[^0-9]/g;

  formSolicitud = new FormGroup({
    destinatario: new FormControl('OCTDA', [Validators.required, Validators.maxLength(120)]),
    datosUsuario: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(120)]),
    carreraProfesional: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    semestreTurno: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    numeroContacto: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    numeroCarnet: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    numeroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(120)]),
    domicilioUsuario: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(180)]),
    facebook: new FormControl('', [Validators.maxLength(120)]),
    fundamento: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]),
    anexos: new FormControl('', [Validators.maxLength(500)]),
    recepcionPresencial: new FormControl(false, { nonNullable: true }),
    recepcionVirtual: new FormControl(false, { nonNullable: true }),
    sedeChincha: new FormControl(false, { nonNullable: true }),
    sedeIca: new FormControl(false, { nonNullable: true }),
    fecha: new FormControl('', [Validators.maxLength(20)]),
    firma: new FormControl('', [Validators.maxLength(120)]),
  });

  submitted = false;

  get invalid(): boolean {
    return this.formSolicitud.invalid;
  }

  generarTramite(): void {
    this.submitted = true;
    if (this.formSolicitud.invalid) {
      this.formSolicitud.markAllAsTouched();
      return;
    }

    // Placeholder: integrar con caso de uso de creación de trámite.
    console.log('Formato solicitud válido', this.formSolicitud.getRawValue());
  }

}
