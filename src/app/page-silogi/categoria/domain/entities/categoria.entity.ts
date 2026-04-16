export class ListarCategoria{
    constructor(
        public idCategoria: number,
        public nombre: string,
        public descripcion: string,
    ){}
}

export type CrearCategoria = Omit<ListarCategoria, 'idCategoria'>;

export type EditarCategoria = ListarCategoria;
export type EliminarCategoria = Pick<ListarCategoria, 'idCategoria'>;