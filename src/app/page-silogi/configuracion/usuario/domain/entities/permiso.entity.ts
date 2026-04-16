export class ModuloPermiso {
    constructor(
        public nombreModulo: string,
        public roles: RolPermiso[]
    ) { }
}

export class RolPermiso {
    constructor(
        public nombreRol: string,
        public descripcionRol: string,
        public permisos: Permiso[]
    ) { }
}

export class Permiso {
    constructor(
        public idPermiso: number,
        public descripcionPermiso: string
    ) { }
}

export interface AsignarPermisos {
    idUsuario: number;
    idPermiso: number;
}

export type EliminarPermisos = AsignarPermisos;