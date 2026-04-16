export class ListarMarca{
    constructor(
        public idMarca:number,
        public nombreMarca:string,
        public descripcionMarca:string
    ){}
}

export type CrearMarca = Omit<ListarMarca,'idMarca'>
export type EditarMarca = ListarMarca
export type EliminarMarca = Pick<ListarMarca,'idMarca'>