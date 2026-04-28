export class ListarSubCategoria {
    constructor(
        public idSubCategoriaTramite: number,
        public idCategoriaTramite: number,
        public nombre: string,
        public descripcion: string
    ){}
}

export type CrearSubCategoria = Omit<ListarSubCategoria, 'idSubCategoriaTramite'>;

export type EditarSubCategoria = ListarSubCategoria;
export type EliminarSubCategoria = Pick<ListarSubCategoria, 'idSubCategoriaTramite'>;