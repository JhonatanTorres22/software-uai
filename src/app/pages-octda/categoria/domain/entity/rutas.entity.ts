export class ListarRutas{
    constructor(
        public idRuta : number,
        public idEmisor : number,
        public idReceptor : number,
        public duracion : number,
        public orden : number,
        public fechaCreacion : string,
    ){}
}

export type CrearRuta = Omit<ListarRutas, 'idRuta' | 'fechaCreacion'>;
export type EditarRuta = Omit<ListarRutas, 'fechaCreacion'>;
export type EliminarRuta = Pick<ListarRutas, 'idRuta'>;