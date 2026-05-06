import { CrearPagoTramite, EditarPagoTramite, ListarPagoTramite } from "../../domain/entity/pagoTramite.entity";
import { CrearPagoTramiteDTO, EditarPagoTramiteDTO, ListarPagoTramiteDTO } from "../dto/pagoTramite.dto";

export class PagoTramiteMapper {
    static toDomainPagoTramite(pago: ListarPagoTramiteDTO): ListarPagoTramite {
        return{
            idTramite: pago.codigoTramite,
            idPagoTramite: pago.codigoPagoTramite,
            constanciaPago: pago.constancia,
            fechaPago: pago.fecha,
            horaPago: pago.horaPago,
            minutoPago: pago.minutoPago,
            fechaCreacion: pago.fechaCreacion
        }
    }

    static toApiCrearPagoTramite(crear: CrearPagoTramite): CrearPagoTramiteDTO {
        return{
            codigoTramite : crear.idTramite,
            constancia : crear.constanciaPago,
            fecha : crear.fechaPago,
            horaPago : crear.horaPago,
            minutoPago : crear.minutoPago
        }
    }

    static toApiEditarPagoTramite(editar: EditarPagoTramite): EditarPagoTramiteDTO {
        return{
            codigoPagoTramite : editar.idPagoTramite,
            codigoTramite : editar.idTramite,
            constancia : editar.constanciaPago,
            fecha : editar.fechaPago,
            horaPago : editar.horaPago,
            minutoPago : editar.minutoPago
        }
    }
}