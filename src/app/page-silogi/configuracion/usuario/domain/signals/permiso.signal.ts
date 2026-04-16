import { Injectable, computed, signal } from '@angular/core';
import { ModuloPermiso, Permiso, RolPermiso } from '../entities/permiso.entity';

@Injectable({
  providedIn: 'root'
})
export class PermisoSignal {
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  readonly modulos = signal<ModuloPermiso[]>([]);
  readonly roles = signal<RolPermiso[]>([]);
  readonly permisos = signal<Permiso[]>([]);

  readonly modulosUsuario = signal<ModuloPermiso[]>([]);
  readonly permisosUsuario = signal<Permiso[]>([]);

  // Estado original (cargado del usuario)
  readonly permisosOriginales = signal<number[]>([]);

  // Estado actual (modificado en la sesión)
  readonly permisosSeleccionados = signal<number[]>([]);

  // Cambios detectados
  readonly permisosAgregados = computed(() => {
    const original = this.permisosOriginales();
    const actual = this.permisosSeleccionados();
    return actual.filter((id) => !original.includes(id));
  });

  readonly permisosEliminados = computed(() => {
    const original = this.permisosOriginales();
    const actual = this.permisosSeleccionados();
    return original.filter((id) => !actual.includes(id));
  });

  readonly hayPendientes = computed(() => {
    return this.permisosAgregados().length > 0 || this.permisosEliminados().length > 0;
  });

  setDisponibles(modulos: ModuloPermiso[]): void {
    this.modulos.set(modulos);

    const roles = modulos.flatMap((modulo) => modulo.roles);
    this.roles.set(roles);

    const permisos = roles.flatMap((rol) => rol.permisos);
    this.permisos.set(permisos);
  }

  setPermisosUsuario(modulos: ModuloPermiso[]): void {
    this.modulosUsuario.set(modulos);

    const permisosUsuario = modulos
      .flatMap((modulo) => modulo.roles)
      .flatMap((rol) => rol.permisos);

    const ids = this.uniquePermisoIds(permisosUsuario);
    this.permisosUsuario.set(permisosUsuario);
    this.permisosOriginales.set(ids);
    this.permisosSeleccionados.set([...ids]);
  }

  setError(message: string | null): void {
    this.error.set(message);
  }

  clearState(): void {
    this.loading.set(false);
    this.error.set(null);
    this.modulos.set([]);
    this.roles.set([]);
    this.permisos.set([]);
    this.modulosUsuario.set([]);
    this.permisosUsuario.set([]);
    this.permisosOriginales.set([]);
    this.permisosSeleccionados.set([]);
  }

  togglePermisoSeleccionado(idPermiso: number): void {
    const actual = this.permisosSeleccionados();

    if (actual.includes(idPermiso)) {
      this.permisosSeleccionados.set(actual.filter((current) => current !== idPermiso));
      return;
    }

    this.permisosSeleccionados.set([...actual, idPermiso]);
  }

  private uniquePermisoIds(permisos: Permiso[]): number[] {
    return Array.from(new Set(permisos.map((permiso) => permiso.idPermiso)));
  }
}
