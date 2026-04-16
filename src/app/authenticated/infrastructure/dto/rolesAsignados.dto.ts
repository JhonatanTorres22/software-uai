export interface AuthenticatedRoleDto {
  nombreRol: string;
}

export interface AuthenticatedModuleDto {
  nombreModulo: string;
  roles: AuthenticatedRoleDto[];
}

export interface AuthenticatedDto {
  modulos?: AuthenticatedModuleDto[];
}

export interface AuthenticatedLoginRequestDto {
  nombreUsuario: string;
  contrasenia: string;
  rol: string;
}

export interface AuthenticatedLoginResponseDto {
  token: string;
}

export interface AuthenticatedPermissionDto {
  codigoPermiso?: string;
  codigo?: string;
  nombrePermiso?: string;
  nombre?: string;
  descripcion?: string;
  descripcionPermiso?: string;
}

export interface AuthenticatedSubMenuDto {
  tituloSubMenu?: string;
  nombreSubMenu?: string;
  urlSubMenu?: string;
  iconoSubMenu?: string;
  permisos?: AuthenticatedPermissionDto[] | null;
}

export interface AuthenticatedMenuDto {
  tituloMenu?: string;
  nombreMenu?: string;
  descripcionMenu?: string;
  urlMenu?: string;
  iconoMenu?: string;
  icono?: string;
  permisos?: AuthenticatedPermissionDto[] | null;
  subMenus?: AuthenticatedSubMenuDto[] | null;
  submenus?: AuthenticatedSubMenuDto[] | null;
}

export interface AuthenticatedMenuCollectionDto {
  menus?: AuthenticatedMenuDto[] | null;
}

export type AuthenticatedMenuPayloadDto =
  | AuthenticatedMenuCollectionDto
  | AuthenticatedMenuCollectionDto[]
  | AuthenticatedMenuDto[];