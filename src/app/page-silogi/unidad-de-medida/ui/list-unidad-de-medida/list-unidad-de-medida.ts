import { EliminarUnidadDeMedidaUseCase } from '@/page-silogi/unidad-de-medida/application/use-cases/eliminarUnidadDeMedida.use-case';
import { ObtenerUnidadDeMedidaUseCase } from '@/page-silogi/unidad-de-medida/application/use-cases/obtenerUnidadDeMedida.use-case';
import { UnidadDeMedidaSignal } from '@/page-silogi/unidad-de-medida/domain/signals/unidad-de-medida.signal';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { TableModule } from "primeng/table";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { InputIconModule } from "primeng/inputicon";
import { IconFieldModule } from "primeng/iconfield";
import { InputTextModule } from 'primeng/inputtext';
import { EliminarUnidadDeMedida, ListarUnidadDeMedida } from '@/page-silogi/unidad-de-medida/domain/entity/unidad-de-medida.entity';
import { AddEditUnidadDeMedida } from '../add-edit-unidad-de-medida/add-edit-unidad-de-medida';
import { ModalService } from '@/shared/services/modal.service';
import { TagModule } from "primeng/tag";
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";

@Component({
  selector: 'app-list-unidad-de-medida',
  imports: [CommonModule, UiLoading, TableModule, UiButtonComponent, InputTextModule, InputIconModule, IconFieldModule, TagModule, UiCardNoItems, UiIconButton],
  templateUrl: './list-unidad-de-medida.html',
  styleUrl: './list-unidad-de-medida.scss',
})
export class ListUnidadDeMedida implements OnInit {
  private readonly unidadDeMedidaSignal = inject(UnidadDeMedidaSignal);
  loading = this.unidadDeMedidaSignal.loading;
  listUnidadDeMedida = this.unidadDeMedidaSignal.listUnidadDeMedida;
  selectUnidadDeMedida = this.unidadDeMedidaSignal.selectUnidadDeMedida;
  selectUnidadDeMedidaDefault = this.unidadDeMedidaSignal.selectUnidadDeMedidaDefault;
  private obtenerUseCase = inject(ObtenerUnidadDeMedidaUseCase);
  private notificationService = inject(NotificationService);
  private eliminarUseCase = inject(EliminarUnidadDeMedidaUseCase);
  private confirmDialogService = inject(ConfirmDialogService);
  private modalService = inject(ModalService)

  ngOnInit(): void {
    this.obtenerUnidadDeMedida()
  }

  obtenerUnidadDeMedida(): void {
    this.loading.set(true);
    this.obtenerUseCase.execute().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.isSuccess) {
          this.listUnidadDeMedida.set(response.data);
          this.notificationService.success(`Unidades de medida cargados correctamente., ${response.message}`);
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error('No fue posible obtener las unidades de medida.');
      }
    });
  }

  openAddEditUnidadDeMedida(unidadDeMedida: ListarUnidadDeMedida,): void {
    this.selectUnidadDeMedida.set(unidadDeMedida);

    const ref = this.modalService.open(AddEditUnidadDeMedida, {
      header: unidadDeMedida.idUnidadDeMedida === 0 ? 'Agregar Unidad de Medida' : 'Editar Unidad de Medida',
      width: 'min(90vw, 720px)',
      maximizable: true,
    });

    ref?.onClose.subscribe((result: { success?: boolean } | null) => {
      if (result?.success) {
        this.obtenerUnidadDeMedida();
      }
    });
  }

  confirmEliminar(unidadDeMedida: ListarUnidadDeMedida): void {
    this.confirmDialogService.open({
      type: 'question',
      title : '¿Eliminar unidad de medida?',
      message: `¿Está seguro de que desea eliminar la unidad de medida "${unidadDeMedida.nombre}"?`,
      onAccept: () => {
        this.loading.set(true);
        let eliminar: EliminarUnidadDeMedida = {
          idUnidadDeMedida: unidadDeMedida.idUnidadDeMedida
        }
        this.eliminarUnidadDeMedida(eliminar);
      }
    });
  }

  eliminarUnidadDeMedida(eliminar: EliminarUnidadDeMedida): void {
    this.eliminarUseCase.execute(eliminar).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.isSuccess) {
          this.notificationService.success(`Unidad de medida eliminada correctamente., ${response.message}`);
          this.obtenerUnidadDeMedida();
          return;
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.notificationService.error('No fue posible eliminar la unidad de medida.');
      }
    });
  }
}
