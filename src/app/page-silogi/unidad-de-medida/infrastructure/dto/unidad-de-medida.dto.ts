export interface ListarUnidadDeMedidaDTO {
    codigoUnidadMedida: number,
    nombre: string,
    descripcion: string
}

export type CrearUnidadDeMedidaDTO = Omit<ListarUnidadDeMedidaDTO, 'codigoUnidadMedida'>
export type EditarUnidadDeMedidaDTO = ListarUnidadDeMedidaDTO
export type EliminarUnidadDeMedidaDTO = Pick<ListarUnidadDeMedidaDTO, 'codigoUnidadMedida'>