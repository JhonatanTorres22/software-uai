import { CrearCategoria, EditarCategoria, EliminarCategoria, ListarCategoria } from "../../domain/entity/categoria.model";
import { CrearCategoriaDTO, EditarCategoriaDTO, EliminarCategoriaDTO, ListarCategoriaDTO } from "../dto/categoria.dto";

export class CategoriaMapper {
    static toDomainCategoria(categoria : ListarCategoriaDTO) : ListarCategoria {
        return {
            descripcion : categoria.descripcion,
            idCategoriaTramite : categoria.codigoCategoriaTramite,
            nombre : categoria.nombre,
        }
    }

    static toApiCrearCategoria(categoria : CrearCategoria) : CrearCategoriaDTO{
        return{
            descripcion : categoria.descripcion,
            nombre : categoria.nombre
        }
    }

    static toApiEditarCategoria(categoria : EditarCategoria) : EditarCategoriaDTO{
        return{
            descripcion : categoria.descripcion,
            nombre : categoria.nombre,
            codigoCategoriaTramite : categoria.idCategoriaTramite
        }
    }

    static toApiEliminarCategoria(categoria : EliminarCategoria) : EliminarCategoriaDTO{
        return{
            codigoCategoriaTramite : categoria.idCategoriaTramite
        }
    }
}