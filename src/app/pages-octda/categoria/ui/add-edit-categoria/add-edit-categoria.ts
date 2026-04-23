import { Component, inject, OnInit } from '@angular/core';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { CategoriaValidations } from '../../domain/validation/categoria.validations';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Categoria, CrearCategoria, EditarCategoria } from '../../domain/categoria.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-categoria',
  imports: [ReactiveFormsModule, FormsModule, UiInputComponent, CommonModule],
  templateUrl: './add-edit-categoria.html',
  styleUrl: './add-edit-categoria.scss',
})
export class AddEditCategoria implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);
  private readonly categoriaSignal = inject(CategoriaSignal);
  selectCategoria = this.categoriaSignal.selectCategoria;
  loading = this.categoriaSignal.loading;
  formCategoria: FormGroup
  categoria!: Categoria;
  private notificationService = inject(NotificationService)
  private confirmDialogService = inject(ConfirmDialogService)
  /* VALIDACIONES */
  private readonly categoriaValidations = inject(CategoriaValidations);
  maxLengthNombre = this.categoriaValidations.maxLengthNombre;
  maxLengthDescripcion = this.categoriaValidations.maxLengthDescripcion;
  minLengthNombre = this.categoriaValidations.minLengthNombre;
  minLengthDescripcion = this.categoriaValidations.minLengthDescripcion;
  expReg = this.categoriaValidations.expReg;
  expLockInputNombre = this.categoriaValidations.expLockInputNombre;
  expLockInputDescripcion = this.categoriaValidations.expLockInputDescripcion;


  constructor() {
    this.formCategoria = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre), Validators.pattern(this.expReg)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(this.minLengthDescripcion), Validators.maxLength(this.maxLengthDescripcion), Validators.pattern(this.expReg)]),
    });
  }
  ngOnInit(): void {
    this.categoria = this.config.data.payload.categoria

    if (this.categoria.id !== 0) {
      this.patchValue();
    }
  }

  get modalPrimaryLabel(): string {
    return this.selectCategoria().id !== 0 ? 'Actualizar Categoria' : 'Crear Categoria';
  }

  get modalPrimaryDisabled(): boolean {
    return this.formCategoria.invalid;
  }

  guardarCategoria() {
    if (this.formCategoria.invalid) { return }
    let accion: 'Crear' | 'Editar' = this.categoria.id === 0 ? 'Crear' : 'Editar';
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
          const editCategoria: EditarCategoria = {
            id: this.categoria.id,
            nombre: this.formCategoria.value.nombre,
            descripcion: this.formCategoria.value.descripcion
          }
          this.editarCategoria(editCategoria);
        }
      }
    })

  }

  crearCategoria(crear: CrearCategoria) { }

  editarCategoria(editar: EditarCategoria) { }

  patchValue() {
    this.formCategoria.patchValue({
      nombre: this.categoria.nombre,
      descripcion: this.categoria.descripcion,
    })
  }

  cancelar(): void {
    this.ref.close(null);
  }

}
