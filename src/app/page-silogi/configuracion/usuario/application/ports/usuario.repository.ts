import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { ActualizarUsuario, CrearUsuario, EliminarUsuario,  ListarUsuario } from "../../domain/entities/usuario.entity";

export abstract class UsuarioRepository {
    abstract obtenerUsuarios() : Observable<ApiResponse<ListarUsuario[]>>;
    abstract crearUsuario(usuario:CrearUsuario) : Observable<ApiResponse<unknown>>;
    abstract editarUsuario(usuario:ActualizarUsuario) : Observable<ApiResponse<unknown>>;
    abstract eliminarUsuario(eliminar : EliminarUsuario) : Observable<ApiResponse<unknown>>;
    // abstract obtenerPermisos() : Observable<ApiResponse<ListarPermisos>>;
}