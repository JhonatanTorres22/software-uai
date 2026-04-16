export class ListarUsuario {
    constructor(
        public id: number,
        public nombres: string,
        public apePaterno: string,
        public apMaterno: string,
        public correo : string,
        public nDocumento : string,
        public tipoDocumento? : string,
    ){}
}

export type CrearUsuario = Omit<ListarUsuario, 'id'>;
export type ActualizarUsuario = ListarUsuario
export type EliminarUsuario = Pick<ListarUsuario, 'id'>;
