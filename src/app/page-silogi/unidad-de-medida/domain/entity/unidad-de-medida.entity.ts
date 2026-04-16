export class ListarUnidadDeMedida {
    constructor(
        public idUnidadDeMedida: number,
        public nombre: string,
        public descripcion: string
    ){}
}

export type CrearUnidadDeMedida = Omit<ListarUnidadDeMedida, 'idUnidadDeMedida'>
export type EditarUnidadDeMedida = ListarUnidadDeMedida
export type EliminarUnidadDeMedida = Pick<ListarUnidadDeMedida, 'idUnidadDeMedida'>