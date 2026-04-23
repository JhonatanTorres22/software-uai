import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationService } from '@/shared/services/notification.service';
import { ActualizarUsuario, CrearUsuario, ListarUsuario } from '../../domain/entities/usuario.entity';
import { UsuarioSignal } from '../../domain/signals/usuario.signal';
import { UiInputComponent } from "@/shared/components/ui-input/ui-input.component";
import { UsuarioValidator } from '../../domain/validators/usuario.validator';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { CrearUsuarioUseCase } from '../../application/use-cases/usuarios/crearUsuario.use-case';
import { EditarUsuarioUseCase } from '../../application/use-cases/usuarios/editarUsuario.use-case';

@Component({
  selector: 'app-add-edit-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UiInputComponent],
  templateUrl: './add-edit-usuario.html',
  styleUrl: './add-edit-usuario.scss',
})
export class AddEditUsuario implements OnInit {

  private readonly ref = inject(DynamicDialogRef);
  formUsuario: FormGroup
  private readonly crearUseCase = inject(CrearUsuarioUseCase);
  private readonly editarUseCase = inject(EditarUsuarioUseCase);
  private readonly notifications = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private usuarioSignal = inject(UsuarioSignal)
  listUsuario = this.usuarioSignal.listUsuario;
  selectUsuario = this.usuarioSignal.selectUsuario
  loading = this.usuarioSignal.loading;

  /* VALIDACIONES */
  validation = inject(UsuarioValidator)
  expRegNombre = this.validation.expRegNombre
  expRegDocumento = this.validation.expRegDocumento
  maxLengthNombre = this.validation.maxLengthNombre
  maxLengthDocumento = this.validation.maxLengthDocumento
  minLengthNombre = this.validation.minLengthNombre
  minLengthDocumento = this.validation.minLengthDocumento
  expLockNombre = this.validation.expRegLockInputNombre
  expLockDocumento = this.validation.expRegLockDocumento
  constructor() {
    this.formUsuario = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.pattern(this.expRegNombre), Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]),
      apPaterno: new FormControl('', [Validators.required, Validators.pattern(this.expRegNombre), Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]),
      apMaterno: new FormControl('', [Validators.required, Validators.pattern(this.expRegNombre), Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre)]),
      correo: new FormControl('', [Validators.required]),
      nDocumento: new FormControl('', [Validators.required, Validators.pattern(this.expRegDocumento), Validators.minLength(this.minLengthDocumento), Validators.maxLength(this.maxLengthDocumento)])
    })
  }

  ngOnInit(): void {
    this.selectUsuario().id !== 0 ? this.patchValue() : ''
  }

  get modalPrimaryLabel(): string {
    return this.selectUsuario().id !== 0 ? 'Actualizar Usuario' : 'Crear Usuario';
  }

  get modalPrimaryDisabled(): boolean {
    return this.formUsuario.invalid;
  }
  patchValue() {

    this.formUsuario.patchValue({
      nombres: this.selectUsuario().nombres,
      apPaterno: this.selectUsuario().apePaterno,
      apMaterno: this.selectUsuario().apMaterno,
      nDocumento: this.selectUsuario().nDocumento,
      correo: this.selectUsuario().correo,
    })

  }
  guardar(): void {

    if (this.formUsuario.invalid) { return }
    let accion: 'Crear' | 'Editar' = this.selectUsuario().id !== 0 ? 'Editar' : 'Crear'


    this.confirmDialogService.open({
      type: 'question',
      title: `${accion} Usuario`,
      message: `¿Estás seguro de que deseas ${accion.toLowerCase()} este usuario?`,
      onAccept: () => {
        this.loading.set(true);
        switch (accion) {
          case 'Crear':
            const payloadCrear: CrearUsuario = {
              apePaterno : this.formUsuario.value.apPaterno,
              apMaterno : this.formUsuario.value.apMaterno,
              nombres : this.formUsuario.value.nombres,
              correo : this.formUsuario.value.correo,
              nDocumento : this.formUsuario.value.nDocumento,
              // tipoDocumento : this.formUsuario.value.tipoDocumento
            }
            this.crearUsuario(payloadCrear)
            console.log(payloadCrear);

            break;

          case 'Editar':
            const payloadEditar: ActualizarUsuario = {
              id: this.selectUsuario().id,
              ...this.formUsuario.getRawValue(),
            }
            this.editarUsuario(payloadEditar)
            console.log(payloadEditar);

            break;
        };

      }
    })
  }

  crearUsuario(crear: CrearUsuario) {
    this.crearUseCase.execute(crear).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.notifications.success(response.message || 'Usuario creado correctamente.');
          this.ref.close({ success: true });
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notifications.error('Error de conexión al crear el usuario.');
      }
    })
  }

  editarUsuario(editar: ActualizarUsuario) {
    this.editarUseCase.execute(editar).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.notifications.success(response.message || 'Usuario actualizado correctamente.');
          this.ref.close({ success: true });
          return;
        }
      },
      error: () => {
        this.loading.set(false);
        this.notifications.error('Error de conexión al actualizar el usuario.');
      }
    })
  }

  cancelar(): void {
    this.ref.close(null);
  }

}
