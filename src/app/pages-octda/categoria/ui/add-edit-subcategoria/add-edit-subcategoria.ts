import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { NotificationService } from '@/shared/services/notification.service';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { CrearSubCategoriaUseCase } from '../../application/use-cases/subCategorias/crearSubCategoria.use-cases';
import { EditarSubCategoriaUseCase } from '../../application/use-cases/subCategorias/editarSubCategoria.use-cases';
import { CrearSubCategoria, EditarSubCategoria, ListarSubCategoria } from '../../domain/entity/subCategoria.entity';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';

@Component({
  selector: 'app-add-edit-subcategoria',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule
  ],
  templateUrl: './add-edit-subcategoria.html',
  styleUrls: ['./add-edit-subcategoria.scss'],
})
export class AddEditSubcategoria implements OnInit {

  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);
  private readonly notificationService = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly crearSubCategoriaUseCase = inject(CrearSubCategoriaUseCase);
  private readonly editarSubCategoriaUseCase = inject(EditarSubCategoriaUseCase);
  private readonly categoriaSignal = inject(CategoriaSignal);

  subcategoria: ListarSubCategoria | null = null;
  categoriaId = 0;
  submitted = false;
  saving = false;

  readonly formSubCategoria = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3), Validators.maxLength(100)] }),
    descripcion: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(255)] })
  });

  get modalPrimaryLabel(): string {
    return this.modoEdicion ? 'Actualizar Subcategoría' : 'Crear Subcategoría';
  }

  get modalPrimaryDisabled(): boolean {
    return this.formSubCategoria.invalid || this.saving;
  }

  get modoEdicion(): boolean {
    return !!this.subcategoria && this.subcategoria.idSubCategoriaTramite > 0;
  }

  ngOnInit(): void {
    const payload = this.config?.data?.payload ?? {};
    this.subcategoria = (payload.subcategoria as ListarSubCategoria | undefined) ?? null;
    this.categoriaId = Number(payload.categoriaId ?? this.categoriaSignal.selectCategoria().idCategoriaTramite ?? 0);

    if (this.subcategoria) {
      this.formSubCategoria.patchValue({
        nombre: this.subcategoria.nombre,
        descripcion: this.subcategoria.descripcion
      });
    }
  }

  guardar(): void {
    this.submitted = true;

    if (this.formSubCategoria.invalid) {
      return;
    }

    this.confirmDialogService.open({
      type: 'question',
      title: this.modoEdicion ? 'Actualizar subcategoría' : 'Crear subcategoría',
      message: this.modoEdicion
        ? '¿Deseas guardar los cambios de esta subcategoría?'
        : '¿Deseas crear esta subcategoría para la categoría seleccionada?',
      acceptLabel: this.modoEdicion ? 'Actualizar' : 'Crear',
      rejectLabel: 'Cancelar',
      onAccept: () => this.persistirSubCategoria()
    });
  }

  cancelar(): void {
    this.ref.close(null);
  }

  private persistirSubCategoria(): void {
    const nombre = this.formSubCategoria.controls.nombre.value.trim();
    const descripcion = this.formSubCategoria.controls.descripcion.value.trim();

    this.saving = true;

    if (this.modoEdicion && this.subcategoria) {
      const payload: EditarSubCategoria = {
        idSubCategoriaTramite: this.subcategoria.idSubCategoriaTramite,
        idCategoriaTramite: this.categoriaId,
        nombre,
        descripcion
      };

      this.editarSubCategoriaUseCase.execute(payload).subscribe({
        next: (response) => {
          this.saving = false;
          this.notificationService.success(`${response.message}, subcategoría actualizada correctamente`);
          this.ref.close({ success: true });
        },
        error: () => {
          this.saving = false;
          this.notificationService.error('No se pudo actualizar la subcategoría');
        }
      });
      return;
    }

    const payload: CrearSubCategoria = {
      idCategoriaTramite: this.categoriaId,
      nombre,
      descripcion
    };

    this.crearSubCategoriaUseCase.execute(payload).subscribe({
      next: (response) => {
        this.saving = false;
        this.notificationService.success(`${response.message}, subcategoría creada correctamente`);
        this.ref.close({ success: true });
      },
      error: () => {
        this.saving = false;
        this.notificationService.error('No se pudo crear la subcategoría');
      }
    });
  }

  getError(controlName: 'nombre' | 'descripcion'): string {
    const control = this.formSubCategoria.controls[controlName];
    if (!control || !control.errors || (!control.touched && !this.submitted)) {
      return '';
    }

    if (control.errors['required']) {
      return 'Este campo es obligatorio.';
    }

    if (control.errors['minlength']) {
      return `Debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`;
    }

    if (control.errors['maxlength']) {
      return `No debe superar ${control.errors['maxlength'].requiredLength} caracteres.`;
    }

    return 'Valor inválido.';
  }
}
