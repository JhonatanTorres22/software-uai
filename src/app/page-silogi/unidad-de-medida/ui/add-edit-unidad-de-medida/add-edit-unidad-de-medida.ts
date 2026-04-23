import { CrearCategoria } from '@/page-silogi/categoria/domain/entities/categoria.entity';
import { CrearUnidadDeMedidaUseCase } from '@/page-silogi/unidad-de-medida/application/use-cases/crearUnidadDeMedida.use-case';
import { EditarUnidadDeMedidaUseCase } from '@/page-silogi/unidad-de-medida/application/use-cases/editarUnidadDeMedida.use-case';
import { CrearUnidadDeMedida, EditarUnidadDeMedida } from '@/page-silogi/unidad-de-medida/domain/entity/unidad-de-medida.entity';
import { UnidadDeMedidaSignal } from '@/page-silogi/unidad-de-medida/domain/signals/unidad-de-medida.signal';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoriaValidation } from '@/page-silogi/categoria/domain/validators/categoria.validator';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';

@Component({
  selector: 'app-add-edit-unidad-de-medida',
  imports: [FormsModule, ReactiveFormsModule, UiInputComponent],
  templateUrl: './add-edit-unidad-de-medida.html',
  styleUrl: './add-edit-unidad-de-medida.scss',
})
export class AddEditUnidadDeMedida implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  formUnidadDeMedida: FormGroup
  private readonly crearUseCase = inject(CrearUnidadDeMedidaUseCase);
  private readonly editarUseCase = inject(EditarUnidadDeMedidaUseCase);
  private readonly notifications = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);

  private unidadMedidaSignal = inject(UnidadDeMedidaSignal)
  selectUnidadDeMedida = this.unidadMedidaSignal.selectUnidadDeMedida
  loading = this.unidadMedidaSignal.loading;

  /* VALIDACIONES */
  private readonly validation = inject(CategoriaValidation)
  expRegNombre = this.validation.expRegNombre
  expRegDescripcion = this.validation.expRegDescripcion
  maxLengthNombre = this.validation.maxLengthNombre
  minLengthNombre = this.validation.minLengthNombre
  maxLengthDescripcion = this.validation.maxLengthDescripcion
  minLengthDescripcion = this.validation.minLengthDescripcion
  expLockNombre = this.validation.expRegLockInputNombre
  expLockDescripcion = this.validation.expRegLockDescripcion
  constructor() {
    this.formUnidadDeMedida = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.selectUnidadDeMedida().idUnidadDeMedida !== 0 ? this.patchValue() : ''
  }

  get modalPrimaryLabel(): string {
    return this.selectUnidadDeMedida().idUnidadDeMedida !== 0
      ? 'Actualizar Unidad de Medida'
      : 'Crear Unidad de Medida';
  }

  get modalPrimaryDisabled(): boolean {
    return this.formUnidadDeMedida.invalid;
  }

  guardar() {
    if (this.formUnidadDeMedida.invalid) { return }
    let accion: 'Crear' | 'Editar' = this.selectUnidadDeMedida().idUnidadDeMedida !== 0 ? 'Editar' : 'Crear'

    this.confirmDialogService.open({
      type: 'question',
      title: `${accion} Unidad de Medida`,
      message: `¿Estás seguro que deseas ${accion.toLowerCase()} la unidad de medida?`,
      onAccept: () => {
        this.loading.set(true);



        if (accion === 'Crear') {
          const createUnidadDeMedida: CrearUnidadDeMedida = {
            nombre: this.formUnidadDeMedida.value.nombre,
            descripcion: this.formUnidadDeMedida.value.descripcion
          }
          this.crearUnidadDeMedida(createUnidadDeMedida);
        }
        else {
          const editUnidadDeMedida: EditarUnidadDeMedida = {
            idUnidadDeMedida: this.selectUnidadDeMedida().idUnidadDeMedida,
            nombre: this.formUnidadDeMedida.value.nombre,
            descripcion: this.formUnidadDeMedida.value.descripcion
          }
          this.editarUnidadDeMedida(editUnidadDeMedida);

        }

      }
    })
  }

  crearUnidadDeMedida(crear: CrearUnidadDeMedida) {
    this.crearUseCase.execute(crear).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.isSuccess) {
          this.notifications.success(`Unidad de medida creada, ${response.message}`);
          this.ref.close({ success: true });
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notifications.error('Error de conexión al crear la unidad de medida.');
      }
    })
  }

  editarUnidadDeMedida(editar: EditarUnidadDeMedida) {
    this.editarUseCase.execute(editar).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.notifications.success(`Unidad de medida actualizada, ${response.message}`);
          this.ref.close({ success: true });
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notifications.error('Error de conexión al actualizar la unidad de medida.');
      }
    })
  }

  cancelar(): void {
    this.ref.close(null);
  }

  patchValue() {
    this.formUnidadDeMedida.patchValue({
      nombre: this.selectUnidadDeMedida().nombre,
      descripcion: this.selectUnidadDeMedida().descripcion
    })
  }
}
