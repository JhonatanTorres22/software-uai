import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Observable } from "rxjs";
import { ApiResponse } from "@/shared/models/api-response.model";
import { EditarEntidad, EliminarEntidad, ListarEntidad } from "../../domain/entity/entidad.entity";
import { CrearEntidadDTO, EditarEntidadDTO, EliminarEntidadDTO, ListarEntidadDTO } from "../dto/entidad.dto";

@Injectable({
    providedIn: 'root'
})

export class EntidadService {
    private readonly http = inject(HttpClient)
    private readonly urlApi = environment.EndPoint
    private readonly urlObtenerEntidades = `${this.urlApi}/api/Entidad/Listar`;
    private readonly urlObtenerEntidadesPorTramite = `${this.urlApi}/api/Entidad/ListarPorTramite/`;
    private readonly urlCrearEntidad = `${this.urlApi}/api/Entidad/Insertar`;
    private readonly urlActualizarEntidad = `${this.urlApi}/api/Entidad/Actualizar`;
    private readonly urlEliminarEntidad = `${this.urlApi}/api/Entidad/Eliminar`;

    
    obtenerEntidades(): Observable<ApiResponse<ListarEntidadDTO[]>> {
        return this.http.get<ApiResponse<ListarEntidadDTO[]>>(this.urlObtenerEntidades);
    }

    obtenerEntidadesPorTramite(idTramite: number): Observable<ApiResponse<ListarEntidadDTO[]>> {
        return this.http.get<ApiResponse<ListarEntidadDTO[]>>(`${this.urlObtenerEntidadesPorTramite}${idTramite}`);
    }

    crearEntidad(crear: CrearEntidadDTO): Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(this.urlCrearEntidad, crear);
    }

    editarEntidad(entidad: EditarEntidadDTO): Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(this.urlActualizarEntidad, entidad);
    }

    eliminarEntidad(eliminar : EliminarEntidadDTO): Observable<ApiResponse<unknown>> {
        return this.http.delete<ApiResponse<unknown>>(this.urlEliminarEntidad, { body: eliminar });
    }
}