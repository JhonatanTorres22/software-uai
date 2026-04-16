export interface ListarCategoriaDTO{
    codigoCategoria: number;
    nombre: string;
    descripcion: string;
}

export type CrearCategoriaDTO = Omit<ListarCategoriaDTO, 'codigoCategoria'>;
export type EditarCategoriaDTO = ListarCategoriaDTO;
export type EliminarCategoriaDTO = Pick<ListarCategoriaDTO, 'codigoCategoria'>;