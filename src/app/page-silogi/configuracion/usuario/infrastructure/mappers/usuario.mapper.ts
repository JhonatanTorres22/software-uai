import { CrearUsuario, EliminarUsuario, ListarUsuario } from "../../domain/entities/usuario.entity";
import { ActualizarUsuarioDTO, CrearUsuarioDTO, EliminarUsuarioDTO, ListarUsuarioDTO } from "../dto/usuario.dto";

export class UsuarioMapper{
    static toDomainUsuario(usuario : ListarUsuarioDTO) : ListarUsuario{
        return {
            id : usuario.codigo,
            apePaterno : usuario.apellidoPaterno,
            apMaterno : usuario.apellidoMaterno,
            nombres : usuario.nombres,
            correo : usuario.correo,
            nDocumento : usuario.numeroDocumento,
            tipoDocumento : usuario.tipoDocumento
        }
    }

    static toApiCrearUsuario(usuario : CrearUsuario) : CrearUsuarioDTO{
        return {
            apellidoPaterno : usuario.apePaterno,
            apellidoMaterno : usuario.apMaterno,
            nombres : usuario.nombres,
            correo : usuario.correo,
            numeroDocumento : usuario.nDocumento,
            // tipoDocumento : usuario.tipoDocumento
        }
    }

    static toApiActualizarUsuario(usuario : ListarUsuario) : ActualizarUsuarioDTO{
        return {
            codigo: usuario.id,
            apellidoPaterno : usuario.apePaterno,
            apellidoMaterno : usuario.apMaterno,
            nombres : usuario.nombres,
            correo : usuario.correo,
            numeroDocumento : usuario.nDocumento,
            // tipoDocumento : usuario.tipoDocumento
        }
    }

    static toApiEliminarUsuario(usuario : EliminarUsuario) : EliminarUsuarioDTO{
        return {
            codigo : usuario.id
        }
    }
}