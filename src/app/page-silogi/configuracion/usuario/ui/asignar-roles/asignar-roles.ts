import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { ConfirmDialogService } from '@/shared/services/confirm-dialog.service';
import { NotificationService } from '@/shared/services/notification.service';
import { UiLoading } from '@/shared/components/ui-loading/ui-loading';
import { AsignarPermisosUseCase } from '../../application/use-cases/permisos/asignarPermisos.use-case';
import { EliminarPermisosUseCase } from '../../application/use-cases/permisos/eliminarPermisos.use-case';
import { ObtenerPermisosUseCase } from '../../application/use-cases/permisos/obtenerPermisos.use-case';
import { ObtenerPermisosUsuarioUseCase } from '../../application/use-cases/permisos/obtenerPermisosUsuario.use-case';
import { AsignarPermisos, EliminarPermisos } from '../../domain/entities/permiso.entity';
import { PermisoSignal } from '../../domain/signals/permiso.signal';
import { UsuarioSignal } from '../../domain/signals/usuario.signal';

@Component({
  selector: 'app-asignar-roles',
  imports: [CommonModule, FormsModule, CheckboxModule, FieldsetModule, UiLoading],
  templateUrl: './asignar-roles.html',
  styleUrl: './asignar-roles.scss',
})
export class AsignarRoles implements OnInit {
  private readonly ref = inject(DynamicDialogRef);
  private readonly obtenerPermisosUseCase = inject(ObtenerPermisosUseCase);
  private readonly obtenerPermisosUsuarioUseCase = inject(ObtenerPermisosUsuarioUseCase);
  private readonly asignarPermisosUseCase = inject(AsignarPermisosUseCase);
  private readonly eliminarPermisosUseCase = inject(EliminarPermisosUseCase);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly notifications = inject(NotificationService);
  private readonly usuarioSignal = inject(UsuarioSignal);
  private readonly permisoSignal = inject(PermisoSignal);

  private pendingRequests = 0;

  readonly selectUsuario = this.usuarioSignal.selectUsuario;
  readonly loading = this.permisoSignal.loading;
  readonly error = this.permisoSignal.error;
  readonly modulos = this.permisoSignal.modulos;
  readonly permisosSeleccionados = this.permisoSignal.permisosSeleccionados;
  readonly hayPendientes = this.permisoSignal.hayPendientes;

  get modalPrimaryLabel(): string {
    return this.hayPendientes() ? 'Guardar cambios' : 'Cerrar';
  }

  get modalPrimaryDisabled(): boolean {
    return this.loading();
  }

  modalOnPrimary(): void {
    this.hayPendientes() ? this.guardar() : this.cerrar();
  }

  ngOnInit(): void {
    this.cargarPermisos();
  }

  cargarPermisos(): void {
    const idUsuario = this.selectUsuario().id;

    if (idUsuario <= 0) {
      this.permisoSignal.setError('No se encontro un usuario valido para asignar permisos.');
      return;
    }

    this.permisoSignal.clearState();
    this.pendingRequests = 2;
    this.loading.set(true);

    this.obtenerPermisosUseCase.execute().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.permisoSignal.setDisponibles(response.data ?? []);
        } else {
          this.permisoSignal.setDisponibles([]);
          this.permisoSignal.setError(response.message || 'No fue posible obtener los permisos disponibles.');
        }

        this.completeRequest();
      },
      error: (error: unknown) => {
        if (this.handleUnauthorized(error)) {
          return;
        }

        this.permisoSignal.setDisponibles([]);
        this.permisoSignal.setError('Error de conexion al obtener permisos disponibles.');
        this.completeRequest();
      }
    });

    this.obtenerPermisosUsuarioUseCase.execute(idUsuario).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.permisoSignal.setPermisosUsuario(response.data ?? []);
        } else {
          this.permisoSignal.setPermisosUsuario([]);
          this.permisoSignal.setError(response.message || 'No fue posible obtener los permisos del usuario.');
        }

        this.completeRequest();
      },
      error: (error: unknown) => {
        if (this.handleUnauthorized(error)) {
          return;
        }

        this.permisoSignal.setPermisosUsuario([]);
        this.permisoSignal.setError('Error de conexion al obtener permisos del usuario.');
        this.completeRequest();
      }
    });
  }

  isPermisoSeleccionado(idPermiso: number): boolean {
    return this.permisosSeleccionados().includes(idPermiso);
  }

  togglePermiso(idPermiso: number): void {
    if (this.loading()) {
      return;
    }

    this.permisoSignal.togglePermisoSeleccionado(idPermiso);
  }

  guardar(): void {
    if (this.loading() || !this.hayPendientes()) {
      return;
    }

    const agregados = this.permisoSignal.permisosAgregados();
    const eliminados = this.permisoSignal.permisosEliminados();

    const cantidadCambios = agregados.length + eliminados.length;

    this.confirmDialogService.open({
      type: 'question',
      title: 'Guardar cambios de permisos',
      message: `Se guardaran ${cantidadCambios} cambio${cantidadCambios !== 1 ? 's' : ''} en los permisos del usuario. Deseas continuar?`,
      onAccept: () => {
        this.aplicarCambios();
      }
    });
  }

  private aplicarCambios(): void {
    const idUsuario = this.selectUsuario().id;

    if (idUsuario <= 0) {
      this.notifications.error('No se encontro un usuario valido para actualizar permisos.');
      return;
    }

    const agregados = this.permisoSignal.permisosAgregados();
    const eliminados = this.permisoSignal.permisosEliminados();

    this.loading.set(true);

    let requestsPendientes = 0;
    let erroresCount = 0;
    let completados = 0;

    const validateAllComplete = (): void => {
      completados++;
      if (completados >= requestsPendientes) {
        this.loading.set(false);

        if (erroresCount === 0) {
          this.notifications.success('Permisos guardados exitosamente.');
          this.ref.close({ success: true });
          return;
        }

        if (erroresCount === requestsPendientes) {
          this.notifications.error('No fue posible guardar los cambios en los permisos.');
          return;
        }

        this.notifications.warn('Algunos cambios se guardaron, pero ocurrieron errores.');
      }
    };

    if (agregados.length > 0) {
      requestsPendientes++;
    }

    if (eliminados.length > 0) {
      requestsPendientes++;
    }

    if (requestsPendientes === 0) {
      this.loading.set(false);
      return;
    }

    if (agregados.length > 0) {
      const payloadAgregar: AsignarPermisos[] = agregados.map((idPermiso) => ({
        idUsuario,
        idPermiso,
      }));

      this.asignarPermisosUseCase.execute(payloadAgregar).subscribe({
        next: (response) => {
          if (!response.isSuccess) {
            erroresCount++;
            this.notifications.error(
              response.message || `Error al agregar ${agregados.length} permiso(s).`
            );
          }

          validateAllComplete();
        },
        error: (error: unknown) => {
          if (this.handleUnauthorized(error)) {
            return;
          }

          erroresCount++;
          this.notifications.error(`Error de conexion al agregar ${agregados.length} permiso(s).`);
          validateAllComplete();
        }
      });
    }

    if (eliminados.length > 0) {
      const payloadEliminar: EliminarPermisos[] = eliminados.map((idPermiso) => ({
        idUsuario,
        idPermiso,
      }));

      this.eliminarPermisosUseCase.execute(payloadEliminar).subscribe({
        next: (response) => {
          if (!response.isSuccess) {
            erroresCount++;
            this.notifications.error(
              response.message || `Error al eliminar ${eliminados.length} permiso(s).`
            );
          }

          validateAllComplete();
        },
        error: (error: unknown) => {
          if (this.handleUnauthorized(error)) {
            return;
          }

          erroresCount++;
          this.notifications.error(`Error de conexion al eliminar ${eliminados.length} permiso(s).`);
          validateAllComplete();
        }
      });
    }
  }

  cerrar(): void {
    if (this.loading()) {
      return;
    }

    this.permisoSignal.clearState();
    this.ref.close(null);
  }

  private completeRequest(): void {
    this.pendingRequests -= 1;

    if (this.pendingRequests <= 0) {
      this.loading.set(false);
    }
  }

  private handleUnauthorized(error: unknown): boolean {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.permisoSignal.clearState();
      this.ref.close({ unauthorized: true });
      return true;
    }

    return false;
  }
}
