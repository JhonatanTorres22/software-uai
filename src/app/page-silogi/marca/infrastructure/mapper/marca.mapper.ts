import { CrearMarca, EditarMarca, EliminarMarca, ListarMarca } from "../../domain/entity/marca.entity";
import { CrearMarcaDTO, EditarMarcaDTO, EliminarMarcaDTO, ListarMarcaDTO } from "../dto/marca.dto";

export class MarcaMapper {
    static toDomainMarca (marca : ListarMarcaDTO) : ListarMarca {
        return {
            idMarca: marca.codigoMarca,
            nombreMarca: marca.nombre,
            descripcionMarca: marca.descripcion
        }
    }

    static toApiCrearMarca (marca : CrearMarca) : CrearMarcaDTO {
        return {
            nombre: marca.nombreMarca,
            descripcion: marca.descripcionMarca
        }
    }
    static toApiEditarMarca (marca : EditarMarca) : EditarMarcaDTO {
        return {
            codigoMarca: marca.idMarca,
            nombre: marca.nombreMarca,
            descripcion: marca.descripcionMarca
        }
    }
    static toApiEliminarMarca (marca : EliminarMarca) : EliminarMarcaDTO {
        return {
            codigoMarca: marca.idMarca
        }
    }
}