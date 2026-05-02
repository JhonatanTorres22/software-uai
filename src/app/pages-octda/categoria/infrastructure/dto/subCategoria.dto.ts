export interface ListarSubCategoriaDTO {
    codigoSubCategoriaTramite: number;
    codigoCategoriaTramite: number;
    nombre: string;
    monto : string
    descripcion: string;
}

export type CrearSubCategoriaDTO = Omit<ListarSubCategoriaDTO, 'codigoSubCategoriaTramite'>;
export type EditarSubCategoriaDTO = ListarSubCategoriaDTO;
export type EliminarSubCategoriaDTO = Pick<ListarSubCategoriaDTO, 'codigoSubCategoriaTramite'>;