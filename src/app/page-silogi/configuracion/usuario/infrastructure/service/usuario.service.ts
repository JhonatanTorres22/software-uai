import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ActualizarUsuario, CrearUsuario, EliminarUsuario } from "../../domain/entities/usuario.entity";
import { ActualizarUsuarioDTO, CrearUsuarioDTO, EliminarUsuarioDTO, ListarUsuarioDTO } from "../dto/usuario.dto";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    private http = inject(HttpClient);
    private urlApi : string = environment.EndPoint
    private urlObtenerUsuarios : string = `/api/usuario/Listar`;
    private urlCrearUsuario : string = `/api/Usuario/Insertar`;
    private urlEditarUsuario : string = `/api/Usuario/Editar`;
    private urlEliminarUsuario : string = `/api/Usuario/Eliminar`;


    obtenerUsuarios(): Observable<ApiResponse<ListarUsuarioDTO[]>> {
        return this.http.get<ApiResponse<ListarUsuarioDTO[]>>(`${this.urlApi}${this.urlObtenerUsuarios}`);
    }

    crearUsuario(crear: CrearUsuarioDTO): Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(`${this.urlApi}${this.urlCrearUsuario}`, crear);
    }

    editarUsuario(editar : ActualizarUsuarioDTO): Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(`${this.urlApi}${this.urlEditarUsuario}`, editar);
    }
    
    eliminarUsuario(eliminar: EliminarUsuarioDTO): Observable<ApiResponse<unknown>> {
        return this.http.request<ApiResponse<unknown>>('delete', `${this.urlApi}${this.urlEliminarUsuario}`, { body: eliminar });
    }
}