import { CrearSubCategoria, EditarSubCategoria, EliminarSubCategoria, ListarSubCategoria } from "../../domain/entity/subCategoria.entity";
import { CrearSubCategoriaDTO, EditarSubCategoriaDTO, EliminarSubCategoriaDTO, ListarSubCategoriaDTO } from "../dto/subCategoria.dto";

export class SubCategoriaMapper {
    static toDomainSubCategoria(subCategoria : ListarSubCategoriaDTO) : ListarSubCategoria {
        return {
            idSubCategoriaTramite: subCategoria.codigoSubCategoriaTramite,
            idCategoriaTramite: subCategoria.codigoCategoriaTramite,
            nombre: subCategoria.nombre,
            descripcion: subCategoria.descripcion
        }
    }

    static toApiCrearSubCategoria(subCategoria : CrearSubCategoria) : CrearSubCategoriaDTO{
        return{
            codigoCategoriaTramite : subCategoria.idCategoriaTramite,
            nombre : subCategoria.nombre,
            descripcion : subCategoria.descripcion
        }
    }

    static toApiEditarSubCategoria(subCategoria : EditarSubCategoria) : EditarSubCategoriaDTO{
        return{
            codigoSubCategoriaTramite : subCategoria.idSubCategoriaTramite,
            codigoCategoriaTramite : subCategoria.idCategoriaTramite,
            nombre : subCategoria.nombre,
            descripcion : subCategoria.descripcion
        }
    }

    static toApiEliminarSubCategoria(subCategoria : EliminarSubCategoria) : EliminarSubCategoriaDTO{
        return{
            codigoSubCategoriaTramite : subCategoria.idSubCategoriaTramite,
        }
    }
}