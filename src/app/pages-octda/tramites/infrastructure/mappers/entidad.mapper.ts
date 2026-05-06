
import { CrearEntidad, EditarEntidad, EliminarEntidad, ListarEntidad } from "../../domain/entity/entidad.entity";
import { CrearEntidadDTO, EditarEntidadDTO, EliminarEntidadDTO, ListarEntidadDTO } from "../dto/entidad.dto";

export class EntidadMapper {
    static toDomainEntidad(entidad: ListarEntidadDTO): ListarEntidad {
        return {
            idEntidad: entidad.codigoEntidad,
            idTramite: entidad.codigoTramite,
            ruc: entidad.ruc,
            razonSocial: entidad.razonSocial,
            direccion: entidad.direccionFiscal,
            fechaCreacion: entidad.fechaCreacion
        }
    }

    static toApiCrearEntidad(crear: CrearEntidad): CrearEntidadDTO {
        return {
            codigoTramite: crear.idTramite,
            ruc: crear.ruc,
            razonSocial: crear.razonSocial,
            direccionFiscal: crear.direccion
        }
    }

    static toApiEditarEntidad(editar: EditarEntidad): EditarEntidadDTO {
        return {
            codigoEntidad: editar.idEntidad,
            codigoTramite: editar.idTramite,
            ruc: editar.ruc,
            razonSocial: editar.razonSocial,
            direccionFiscal: editar.direccion
        }
    }

    static toApiEliminarEntidad(entidad: EliminarEntidad): EliminarEntidadDTO {
        return {
            codigoEntidad: entidad.idEntidad
        }
    }
}