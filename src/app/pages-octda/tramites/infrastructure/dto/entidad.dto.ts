export interface ListarEntidadDTO{
    codigoEntidad: number;
    codigoTramite: number;
    ruc: string;
    razonSocial: string;
    direccionFiscal: string;
    fechaCreacion: string;
}

export type CrearEntidadDTO = Omit<ListarEntidadDTO, 'codigoEntidad' | 'fechaCreacion'>;
export type EditarEntidadDTO = Omit<ListarEntidadDTO, 'fechaCreacion'>;
export type EliminarEntidadDTO = Pick<ListarEntidadDTO, 'codigoEntidad'>;