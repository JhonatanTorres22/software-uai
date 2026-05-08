export interface ListarRutasDTO {
    codigoRuta: number;
    emisor: number;
    receptor: number;
    duracion: number,
    orden : number,
    fechaCreacion: string;
}

export type CrearRutaDTO = Omit<ListarRutasDTO, 'codigoRuta' | 'fechaCreacion'>;
export type EditarRutaDTO = Omit<ListarRutasDTO, 'fechaCreacion'>;
export type EliminarRutaDTO = Pick<ListarRutasDTO, 'codigoRuta'>;