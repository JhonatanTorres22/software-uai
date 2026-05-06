export class ListarEntidad{
    constructor(
        public idEntidad: number,
        public idTramite: number,
        public ruc: string,
        public razonSocial: string,
        public direccion: string,
        public fechaCreacion: string
    ){}
}

export type CrearEntidad = Omit<ListarEntidad, 'idEntidad' | 'fechaCreacion'>;
export type EditarEntidad = Omit<ListarEntidad, 'fechaCreacion'>;

export type EliminarEntidad = Pick<ListarEntidad, 'idEntidad'>;