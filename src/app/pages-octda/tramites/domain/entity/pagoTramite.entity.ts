export class ListarPagoTramite {
    constructor(
        public idPagoTramite: number,
        public idTramite: number,
        public constanciaPago: string,
        public fechaPago: string,
        public horaPago: string,
        public minutoPago: string,
        public fechaCreacion: string
    ){}
}
export type EditarPagoTramite = Omit<ListarPagoTramite, 'fechaCreacion'>;
export type CrearPagoTramite = Omit<ListarPagoTramite, 'idPagoTramite' | 'fechaCreacion'>;