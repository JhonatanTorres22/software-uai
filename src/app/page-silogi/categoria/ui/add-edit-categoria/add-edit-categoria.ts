import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CrearCategoriaUseCase } from '../../application/use-cases/crearCategoria.use-cases';
import { EditarCategoriaUseCase } from '../../application/use-cases/editarCategoria.use-cases';
import { NotificationService } from '@/shared/services/notification.service';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { UiModalFooter } from "@/shared/components/ui-modal-footer/ui-modal-footer";
import { CrearCategoria, EditarCategoria } from '../../domain/entities/categoria.entity';
import { CategoriaValidation } from '../../domain/validators/categoria.validator';

@Component({
  selector: 'app-add-edit-categoria',
  imports: [FormsModule, ReactiveFormsModule, UiInputComponent, UiModalFooter],
  templateUrl: './add-edit-categoria.html',
  styleUrl: './add-edit-categoria.scss',
})
export class AddEditCategoria implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  formCategoria: FormGroup
  private readonly crearUseCase = inject(CrearCategoriaUseCase);
  private readonly editarUseCase = inject(EditarCategoriaUseCase);
  private readonly notifications = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private categoriaSignal = inject(CategoriaSignal)
  listCategoria = this.categoriaSignal.listCategoria;
  selectCategoria = this.categoriaSignal.selectCategoria
  loading = this.categoriaSignal.loading;


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
    this.formCategoria = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.validation.maxLengthNombre),
        Validators.minLength(this.validation.minLengthNombre),
        Validators.pattern(this.validation.expRegNombre)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.validation.maxLengthDescripcion),
        Validators.minLength(this.validation.minLengthDescripcion),
        Validators.pattern(this.validation.expRegDescripcion)
      ])
    })
  }

  ngOnInit(): void {
    this.selectCategoria().idCategoria !== 0 ? this.patchValue() : ''
  }

  patchValue() {
    this.formCategoria.patchValue({
      nombre: this.selectCategoria().nombre,
      descripcion: this.selectCategoria().descripcion
    })
  }

  guardar() {
    if (this.formCategoria.invalid) { return }
    let accion: 'Crear' | 'Editar' = this.selectCategoria().idCategoria !== 0 ? 'Editar' : 'Crear'

    this.confirmDialogService.open({
      type: 'question',
      title: `${accion} Categoría`,
      message: `¿Estás seguro que deseas ${accion.toLowerCase()} la categoría?`,
      onAccept: () => {
        this.loading.set(true);



        if (accion === 'Crear') {
          const createCategoria: CrearCategoria = {
            nombre: this.formCategoria.value.nombre,
            descripcion: this.formCategoria.value.descripcion
          }
          this.crearCategoria(createCategoria);
        }
        else {
          const editCategoria = {
            idCategoria: this.selectCategoria().idCategoria,
            nombre: this.formCategoria.value.nombre,
            descripcion: this.formCategoria.value.descripcion
          }
          this.editarCategoria(editCategoria);

        }

      }
    })
  }

  crearCategoria(crear: CrearCategoria) {
    this.crearUseCase.execute(crear).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.isSuccess) {
          this.notifications.success(`Categoria creada, ${response.message}`);
          this.ref.close({ success: true });
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notifications.error('Error de conexión al crear la categoría.');
      }
    })
  }

  editarCategoria(editar: EditarCategoria) {
    this.editarUseCase.execute(editar).subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.notifications.success(`Categoria actualizada, ${response.message}`);
          this.ref.close({ success: true });
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notifications.error('Error de conexión al actualizar la categoría.');
      }
    })
  }

  cancelar(): void {
    this.ref.close(null);
  }
}
