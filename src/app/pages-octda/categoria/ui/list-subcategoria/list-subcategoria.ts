import { Component, effect, inject, output } from '@angular/core';
import { CardModule } from "primeng/card";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { ModalService } from '@/shared/services/modal.service';
import { AddEditSubcategoria } from '../add-edit-subcategoria/add-edit-subcategoria';
import { SubCategoriaSignal } from '../../domain/signals/subCategoria.signal';
import { EliminarSubCategoriaUseCase } from '../../application/use-cases/subCategorias/eliminarSubCategoria.use-cases';
import { ObtenerSubCategoriaPorIdUseCase } from '../../application/use-cases/subCategorias/obtenerSubCategoriaPorId.use-case';
import { NotificationService } from '@/shared/services/notification.service';
import { ListarSubCategoria } from '../../domain/entity/subCategoria.entity';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
@Component({
  selector: 'app-list-subcategoria',
  imports: [CardModule, BadgeModule, ButtonModule, DataViewModule, CommonModule, UiButtonComponent, UiIconButton],
  templateUrl: './list-subcategoria.html',
  styleUrl: './list-subcategoria.scss',
})
export class ListSubcategoria {
  private readonly categoriaSignal = inject(CategoriaSignal);
  private readonly subCategoriaSignal = inject(SubCategoriaSignal);
  selectCategoria = this.categoriaSignal.selectCategoria;
  selectSubCategoria = this.subCategoriaSignal.selectSubCategoria;
  selectSubCategoriaDefault = this.subCategoriaSignal.selectSubCategoriaDefault;
  listSubCategoria = this.subCategoriaSignal.listSubCategoria;
  loading = this.subCategoriaSignal.loading;
  subcategoriaVer = output<ListarSubCategoria>();
  private readonly modalService = inject(ModalService);
  private readonly notificationService = inject(NotificationService);
  private readonly confirmDialogService = inject(ConfirmDialogService);

  subcategoriaActivaId: number | null = null;
  eliminandoSubCategoria = false;

  private readonly obtenerSubCategoriaPorIdUseCase = inject(ObtenerSubCategoriaPorIdUseCase);
  private readonly eliminarSubCategoriaUseCase = inject(EliminarSubCategoriaUseCase);

  constructor() {
    effect(() => {
      const categoriaId = this.selectCategoria().idCategoriaTramite;

      if (categoriaId <= 0) {
        this.subCategoriaSignal.listSubCategoria.set([]);
        this.subCategoriaSignal.selectSubCategoria.set(this.selectSubCategoriaDefault);
        this.subcategoriaActivaId = null;
        return;
      }

      this.obtenerSubCategoria(categoriaId);
    });
  }

  ver(sub: ListarSubCategoria): void {
    this.subcategoriaActivaId = sub.idSubCategoriaTramite;
    this.selectSubCategoria.set(sub);
    this.subcategoriaVer.emit(sub);
  }

  obtenerSubCategoria(idCategoria: number): void {
    this.loading.set(true);
    this.obtenerSubCategoriaPorIdUseCase.execute(idCategoria).subscribe({
      next: (response) => {
        this.subCategoriaSignal.listSubCategoria.set(response.data);
        this.subcategoriaActivaId = null;
        this.loading.set(false);
      },
      error: (err) => {
        console.log(err);
        
        this.loading.set(false);
        this.notificationService.error('Error al cargar subcategorías');
      }
    });
  }

  openAddEditSubcategoria(subcategoria: ListarSubCategoria): void {
    const categoriaId = this.selectCategoria().idCategoriaTramite;
    if (categoriaId <= 0) {
      this.notificationService.warn('Selecciona una categoría antes de gestionar subcategorías');
      return;
    }

    const ref = this.modalService.open(AddEditSubcategoria, {
      data: {
        subcategoria: subcategoria.idSubCategoriaTramite === 0 ? null : subcategoria,
        categoriaId,
      },
      header: subcategoria.idSubCategoriaTramite === 0 ? 'Agregar Subcategoría' : 'Editar Subcategoría',
      width: 'min(90vw, 760px)',
      maximizable: false,
    });

    ref.onClose.subscribe((result: { success?: boolean } | null) => {
      if (result?.success) {
        this.obtenerSubCategoria(categoriaId);
      }
    });
  }

  eliminarSubCategoria(subcategoria: ListarSubCategoria): void {
    this.confirmDialogService.open({
      type: 'warning',
      title: 'Eliminar subcategoría',
      message: `Se eliminará la subcategoría "${subcategoria.nombre}". Esta acción no se puede deshacer.`,
      acceptLabel: 'Sí, eliminar',
      rejectLabel: 'Cancelar',
      onAccept: () => {
        this.eliminandoSubCategoria = true;

        this.eliminarSubCategoriaUseCase.execute({
          idSubCategoriaTramite: subcategoria.idSubCategoriaTramite,
        }).subscribe({
          next: (response) => {
            this.eliminandoSubCategoria = false;

            if (this.selectSubCategoria().idSubCategoriaTramite === subcategoria.idSubCategoriaTramite) {
              this.selectSubCategoria.set(this.selectSubCategoriaDefault);
              this.subcategoriaActivaId = null;
            }

            this.notificationService.success(`${response.message}, subcategoría eliminada correctamente`);
            this.obtenerSubCategoria(this.selectCategoria().idCategoriaTramite);
          },
          error: () => {
            this.eliminandoSubCategoria = false;
            this.notificationService.error('No se pudo eliminar la subcategoría');
          }
        });
      }
    });
  }

}
