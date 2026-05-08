import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Observable } from "rxjs";
import { ApiResponse } from "@/shared/models/api-response.model";
import { ListarRutas } from "../../domain/entity/rutas.entity";
import { CrearRutaDTO, EditarRutaDTO, EliminarRutaDTO, ListarRutasDTO } from "../dto/rutas.dto";

@Injectable({
    providedIn: 'root'
})

export class RutaService {
    private readonly http = inject(HttpClient);
    private readonly urlApi = environment.EndPoint
    private readonly urlListarRutas = `${this.urlApi}/api/Ruta/Listar`;
    private readonly urlCrearRuta = `${this.urlApi}/api/Ruta/Insertar`;
    private readonly urlEditarRuta = `${this.urlApi}/api/Ruta/Actualizar`;
    private readonly urlEliminarRuta = `${this.urlApi}/api/Ruta/Eliminar`;

    obtenerRutas() : Observable<ApiResponse<ListarRutasDTO[]>> {
        return this.http.get<ApiResponse<ListarRutasDTO[]>>(this.urlListarRutas);
    }

    crearRuta(crear : CrearRutaDTO) : Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(this.urlCrearRuta, crear);
    }

    editarRuta(editar : EditarRutaDTO) : Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(this.urlEditarRuta, editar);
    }

    eliminarRuta(eliminar : EliminarRutaDTO) : Observable<ApiResponse<unknown>> {
        return this.http.delete<ApiResponse<unknown>>(this.urlEliminarRuta, { body: eliminar });
    }
}