export interface ListarUsuarioDTO {
    codigo: number;
    nombres: string,
    apellidoPaterno : string,
    apellidoMaterno : string,
    correo : string,
    numeroDocumento : string,
    tipoDocumento? : string,
}

export type CrearUsuarioDTO = Omit<ListarUsuarioDTO, 'codigo'>;
export type ActualizarUsuarioDTO = ListarUsuarioDTO;
export type EliminarUsuarioDTO = Pick<ListarUsuarioDTO, 'codigo'>;