import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MarcaSignal } from '../../domain/signals/marca.signal';
import { CrearMarca, EditarMarca } from '../../domain/entity/marca.entity';
import { CrearMarcaUseCase } from '../../application/ports/use-cases/crearMarca.use-case';
import { EditarMarcaUseCase } from '../../application/ports/use-cases/editarMarca.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MarcaValidation } from '../../domain/validation/marca.validation';
import { UiInputComponent } from '@/shared/components/ui-input/ui-input.component';
import { UiModalFooter } from "@/shared/components/ui-modal-footer/ui-modal-footer";

@Component({
  selector: 'app-add-edit-marca',
  imports: [ReactiveFormsModule, UiInputComponent, UiModalFooter, FormsModule],
  templateUrl: './add-edit-marca.html',
  styleUrl: './add-edit-marca.scss',
})
export class AddEditMarca implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  formMarca: FormGroup
  private readonly marcaSignal = inject(MarcaSignal)
  selectMarca = this.marcaSignal.selectMarca
  loading = this.marcaSignal.loading
  private readonly crearMarcaUseCase = inject(CrearMarcaUseCase)
  private readonly editarMarcaUseCase = inject(EditarMarcaUseCase)
  private notificationService = inject(NotificationService)
  private confirmDialogService = inject(ConfirmDialogService)

  /* validaciones */
   private validation = inject(MarcaValidation)
  maxLengthNombre = this.validation.maxLengthNombre
  maxLengthDescripcion = this.validation.maxLengthDescripcion
  minLengthNombre = this.validation.minLengthNombre
  minLengthDescripcion = this.validation.minLengthDescripcion
  expLockNombre = this.validation.expRegLockInputNombre
  expLockDescripcion = this.validation.expRegLockDescripcion
  
  constructor() {
    this.formMarca = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(this.validation.expReg), Validators.maxLength(this.maxLengthNombre), Validators.minLength(this.minLengthNombre)]),
      descripcion: new FormControl('', [Validators.required, Validators.pattern(this.validation.expReg), Validators.maxLength(this.maxLengthDescripcion), Validators.minLength(this.minLengthDescripcion)])
    })
  }

  ngOnInit(): void {
    this.selectMarca().idMarca !== 0 ? this.patchValue() : null;
  }

  guardar() {
    if (this.formMarca.invalid) { return }
    let accion: 'Crear' | 'Editar' = this.selectMarca().idMarca !== 0 ? 'Editar' : 'Crear'

    this.confirmDialogService.open({
      type: 'question',
      title: `${accion} Marca`,
      message: `¿Estás seguro que deseas ${accion.toLowerCase()} la marca?`,
      onAccept: () => {
        this.loading.set(true);
        if (accion === 'Crear') {
          const createMarca: CrearMarca = {
            nombreMarca: this.formMarca.value.nombre,
            descripcionMarca: this.formMarca.value.descripcion
          }
          this.crearMarca(createMarca);
        }
        else {
          const editMarca: EditarMarca = {
            idMarca: this.selectMarca().idMarca,
            nombreMarca: this.formMarca.value.nombre,
            descripcionMarca: this.formMarca.value.descripcion
          }
          this.editarMarca(editMarca);
        }
      }
    })
  }

  crearMarca(crear: CrearMarca) {
    this.crearMarcaUseCase.execute(crear).subscribe({
      next: (response) => {
        this.loading.set(false)
        this.notificationService.success(`Marca creada correctamente, ${response.message}`)
        this.ref.close({ success: true });
      },
      error: (error) => {
        this.loading.set(false)
        this.notificationService.error(`Error al crear la marca`)
      }
    })
  }

  editarMarca(editar: EditarMarca) {
    this.editarMarcaUseCase.execute(editar).subscribe({
      next: (response) => {
        this.loading.set(false)
        this.notificationService.success(`Marca editada correctamente, ${response.message}`)
        this.ref.close({ success: true });
      },
      error: (error) => {
        this.loading.set(false)
        this.notificationService.error(`Error al editar la marca`)
      }
    })
  }
  patchValue() {
    this.formMarca.patchValue({
      nombre: this.selectMarca().nombreMarca,
      descripcion: this.selectMarca().descripcionMarca
    })
  }

    cancelar(): void {
    this.ref.close(null);
  }
}
