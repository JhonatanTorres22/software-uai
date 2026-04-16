import { Component, inject, OnInit, Type } from '@angular/core';
import { ObtenerCategoriaUseCase } from '../../application/use-cases/obtenerCategoria.use-cases';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { EliminarCategoriaUseCase } from '../../application/use-cases/eliminarCategoria.use-cases';
import { CategoriaSignal } from '../../domain/signals/categoria.signal';
import { CommonModule } from '@angular/common';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { InputTextModule } from 'primeng/inputtext';
import { ListarCategoria } from '../../domain/entities/categoria.entity';
import { AddEditUsuario } from '@/page-silogi/configuracion/usuario/ui/add-edit-usuario/add-edit-usuario';
import { AsignarRoles } from '@/page-silogi/configuracion/usuario/ui/asignar-roles/asignar-roles';
import { ModalService } from '@/shared/services/modal.service';
import { AddEditCategoria } from '../add-edit-categoria/add-edit-categoria';

@Component({
  selector: 'app-list-categoria',
  imports: [CommonModule, UiLoading, TableModule, TagModule, IconFieldModule, InputIconModule, UiButtonComponent, UiCardNoItems, UiIconButton, InputTextModule],
  templateUrl: './list-categoria.html',
  styleUrl: './list-categoria.scss',
})
export class ListCategoria implements OnInit {
  private readonly obtenerCategoriaUseCase = inject(ObtenerCategoriaUseCase);
  private eliminarCategoriaUseCase = inject(EliminarCategoriaUseCase);
  private confirmDialogService = inject(ConfirmDialogService);
  private notificationService = inject(NotificationService)
  private readonly categoriaSignal = inject(CategoriaSignal);
  private modalService = inject(ModalService)
  loading = this.categoriaSignal.loading;
  listCategoria = this.categoriaSignal.listCategoria
  selectCategoria = this.categoriaSignal.selectCategoria;
  selectCategoriaDefault = this.categoriaSignal.selectCategoriaDafaul;

  ngOnInit(): void {
    this.obtenerCategorias()
  }

  obtenerCategorias(): void {
    this.loading.set(true);

    this.obtenerCategoriaUseCase.execute().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.isSuccess) {
          this.listCategoria.set(response.data);
          this.notificationService.success(`Categorías cargadas correctamente, ${response.message}`);
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error('Ocurrió un error al obtener las categorías.');
      }
    });
  }

  openAddEditCategoria( categoria: ListarCategoria,): void {
    this.selectCategoria.set(categoria);

    const ref = this.modalService.open(AddEditCategoria, {
      header: categoria.idCategoria === 0 ? 'Agregar Categoría' : 'Editar Categoría',
      width: 'min(90vw, 720px)',
      maximizable: true,
    });

    ref?.onClose.subscribe((result: { success?: boolean } | null) => {
      if (result?.success) {
        this.obtenerCategorias();
      }
    });
  }

}
