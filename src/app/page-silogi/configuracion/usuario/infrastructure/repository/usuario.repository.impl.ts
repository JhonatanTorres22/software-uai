import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "@/shared/models/api-response.model";
import { map, Observable } from "rxjs";
import { UsuarioRepository } from "../../application/ports/usuario.repository";
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ListarUsuario } from "../../domain/entities/usuario.entity";
import { UsuarioMapper } from "../mappers/usuario.mapper";
import { UsuarioService } from "../service/usuario.service";

@Injectable({
    providedIn: 'root'
})

export class UsuarioRepositoryImpl extends UsuarioRepository {
    private readonly service = inject(UsuarioService);

    override obtenerUsuarios(): Observable<ApiResponse<ListarUsuario[]>> {
        return this.service.obtenerUsuarios().pipe(
            map((response) => ({
                ...response,
                data: (response.data ?? []).map((item) => UsuarioMapper.toDomainUsuario(item))
            }))
        );
    }

    override crearUsuario(usuario: CrearUsuario): Observable<ApiResponse<unknown>> {
        return this.service.crearUsuario(UsuarioMapper.toApiCrearUsuario(usuario));
    }

    override editarUsuario(usuario: ActualizarUsuario): Observable<ApiResponse<unknown>> {
        return this.service.editarUsuario(UsuarioMapper.toApiActualizarUsuario(usuario));
    }

    override eliminarUsuario(eliminar: EliminarUsuario): Observable<ApiResponse<unknown>> {
        return this.service.eliminarUsuario(UsuarioMapper.toApiEliminarUsuario(eliminar));
    }
}