export interface ListarMarcaDTO{
    codigoMarca:number,
    nombre:string,
    descripcion:string
}

export type CrearMarcaDTO = Omit<ListarMarcaDTO,'codigoMarca'>
export type EditarMarcaDTO = ListarMarcaDTO
export type EliminarMarcaDTO = Pick<ListarMarcaDTO,'codigoMarca'>