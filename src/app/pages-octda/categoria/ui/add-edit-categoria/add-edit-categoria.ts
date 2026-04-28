import { Component, inject, OnInit } from '@angular/core';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { CategoriaValidations } from '../../domain/validation/categoria.validations';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ListarCategoria, CrearCategoria, EditarCategoria } from '../../domain/entity/categoria.model';
import { CommonModule } from '@angular/common';
import { CrearCategoriaUseCase } from '../../application/use-cases/categorias/crearCategoria.use-case';
import { EditarCategoriaUseCase } from '../../application/use-cases/categorias/editarCategoria.use-case';
import { UiTextAreaComponent } from "@/shared/components/ui-text-area/ui-text-area.component";

@Component({
  selector: 'app-add-edit-categoria',
  imports: [ReactiveFormsModule, FormsModule, UiInputComponent, CommonModule, UiTextAreaComponent],
  templateUrl: './add-edit-categoria.html',
  styleUrl: './add-edit-categoria.scss',
})
export class AddEditCategoria implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);
  private readonly categoriaSignal = inject(CategoriaSignal);
  // selectCategoria = this.categoriaSignal.selectCategoria;
  loading = this.categoriaSignal.loading;
  formCategoria: FormGroup
  categoria!: ListarCategoria;
  prefillNombre = '';
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

  private readonly editarCategoriaUseCase = inject(EditarCategoriaUseCase);
  private readonly crearCategoriaUseCase = inject(CrearCategoriaUseCase);

  constructor() {
    this.formCategoria = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(this.minLengthNombre), Validators.maxLength(this.maxLengthNombre), Validators.pattern(this.expReg)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(this.minLengthDescripcion), Validators.maxLength(this.maxLengthDescripcion), Validators.pattern(this.expReg)]),
    });
  }
  ngOnInit(): void {
    const payload = this.config?.data?.payload ?? {};
    this.categoria = (payload.categoria as ListarCategoria | undefined) ?? this.categoriaSignal.selectCategoriaDefault;
    this.prefillNombre = (payload.prefillNombre as string | undefined)?.trim() ?? '';

    if (this.categoria.idCategoriaTramite !== 0) {
      this.patchValue();
    } else if (this.prefillNombre) {
      this.formCategoria.patchValue({ nombre: this.prefillNombre });
    }
  }

    get modalPrimaryLabel(): string {
    return this.categoria.idCategoriaTramite !== 0 ? 'Actualizar Categoria' : 'Crear Categoria';
  }
  get modalPrimaryDisabled(): boolean {
    return this.formCategoria.invalid;
  }

  guardar() {
    if (this.formCategoria.invalid) { return }
    let accion: 'Crear' | 'Editar' = this.categoria.idCategoriaTramite === 0 ? 'Crear' : 'Editar';
    this.confirmDialogService.open({
      type: 'question',
      title: `${accion} Categoría`,
      message: `¿Estás seguro que deseas ${accion.toLowerCase()} la categoría?`,
      onAccept: () => {
        this.loading.set(true);
        console.log(accion);
        if (accion === 'Crear') {
          
          const createCategoria: CrearCategoria = {
            nombre: this.formCategoria.value.nombre,
            descripcion: this.formCategoria.value.descripcion
          }
          this.crearCategoria(createCategoria);
        }
        else {
          const editCategoria: EditarCategoria = {
            idCategoriaTramite: this.categoria.idCategoriaTramite,
            nombre: this.formCategoria.value.nombre,
            descripcion: this.formCategoria.value.descripcion
          }
          this.editarCategoria(editCategoria);
        }
      }
    })
  }

  crearCategoria(crear: CrearCategoria) {
    this.crearCategoriaUseCase.execute(crear).subscribe({
      next : (res) => {
        this.notificationService.success(`${res.message}, categoría creada correctamente`);
        this.loading.set(false);
        this.ref.close({ success: true });
      },
      error : (err) => {
        this.loading.set(false);
        this.notificationService.error('No se pudo crear la categoría');
      }
    })
   }

  editarCategoria(editar: EditarCategoria) {
    this.editarCategoriaUseCase.execute(editar).subscribe({
      next : (res) => {
        this.notificationService.success(`${res.message}, categoría editada correctamente`);
        this.loading.set(false);
        this.ref.close({ success: true });
      },
      error : (err) => {
        this.loading.set(false);
        this.notificationService.error('No se pudo editar la categoría');
      }
    })
   }

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
