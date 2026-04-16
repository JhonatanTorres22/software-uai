import { Component, inject, OnInit } from '@angular/core';
import { ObtenerMarcaUseCase } from '../../application/ports/use-cases/obtenerMarca.use-case';
import { MarcaSignal } from '../../domain/signals/marca.signal';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { CommonModule } from '@angular/common';
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { EliminarMarca, ListarMarca } from '../../domain/entity/marca.entity';
import { ModalService } from '@/shared/services/modal.service';
import { AddEditMarca } from '../add-edit-marca/add-edit-marca';
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";
import { InputTextModule } from 'primeng/inputtext';
import { EliminarMarcaUseCase } from '../../application/ports/use-cases/eliminarMarca.use-case';

@Component({
  selector: 'app-list-marca',
  imports: [CommonModule, TableModule, TagModule, IconFieldModule,InputTextModule, InputIconModule, UiButtonComponent, UiIconButton, UiCardNoItems],
  templateUrl: './list-marca.html',
  styleUrl: './list-marca.scss',
})
export class ListMarca implements OnInit {
  private readonly obtenerMarcaUseCase = inject(ObtenerMarcaUseCase)
  private readonly eliminarMarcaUseCase = inject(EliminarMarcaUseCase)
  private readonly marcaSignal = inject(MarcaSignal)
  listMarca = this.marcaSignal.listMarca
  loading = this.marcaSignal.loading
  selectMarca = this.marcaSignal.selectMarca
  selectMarcaDefault = this.marcaSignal.selectMarcaDefault
  private readonly confirmDialogService = inject(ConfirmDialogService)
  private readonly notifications = inject(NotificationService)
  private modalService = inject(ModalService)

  ngOnInit(): void {
    this.obtenerMarcas()
  }

  obtenerMarcas() {
    this.loading.set(true)
    this.obtenerMarcaUseCase.execute().subscribe({
      next : (response) => {
        this.loading.set(false)
        this.listMarca.set(response.data)
        this.notifications.success(`Categorias cargadas correctamente, ${response.message}`)
      },
      error : (err) => {
        this.loading.set(false)
        this.notifications.error('Ocurrió un error al obtener las categorias.')
      }
    })
  }

  openAddEditMarca( marca: ListarMarca,): void {
      this.selectMarca.set(marca);
  
      const ref = this.modalService.open(AddEditMarca, {
        header: marca.idMarca === 0 ? 'Agregar Marca' : 'Editar Marca',
        width: 'min(90vw, 720px)',
        maximizable: true,
      });
  
      ref?.onClose.subscribe((result: { success?: boolean } | null) => {
        if (result?.success) {
          this.obtenerMarcas();
        }
      });
    }

    confirmEliminarMarca(marca: ListarMarca) {
      this.confirmDialogService.open({
        type : 'question',
        title : 'Eliminar Marca',
        message : `¿Estás seguro que deseas eliminar la marca ${marca.nombreMarca}?`,
        onAccept : () => {
          this.loading.set(true)
          this.eliminarMarca(marca)
        }
      })
    }

    eliminarMarca (eliminar : EliminarMarca){
      this.eliminarMarcaUseCase.execute(eliminar).subscribe({
        next: (response) => {
          this.loading.set(false)
          this.notifications.success(`Marca eliminada correctamente, ${response.message}`)
          this.obtenerMarcas()
        },
        error: (err) => {
          this.loading.set(false)
          this.notifications.error('Ocurrió un error al eliminar la marca.')
        }
      })

    }

}
