export type AuthenticatedStep = 1 | 2 | 3;
export type AuthenticatedModuleRoute = 'octda' | 'silogi';
import { ApiResponse } from '@/shared/models/api-response.model';

export interface AuthenticatedModuleBranding {
  moduleLabel: 'GIPEO' | 'LOGÍSTICO';
  sidebarLogo: string;
  navbarLogo: string;
  productName: string;
}

export type AuthenticatedApiResponse<T> = ApiResponse<T>;

export interface AuthenticatedRoleSelection {
  modulo: string;
  rol: string;
  moduleRoute: AuthenticatedModuleRoute;
}

export interface AuthenticatedCredentials {
  userName: string;
  password: string;
  role: string;
}

export interface DecodedJwtPayload {
  codigoUsuario?: string;
  apellidosyNombres?: string;
  correo?: string;
  userName?: string;
  name?: string;
  role?: string | string[] | null;
  exp?: number;
  [key: string]: unknown;
}

export interface AuthenticatedLoginResult {
  token: string;
}

export interface AuthenticatedPermission {
  code: string;
  description: string;
  route: string;
  source: 'menu' | 'submenu';
}

export interface AuthenticatedNavItem {
  label: string;
  icon: string;
  route: string;
  permissions: AuthenticatedPermission[];
  items?: AuthenticatedNavItem[];
}

export interface AuthenticatedMenuAccess {
  navItems: AuthenticatedNavItem[];
  permissions: AuthenticatedPermission[];
}

export class AuthenticatedEntity {
  constructor(
    public modulos: AuthenticatedModule[]
  ) { }
}

export class AuthenticatedModule {
  constructor(
    public nombre: string,
    public roles: AuthenticatedRole[]
  ) { }
}

export class AuthenticatedRole {
  constructor(
    public nombre: string
  ) { }
}

export function resolveModuleRoute(moduleName: string): AuthenticatedModuleRoute {
  const normalizedModule = moduleName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();

  if (
    normalizedModule.includes('logist') ||
    normalizedModule.includes('silog') ||
    normalizedModule.includes('almacen')
  ) {
    return 'silogi';
  }

  return 'octda';
}

export function resolveModuleLabel(moduleRoute: AuthenticatedModuleRoute): 'GIPEO' | 'LOGÍSTICO' {
  return moduleRoute === 'silogi' ? 'LOGÍSTICO' : 'GIPEO';
}

export function resolveModuleBranding(moduleRoute: AuthenticatedModuleRoute): AuthenticatedModuleBranding {
  if (moduleRoute === 'silogi') {
    return {
      moduleLabel: 'LOGÍSTICO',
      sidebarLogo: 'assets/silogi/images/logo_logistica.png',
      navbarLogo: 'assets/silogi/images/logo_logistica.png',
      productName: 'SILOGI',
    };
  }

  return {
    moduleLabel: 'GIPEO',
    sidebarLogo: 'assets/octda/images/logo-octda.png',
    navbarLogo: 'assets/octda/images/logo-octda.png',
    productName: 'OCTDA',
  };
}

export function normalizeAccessKey(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\\/g, '/')
    .replace(/[?#].*$/, '')
    .replace(/^\/+/, '')
    .replace(/^(octda|silogi|page-octda|page-silogi)\/?/i, '')
    .replace(/^api\/?/i, '')
    .replace(/\/+/g, '/')
    .replace(/\s+/g, '-')
    .trim()
    .toLowerCase();
}
