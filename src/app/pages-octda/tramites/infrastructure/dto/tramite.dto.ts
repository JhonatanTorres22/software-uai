export interface ListarTramiteDTO {
    codigoTramite: number;
    codigoInternoTramite: string;
    codigoSubCategoriaTramite: number;
    nombreSubCategoriaTramite: string;
    tipoDocumento: string;
    numeroDocumento: string;
    tipoRemitente: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefono: string;
    correo: string;
    asunto: string;
    archivoAnexo: string;
    fechaCreacion: string;
    estado: string;
}

export interface CrearTramiteDTO {
    codigoSubCategoriaTramite: number;
    tipoDocumento: string;
    numeroDocumento: string;
    tipoRemitente: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefono: string;
    correo: string;
    asunto: string;
    archivoAnexo: string;
}

export type EditarTramiteDTO = CrearTramiteDTO & {
    codigoTramite: number;
}

export type EliminarTramiteDTO = Pick<ListarTramiteDTO, 'codigoTramite'>;
export type ActualizarEstadoTramiteDTO = Pick<ListarTramiteDTO, 'codigoTramite' | 'estado'>;

export interface ListarFormatoSolicitudDTO{
    codigoFormatoSolicitud: number;
    codigoTramite: number;
    destinatario: string;
    datosDelUsuario: string;
    carreraProfesional : string,
    semestre: string;
    turno: string;
    numeroContacto: string;
    numeroCarnet: string,
    numeroDocumento: string;
    email:string,
    domicilioDelUsuario: string;
    facebook: string;
    fundamento: string;
    fechaCreacion: string;
}
export type EditarFormatoSolicitudDTO = Omit<ListarFormatoSolicitudDTO, 'fechaCreacion'>;
export type CrearFormatoSolicitudDTO = Omit<ListarFormatoSolicitudDTO, 'codigoFormatoSolicitud' | 'fechaCreacion'>;
export type EliminarFormatoSolicitudDTO = Pick<ListarFormatoSolicitudDTO, 'codigoFormatoSolicitud'>;
// export type ListarteTramiteDTO = ListarTramiteDTO;