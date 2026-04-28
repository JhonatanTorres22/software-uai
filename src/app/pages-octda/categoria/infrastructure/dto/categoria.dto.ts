export interface ListarCategoriaDTO{
    codigoCategoriaTramite: number;
    nombre: string;
    descripcion: string;
}

export type CrearCategoriaDTO = Omit<ListarCategoriaDTO, 'codigoCategoriaTramite'>;
export type EditarCategoriaDTO = ListarCategoriaDTO;
export type EliminarCategoriaDTO = Pick<ListarCategoriaDTO, 'codigoCategoriaTramite'>;