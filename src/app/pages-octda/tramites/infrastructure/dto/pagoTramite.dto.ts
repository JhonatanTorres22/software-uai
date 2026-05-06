export interface ListarPagoTramiteDTO {
    codigoPagoTramite: number;
    codigoTramite: number;
    constancia: string;
    fecha: string;
    horaPago: string;
    minutoPago: string;
    fechaCreacion: string;
}

export type EditarPagoTramiteDTO = Omit<ListarPagoTramiteDTO, 'fechaCreacion'>;
export type CrearPagoTramiteDTO = Omit<ListarPagoTramiteDTO, 'codigoPagoTramite' | 'fechaCreacion'>;