import {
  AuthenticatedEntity,
  AuthenticatedMenuAccess,
  AuthenticatedModule,
  AuthenticatedModuleRoute,
  AuthenticatedNavItem,
  AuthenticatedPermission,
  AuthenticatedRole,
  normalizeAccessKey,
} from "@/authenticated/domain/entities/rolesAsignados.entity";
import {
  AuthenticatedDto,
  AuthenticatedMenuCollectionDto,
  AuthenticatedMenuDto,
  AuthenticatedMenuPayloadDto,
  AuthenticatedPermissionDto,
  AuthenticatedSubMenuDto,
} from "../dto/rolesAsignados.dto";

export class AuthenticatedMapper {
  static toDomain(dto: AuthenticatedDto | AuthenticatedDto[]): AuthenticatedEntity {
    const items = Array.isArray(dto) ? dto : [dto];

    return new AuthenticatedEntity(
      items.flatMap((item) =>
        (item.modulos ?? []).map((modulo) => new AuthenticatedModule(
          modulo.nombreModulo,
          (modulo.roles ?? []).map((rol) => new AuthenticatedRole(rol.nombreRol))
        ))
      )
    );
  }

  static toMenuAccess(
    dto: AuthenticatedMenuPayloadDto | null | undefined,
    moduleRoute: AuthenticatedModuleRoute
  ): AuthenticatedMenuAccess {
    const navItems = this.withStaticEntries(
      this.extractMenus(dto)
        .map((menu) => this.toNavItem(menu, moduleRoute))
        .filter((item): item is AuthenticatedNavItem => item !== null),
      moduleRoute
    );

    const permissions = this.uniquePermissions(this.permissionsFromItems(navItems));

    return { navItems, permissions };
  }

  private static toNavItem(
    menu: AuthenticatedMenuDto,
    moduleRoute: AuthenticatedModuleRoute
  ): AuthenticatedNavItem | null {
    const label = this.pickFirstString(
      [menu.tituloMenu, menu.nombreMenu, menu.descripcionMenu],
      ''
    );

    if (!label) {
      return null;
    }

    const icon = this.pickFirstString([menu.iconoMenu, menu.icono], 'pi pi-folder');
    const directRoute = this.toAppRoute(menu.urlMenu, moduleRoute, normalizeAccessKey(label) || 'dashboard');
    const permissions = this.toPermissions(menu.permisos, directRoute, 'menu', label);

    const rawSubMenus = Array.isArray(menu.subMenus)
      ? menu.subMenus
      : Array.isArray(menu.submenus)
        ? menu.submenus
        : [];

    const items = rawSubMenus
      .filter((subMenu) => this.shouldRenderSubMenu(subMenu.urlSubMenu))
      .map((subMenu) => this.toSubMenuItem(subMenu, moduleRoute, icon, label))
      .filter((item): item is AuthenticatedNavItem => item !== null);

    if (items.length > 0) {
      return {
        label,
        icon,
        route: directRoute,
        permissions,
        items,
      };
    }

    return {
      label,
      icon,
      route: directRoute,
      permissions,
    };
  }

  private static toSubMenuItem(
    subMenu: AuthenticatedSubMenuDto,
    moduleRoute: AuthenticatedModuleRoute,
    fallbackIcon: string,
    fallbackLabel: string
  ): AuthenticatedNavItem | null {
    const label = this.pickFirstString(
      [subMenu.tituloSubMenu, subMenu.nombreSubMenu],
      fallbackLabel
    );

    if (!label) {
      return null;
    }

    const route = this.toAppRoute(
      subMenu.urlSubMenu,
      moduleRoute,
      normalizeAccessKey(label) || 'dashboard'
    );

    return {
      label,
      icon: this.pickFirstString([subMenu.iconoSubMenu], fallbackIcon),
      route,
      permissions: this.toPermissions(subMenu.permisos, route, 'submenu', label),
    };
  }

  private static withStaticEntries(
    items: AuthenticatedNavItem[],
    moduleRoute: AuthenticatedModuleRoute
  ): AuthenticatedNavItem[] {
    const dashboardRoute = `/${moduleRoute}`;
    const normalizedItems = [...items];

    if (!normalizedItems.some((item) => normalizeAccessKey(item.route) === 'dashboard')) {
      normalizedItems.unshift({
        label: 'Dashboard',
        icon: 'pi pi-home',
        route: dashboardRoute,
        permissions: [{
          code: 'dashboard',
          description: 'Dashboard',
          route: dashboardRoute,
          source: 'menu',
        }],
      });
    }

    if (!normalizedItems.some((item) => item.route === '/logout')) {
      normalizedItems.push({
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        route: '/logout',
        permissions: [],
      });
    }

    return normalizedItems;
  }

  private static extractMenus(dto: AuthenticatedMenuPayloadDto | null | undefined): AuthenticatedMenuDto[] {
    if (!dto) {
      return [];
    }

    if (Array.isArray(dto)) {
      if (dto.some((entry) => this.hasMenus(entry))) {
        return dto.flatMap((entry) => this.hasMenus(entry) ? (entry.menus ?? []) : [entry]);
      }

      return dto.filter((entry): entry is AuthenticatedMenuDto => !this.hasMenus(entry));
    }

    return Array.isArray(dto.menus) ? dto.menus : [];
  }

  private static hasMenus(
    value: AuthenticatedMenuCollectionDto | AuthenticatedMenuDto
  ): value is AuthenticatedMenuCollectionDto {
    return typeof value === 'object' && value !== null && 'menus' in value;
  }

  private static shouldRenderSubMenu(urlSubMenu: string | undefined): boolean {
    return this.normalizeRoute(urlSubMenu) !== 'none';
  }

  private static toAppRoute(
    rawRoute: string | undefined,
    moduleRoute: AuthenticatedModuleRoute,
    fallbackSegment: string
  ): string {
    const routeSegment = this.normalizeRoute(rawRoute);
    const normalizedSegment = routeSegment && routeSegment !== 'none'
      ? routeSegment
      : fallbackSegment;

    if (!normalizedSegment || normalizedSegment === 'dashboard') {
      return `/${moduleRoute}`;
    }

    if (/^(octda|silogi|page-octda|page-silogi)(\/|$)/.test(normalizedSegment)) {
      return `/${normalizedSegment.replace(/^page-/, '').replace(/^\/+/, '')}`;
    }

    return `/${moduleRoute}/${normalizedSegment.replace(/^\/+/, '')}`;
  }

  private static normalizeRoute(value: string | undefined): string {
    return (value ?? '')
      .trim()
      .replace(/\\/g, '/')
      .replace(/[?#].*$/, '')
      .replace(/^\/+/, '')
      .replace(/\/+$/g, '')
      .toLowerCase();
  }

  private static toPermissions(
    permissions: AuthenticatedPermissionDto[] | null | undefined,
    route: string,
    source: 'menu' | 'submenu',
    fallbackLabel: string
  ): AuthenticatedPermission[] {
    const mappedPermissions = (permissions ?? []).flatMap((permission) => {
      const description = this.pickFirstString(
        [permission.descripcionPermiso, permission.descripcion, permission.nombrePermiso, permission.nombre],
        fallbackLabel
      );
      const code = this.pickFirstString(
        [permission.codigoPermiso, permission.codigo, permission.nombrePermiso, permission.descripcionPermiso, permission.nombre],
        description
      );
      const normalizedCode = normalizeAccessKey(code || description || route);

      if (!normalizedCode) {
        return [];
      }

      return [{
        code: normalizedCode,
        description,
        route,
        source,
      }];
    });

    if (mappedPermissions.length > 0) {
      return mappedPermissions;
    }

    return [{
      code: normalizeAccessKey(route),
      description: fallbackLabel,
      route,
      source,
    }];
  }

  private static permissionsFromItems(items: AuthenticatedNavItem[]): AuthenticatedPermission[] {
    return items.flatMap((item) => {
      const currentPermissions = item.route === '/logout'
        ? []
        : [
            ...item.permissions,
            {
              code: normalizeAccessKey(item.route),
              description: item.label,
              route: item.route,
              source: item.items?.length ? 'menu' as const : 'submenu' as const,
            },
          ];

      const childPermissions = item.items ? this.permissionsFromItems(item.items) : [];
      return [...currentPermissions, ...childPermissions];
    });
  }

  private static uniquePermissions(permissions: AuthenticatedPermission[]): AuthenticatedPermission[] {
    const permissionMap = new Map<string, AuthenticatedPermission>();

    for (const permission of permissions) {
      const permissionKey = `${permission.code}|${permission.route}`;
      permissionMap.set(permissionKey, permission);
    }

    return Array.from(permissionMap.values());
  }

  private static pickFirstString(values: Array<string | undefined>, fallback: string): string {
    const match = values.find((value) => typeof value === 'string' && value.trim().length > 0);
    return match?.trim() ?? fallback;
  }
}