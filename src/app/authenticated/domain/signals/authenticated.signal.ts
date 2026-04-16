import { Injectable, computed, inject, signal } from "@angular/core";
import {
  AuthenticatedMenuAccess,
  AuthenticatedModule,
  AuthenticatedNavItem,
  AuthenticatedPermission,
  AuthenticatedRoleSelection,
  AuthenticatedStep,
  DecodedJwtPayload,
  normalizeAccessKey,
  resolveModuleBranding,
  resolveModuleLabel,
} from "../entities/rolesAsignados.entity";
import { AuthenticatedStorageService } from "../../infrastructure/services/authenticated-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedSignal {
  private readonly storage = inject(AuthenticatedStorageService);

  readonly userNameIngresado = signal<string>('');
  readonly passwordIngresado = signal<string>('');
  readonly role = signal<string>('');
  readonly rolSeleccionado = signal<AuthenticatedRoleSelection | null>(this.storage.getRoleSelection());
  readonly step = signal<AuthenticatedStep>(1);
  readonly loadingRoles = signal<boolean>(false);
  readonly loadingLogin = signal<boolean>(false);
  readonly loadingMenu = signal<boolean>(false);
  readonly listModulos = signal<AuthenticatedModule[]>([]);
  readonly abiertos = signal<number[]>([]);
  readonly authErrorMessage = signal<string | null>(null);
  readonly token = signal<string | null>(this.storage.getToken());
  readonly decodedToken = signal<DecodedJwtPayload | null>(this.storage.getDecodedPayload());
  readonly navItems = signal<AuthenticatedNavItem[]>(this.storage.getMenu());
  readonly permissions = signal<AuthenticatedPermission[]>(this.storage.getPermissions());
  readonly permissionDescriptions = signal<string[]>(this.storage.getPermissionDescriptions());

  readonly isAuthenticated = computed(() => Boolean(this.token()));
  readonly displayName = computed(() => {
    const decodedToken = this.decodedToken();
    const fullName = decodedToken?.apellidosyNombres;
    return (typeof fullName === 'string' && fullName.trim().length > 0)
      ? fullName
      : (decodedToken?.name || decodedToken?.userName || this.userNameIngresado() || 'Usuario');
  });
  readonly displayRole = computed(() => {
    const currentRole = this.rolSeleccionado()?.rol;

    if (currentRole) {
      return currentRole;
    }

    const decodedRole = this.decodedToken()?.role;
    return Array.isArray(decodedRole) ? (decodedRole[0] ?? 'Usuario') : (decodedRole ?? 'Usuario');
  });
  readonly selectedModuleRoute = computed(() => {
    const roleSelection = this.rolSeleccionado();

    if (roleSelection?.moduleRoute === 'octda' || roleSelection?.moduleRoute === 'silogi') {
      return roleSelection.moduleRoute;
    }

    return this.storage.getModuleRoute();
  });
  readonly displayModule = computed(() => this.rolSeleccionado()?.modulo || this.storage.getSelectedModule() || resolveModuleLabel(this.selectedModuleRoute()));
  readonly branding = computed(() => resolveModuleBranding(this.selectedModuleRoute()));

  selectRole(selection: AuthenticatedRoleSelection): void {
    this.rolSeleccionado.set(selection);
    this.role.set(selection.rol);
    this.storage.saveRoleSelection(selection);
  }

  setAuthenticatedToken(token: string, decodedToken: DecodedJwtPayload | null): void {
    this.token.set(token);
    this.decodedToken.set(decodedToken);
    this.passwordIngresado.set('');
    this.storage.saveToken(token, decodedToken);
  }

  setMenuAccess(access: AuthenticatedMenuAccess): void {
    this.navItems.set(access.navItems);
    this.permissions.set(access.permissions);
    this.permissionDescriptions.set(access.permissions.map((permission) => permission.description));
    this.loadingMenu.set(false);
    this.storage.saveMenu(access.navItems);
    this.storage.savePermissions(access.permissions);
  }

  clearAccessState(): void {
    this.token.set(null);
    this.decodedToken.set(null);
    this.navItems.set([]);
    this.permissions.set([]);
    this.permissionDescriptions.set([]);
    this.loadingLogin.set(false);
    this.loadingMenu.set(false);
    this.storage.clearAccess();
  }

  clearAllState(): void {
    this.clearAccessState();
    this.userNameIngresado.set('');
    this.resetRolesState();
    this.step.set(1);
    this.storage.clearAll();
  }

  resetRolesState(): void {
    this.passwordIngresado.set('');
    this.role.set('');
    this.rolSeleccionado.set(null);
    this.loadingRoles.set(false);
    this.loadingLogin.set(false);
    this.loadingMenu.set(false);
    this.listModulos.set([]);
    this.abiertos.set([]);
    this.authErrorMessage.set(null);
    this.storage.saveRoleSelection(null);
  }

  hasPermissionForRoute(routeOrKey: string): boolean {
    const requestedKey = normalizeAccessKey(routeOrKey);

    if (!requestedKey || requestedKey === 'dashboard') {
      return true;
    }

    const permissionKeys = this.permissions().flatMap((permission) => [
      normalizeAccessKey(permission.code),
      normalizeAccessKey(permission.description),
      normalizeAccessKey(permission.route),
    ]);

    const permissionDescriptionKeys = this.permissionDescriptions().map((description) =>
      normalizeAccessKey(description)
    );

    const menuKeys = this.flattenMenuItems(this.navItems()).flatMap((item) => [
      normalizeAccessKey(item.route),
      normalizeAccessKey(item.label),
    ]);

    return [...permissionKeys, ...permissionDescriptionKeys, ...menuKeys].some((value) =>
      Boolean(value) && (value === requestedKey || value.endsWith(`/${requestedKey}`) || requestedKey.endsWith(`/${value}`))
    );
  }

  private flattenMenuItems(items: AuthenticatedNavItem[]): AuthenticatedNavItem[] {
    return items.flatMap((item) => [
      item,
      ...(item.items ? this.flattenMenuItems(item.items) : []),
    ]);
  }
}