import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { NotificationService } from '@/shared/services/notification.service';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { CrearSubCategoriaUseCase } from '../../application/use-cases/subCategorias/crearSubCategoria.use-cases';
import { EditarSubCategoriaUseCase } from '../../application/use-cases/subCategorias/editarSubCategoria.use-cases';
import { CrearSubCategoria, EditarSubCategoria, ListarSubCategoria } from '../../domain/entity/subCategoria.entity';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { UiTextAreaComponent } from '@/shared/components/ui-text-area/ui-text-area.component';
import { ToggleSwitchModule } from "primeng/toggleswitch";
import { TagModule } from "primeng/tag";

@Component({
  selector: 'app-add-edit-subcategoria',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    UiInputComponent,
    UiTextAreaComponent,
    ToggleSwitchModule,
    TagModule
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

  readonly formSubCategoria = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3), Validators.maxLength(100)] }),
    descripcion: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(255)] }),
    montoTramite: new FormControl(0, { nonNullable: true, validators: [Validators.min(0)] }),
    requiereCosto: new FormControl(false, { nonNullable: true })
  });

  get modalPrimaryLabel(): string {
    return this.modoEdicion ? 'Actualizar Subcategoría' : 'Crear Subcategoría';
  }

  get modalPrimaryDisabled(): boolean {
    return this.formSubCategoria.invalid
  }

  get modoEdicion(): boolean {
    return !!this.subcategoria && this.subcategoria.idSubCategoriaTramite > 0;
  }

  ngOnInit(): void {
    const payload = this.config?.data?.payload ?? {};
    this.subcategoria = (payload.subcategoria as ListarSubCategoria | undefined) ?? null;
    this.categoriaId = Number(payload.categoriaId ?? this.categoriaSignal.selectCategoria().idCategoriaTramite ?? 0);

    if (this.subcategoria) {
      this.patchValue();
    }
  }

  guardar(): void {

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
    const montoTramite = this.formSubCategoria.controls.requiereCosto.value ? String(this.formSubCategoria.controls.montoTramite.value) : '0';
    if (this.modoEdicion && this.subcategoria) {
      const payload: EditarSubCategoria = {
        idSubCategoriaTramite: this.subcategoria.idSubCategoriaTramite,
        idCategoriaTramite: this.categoriaId,
        montoTramite,
        nombre,
        descripcion
      };
      console.log(payload);


      this.editarSubCategoriaUseCase.execute(payload).subscribe({
        next: (response) => {
          this.notificationService.success(`${response.message}, subcategoría actualizada correctamente`);
          this.ref.close({ success: true });
        },
        error: (err) => {
          console.log(err);

          this.notificationService.error('No se pudo actualizar la subcategoría');
        }
      });
      return;
    }

    const payload: CrearSubCategoria = {
      idCategoriaTramite: this.categoriaId,
      nombre,
      descripcion,
      montoTramite
    };

    console.log(payload, 'CREAR');


    this.crearSubCategoriaUseCase.execute(payload).subscribe({
      next: (response) => {
        this.notificationService.success(`${response.message}, subcategoría creada correctamente`);
        this.ref.close({ success: true });
      },
      error: () => {
        this.notificationService.error('No se pudo crear la subcategoría');
      }
    });
  }
  patchValue() {
    const monto = Number(this.subcategoria?.montoTramite ?? 0);

    this.formSubCategoria.patchValue({
      nombre: this.subcategoria?.nombre,
      descripcion: this.subcategoria?.descripcion,
      montoTramite: monto,
      requiereCosto: monto > 0
    });
  }
}
