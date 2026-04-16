import { CrearCategoria, EditarCategoria, EliminarCategoria, ListarCategoria } from "../../domain/entities/categoria.entity";
import { CrearCategoriaDTO, EditarCategoriaDTO, EliminarCategoriaDTO, ListarCategoriaDTO } from "../dto/categoria.dto";

export class CategoriaMapper {
    static toDomainCategoria(categoria : ListarCategoriaDTO) : ListarCategoria {
        return {
            idCategoria : categoria.codigoCategoria,
            nombre : categoria.nombre,
            descripcion : categoria.descripcion
        }
    }

    static toApiCrearCategoria(categoria : CrearCategoria) : CrearCategoriaDTO {
        return {
            nombre : categoria.nombre,
            descripcion : categoria.descripcion
        }
    }

    static toApiEditarCategoria(categoria : EditarCategoria) : EditarCategoriaDTO {
        return {
            codigoCategoria : categoria.idCategoria,
            nombre : categoria.nombre,
            descripcion : categoria.descripcion
        }
    }

    static toApiEliminarCategoria(categoria : EliminarCategoria) : EliminarCategoriaDTO {
        return {
            codigoCategoria : categoria.idCategoria
        }
    }
}