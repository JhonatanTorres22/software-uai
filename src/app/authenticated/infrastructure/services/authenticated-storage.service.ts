import { Injectable } from '@angular/core';
import {
  AuthenticatedModuleRoute,
  AuthenticatedNavItem,
  AuthenticatedPermission,
  AuthenticatedRoleSelection,
  DecodedJwtPayload,
  resolveModuleRoute,
} from '@/authenticated/domain/entities/rolesAsignados.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedStorageService {
  private readonly tokenKey = 'authenticated.token';
  private readonly decodedTokenKey = 'authenticated.decoded-token';
  private readonly permissionsKey = 'authenticated.permissions';
  private readonly permissionDescriptionsKey = 'authenticated.permission-descriptions';
  private readonly menuKey = 'authenticated.menu';
  private readonly roleKey = 'authenticated.role-selection';
  private readonly moduleKey = 'authenticated.selected-module';
  private readonly moduleRouteKey = 'authenticated.selected-module-route';

  saveToken(token: string, decodedToken: DecodedJwtPayload | null): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(this.tokenKey, token);

    if (decodedToken) {
      this.writeJson(this.decodedTokenKey, decodedToken);
      return;
    }

    window.localStorage.removeItem(this.decodedTokenKey);
  }

  saveRoleSelection(selection: AuthenticatedRoleSelection | null): void {
    if (typeof window === 'undefined') {
      return;
    }

    if (!selection) {
      window.localStorage.removeItem(this.roleKey);
      window.localStorage.removeItem(this.moduleKey);
      window.localStorage.removeItem(this.moduleRouteKey);
      return;
    }

    const normalizedRoute = this.normalizeModuleRoute(selection.moduleRoute) ?? resolveModuleRoute(selection.modulo);
    const normalizedSelection: AuthenticatedRoleSelection = {
      ...selection,
      moduleRoute: normalizedRoute,
    };

    this.writeJson(this.roleKey, normalizedSelection);
    window.localStorage.setItem(this.moduleKey, normalizedSelection.modulo);
    window.localStorage.setItem(this.moduleRouteKey, normalizedSelection.moduleRoute);
  }

  saveMenu(navItems: AuthenticatedNavItem[]): void {
    this.writeJson(this.menuKey, navItems);
  }

  savePermissions(permissions: AuthenticatedPermission[]): void {
    this.writeJson(this.permissionsKey, permissions);
    this.writeJson(
      this.permissionDescriptionsKey,
      permissions
        .map((permission) => permission.description)
        .filter((description) => description.trim().length > 0)
    );
  }

  clearAccess(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.removeItem(this.tokenKey);
    window.localStorage.removeItem(this.decodedTokenKey);
    window.localStorage.removeItem(this.permissionsKey);
    window.localStorage.removeItem(this.permissionDescriptionsKey);
    window.localStorage.removeItem(this.menuKey);
  }

  clearAll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.clear();
  }

  getToken(): string | null {
    return this.readString(this.tokenKey);
  }

  getDecodedPayload(): DecodedJwtPayload | null {
    return this.readJson<DecodedJwtPayload>(this.decodedTokenKey);
  }

  getRoleSelection(): AuthenticatedRoleSelection | null {
    const storedSelection = this.readJson<Partial<AuthenticatedRoleSelection> & { moduleRoute?: string }>(this.roleKey);

    if (!storedSelection?.modulo || !storedSelection?.rol) {
      return null;
    }

    return {
      modulo: storedSelection.modulo,
      rol: storedSelection.rol,
      moduleRoute: this.normalizeModuleRoute(storedSelection.moduleRoute) ?? resolveModuleRoute(storedSelection.modulo),
    };
  }

  getMenu(): AuthenticatedNavItem[] {
    const storedMenu = this.readJson<Array<AuthenticatedNavItem | { items?: AuthenticatedNavItem[] }>>(this.menuKey) ?? [];

    if (storedMenu.length > 0 && !('label' in storedMenu[0]) && 'items' in storedMenu[0]) {
      return storedMenu.flatMap((entry) => ('items' in entry && Array.isArray(entry.items)) ? entry.items : []);
    }

    return storedMenu.filter((entry): entry is AuthenticatedNavItem => 'label' in entry);
  }

  getPermissions(): AuthenticatedPermission[] {
    return this.readJson<AuthenticatedPermission[]>(this.permissionsKey) ?? [];
  }

  getPermissionDescriptions(): string[] {
    return this.readJson<string[]>(this.permissionDescriptionsKey) ?? [];
  }

  getSelectedModule(): string | null {
    return this.readString(this.moduleKey);
  }

  getModuleRoute(): AuthenticatedModuleRoute {
    const storedSelection = this.getRoleSelection();
    if (storedSelection?.moduleRoute) {
      return storedSelection.moduleRoute;
    }

    const storedModuleRoute = this.normalizeModuleRoute(this.readString(this.moduleRouteKey));
    if (storedModuleRoute) {
      return storedModuleRoute;
    }

    const selectedModule = this.getSelectedModule();
    return selectedModule ? resolveModuleRoute(selectedModule) : 'octda';
  }

  decodeToken(token: string): DecodedJwtPayload | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const payloadSegment = token.split('.')[1];
    if (!payloadSegment) {
      return null;
    }

    const normalizedPayload = payloadSegment.replace(/-/g, '+').replace(/_/g, '/');
    const paddedPayload = normalizedPayload.padEnd(Math.ceil(normalizedPayload.length / 4) * 4, '=');
    const payloadText = decodeURIComponent(
      Array.from(window.atob(paddedPayload))
        .map((character) => `%${character.charCodeAt(0).toString(16).padStart(2, '0')}`)
        .join('')
    );
    const rawPayload = JSON.parse(payloadText) as Record<string, unknown>;
    const expValue = rawPayload['exp'];
    const normalizedExp = typeof expValue === 'number'
      ? expValue
      : typeof expValue === 'string'
        ? Number(expValue)
        : undefined;

    return {
      ...rawPayload,
      codigoUsuario: this.extractFirstString(rawPayload, ['codigoUsuario', 'codigo_usuario', 'idUsuario', 'sub'], ''),
      apellidosNombres: this.extractFirstString(rawPayload, ['apellidosNombres', 'nombreCompleto', 'fullName', 'nombre'], ''),
      correo: this.extractFirstString(rawPayload, ['correo', 'email', 'mail'], ''),
      name: this.extractFirstString(rawPayload, ['apellidosNombres', 'name', 'unique_name', 'given_name', 'fullName', 'nombre', 'sub']),
      userName: this.extractFirstString(rawPayload, ['userName', 'preferred_username', 'unique_name', 'sub', 'dni']),
      role: this.extractRole(rawPayload),
      exp: Number.isFinite(normalizedExp) ? normalizedExp : undefined,
    };
  }

  private normalizeModuleRoute(route: string | AuthenticatedModuleRoute | null | undefined): AuthenticatedModuleRoute | null {
    if (route === 'octda' || route === 'page-octda') {
      return 'octda';
    }

    if (route === 'silogi' || route === 'page-silogi') {
      return 'silogi';
    }

    return null;
  }

  private extractFirstString(
    payload: Record<string, unknown>,
    keys: readonly string[],
    fallback = 'Usuario'
  ): string {
    for (const key of keys) {
      const value = payload[key];
      if (typeof value === 'string' && value.trim().length > 0) {
        return value.trim();
      }
    }

    return fallback;
  }

  private extractRole(payload: Record<string, unknown>): string | string[] | null {
    const directRole = payload['role'];
    if (typeof directRole === 'string' && directRole.trim().length > 0) {
      return directRole.trim();
    }

    if (Array.isArray(directRole)) {
      return directRole.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
    }

    const aspNetRole = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (typeof aspNetRole === 'string' && aspNetRole.trim().length > 0) {
      return aspNetRole.trim();
    }

    if (Array.isArray(aspNetRole)) {
      return aspNetRole.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
    }

    const roles = payload['roles'];
    if (typeof roles === 'string' && roles.trim().length > 0) {
      return roles.trim();
    }

    if (Array.isArray(roles)) {
      return roles.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
    }

    return null;
  }

  private readJson<T>(key: string): T | null {
    const rawValue = this.readString(key);
    return rawValue ? JSON.parse(rawValue) as T : null;
  }

  private readString(key: string): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return window.localStorage.getItem(key);
  }

  private writeJson(key: string, value: unknown): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(value));
  }
}