import { CrearUnidadDeMedida, EditarUnidadDeMedida, EliminarUnidadDeMedida, ListarUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";
import { CrearUnidadDeMedidaDTO, EditarUnidadDeMedidaDTO, EliminarUnidadDeMedidaDTO, ListarUnidadDeMedidaDTO } from "../../../unidad-de-medida/infrastructure/dto/unidad-de-medida.dto";

export class UnidadDeMedidaMapper {
    static toDomainUnidadDeMedida(unidadMedida: ListarUnidadDeMedidaDTO): ListarUnidadDeMedida {
        return {
            idUnidadDeMedida: unidadMedida.codigoUnidadMedida,
            nombre: unidadMedida.nombre,
            descripcion: unidadMedida.descripcion
        }
    }

    static toApiCrearUnidadDeMedida(unidadMedida: CrearUnidadDeMedida): CrearUnidadDeMedidaDTO {
        return {
            nombre: unidadMedida.nombre,
            descripcion: unidadMedida.descripcion
        }
    }

    static toApiEditarUnidadDeMedida(unidadMedida: EditarUnidadDeMedida): EditarUnidadDeMedidaDTO {
        return {
            codigoUnidadMedida: unidadMedida.idUnidadDeMedida,
            nombre: unidadMedida.nombre,
            descripcion: unidadMedida.descripcion
        }
    }

    static toApiEliminarUnidadDeMedida(unidadMedida: EliminarUnidadDeMedida): EliminarUnidadDeMedidaDTO {
        return {
            codigoUnidadMedida: unidadMedida.idUnidadDeMedida
        }
    }
}