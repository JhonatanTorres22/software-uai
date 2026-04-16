import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Type } from '@angular/core';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { EliminarUsuario, ListarUsuario } from '../../domain/entities/usuario.entity';
import { UsuarioSignal } from '../../domain/signals/usuario.signal';
import { AddEditUsuario } from "../add-edit-usuario/add-edit-usuario";
import { UiIconButton } from "@/shared/components/ui-icon-button/ui-icon-button";
import { TagModule } from "primeng/tag";
import { TableModule } from "primeng/table";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";
import { ModalService } from '@/shared/services/modal.service';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { AsignarRoles } from '../asignar-roles/asignar-roles';
import { EliminarUsuarioUseCase } from '../../application/use-cases/usuarios/eliminarUsuario.use-case';
import { ObtenerUsuarioUseCase } from '../../application/use-cases/usuarios/obtenerUsuario.use-case';
@Component({
  selector: 'app-list-usuario',
  imports: [CommonModule, InputIconModule, IconFieldModule, TagModule, TableModule, FormsModule, CommonModule, InputTextModule, UiButtonComponent, UiCardNoItems, UiIconButton, UiLoading],
  templateUrl: './list-usuario.html',
  styleUrl: './list-usuario.scss',
})
export class ListUsuario implements OnInit {
  private readonly obtenerUsuarioUseCase = inject(ObtenerUsuarioUseCase);
  private readonly eliminarUsuarioUseCase = inject(EliminarUsuarioUseCase);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly notificationService = inject(NotificationService);
  protected readonly usuarioSignal = inject(UsuarioSignal);
  private modalService = inject(ModalService)
  loading = this.usuarioSignal.loading;
  listUsuario = this.usuarioSignal.listUsuario;
  selectUsuario = this.usuarioSignal.selectUsuario;
  selectUsuarioDefault = this.usuarioSignal.selecUsuarioDefault

  AddEditUsuarioComponent = AddEditUsuario;
  AsignarRolesComponent = AsignarRoles;
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.loading.set(true);

    this.obtenerUsuarioUseCase.execute().subscribe({
      next: (response) => {
        this.loading.set(false);

        if (response.isSuccess) {
          this.listUsuario.set(response.data ?? []);
          this.notificationService.success(response.message || 'Usuarios cargados correctamente.');
          return;
        }

        this.listUsuario.set([]);
        this.notificationService.error(response.message || 'No fue posible obtener los usuarios.');
      },
      error: () => {
        this.loading.set(false);
        this.listUsuario.set([]);
        this.notificationService.error('No fue posible cargar la lista de usuarios.');
      }
    });
  }

openAddEditUsuario<T>(
  usuario: ListarUsuario,
  component: Type<T>
): void {
  this.selectUsuario.set(usuario);

  const ref = this.modalService.open(component, {
    header:
      component === AddEditUsuario
        ? (usuario.id === 0 ? 'Agregar Usuario' : 'Editar Usuario')
        : component === AsignarRoles
        ? 'Asignar Permisos Al Usuario'
        : 'Modal',

    width: 'min(90vw, 720px)',
    height: component === AsignarRoles ? '92vh' : undefined,
    maximizable: true,
  });

  ref?.onClose.subscribe((result: { success?: boolean } | null) => {
    if (result?.success) {
      this.obtenerUsuarios();
    }
  });
}

  confirmarEliminar(usuario: ListarUsuario): void {
    let eliminar: EliminarUsuario = {
      id: usuario.id
    }
    this.confirmDialogService.open({
      type: 'question',
      title: 'Eliminar usuario',
      message: `¿Desea eliminar el usuario ${usuario.nombres} ${usuario.apePaterno} ${usuario.apMaterno}?`,
      onAccept: () => {
        this.loading.set(true);

        this.eliminarUsuarioUseCase.execute(eliminar).subscribe({
          next: (response) => {
            this.loading.set(false);

            if (response.isSuccess) {
              this.notificationService.success(`Usuario eliminado correctamente., ${response.message}`);
              this.obtenerUsuarios();
              return;
            }
          },
          error: () => {
            this.loading.set(false);
            this.notificationService.error('No fue posible eliminar el usuario.');
          }
        });
      }
    });
  }
}
