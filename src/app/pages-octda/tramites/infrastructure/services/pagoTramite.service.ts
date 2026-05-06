import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { Observable } from "rxjs";
import { ApiResponse } from "@/shared/models/api-response.model";
import { CrearPagoTramite, ListarPagoTramite } from "../../domain/entity/pagoTramite.entity";
import { CrearPagoTramiteDTO, ListarPagoTramiteDTO } from "../dto/pagoTramite.dto";

@Injectable({
    providedIn: 'root'
})

export class PagoTramiteService {
    private readonly http = inject(HttpClient);
    private readonly urlApi = environment.EndPoint
    private readonly urlListarPagoPorTramite = `${this.urlApi}/api/PagoTramite/ListarPorTramite/`;
    private readonly urlListarPagosTramite = `${this.urlApi}/api/PagoTramite/Listar`;
    private readonly urlCrearPagoTramite = `${this.urlApi}/api/PagoTramite/Insertar`;
    private readonly urlActualizarPagoTramite = `${this.urlApi}/api/PagoTramite/Actualizar`;

    obtenerPagosPorTramite(idTramite: number): Observable<ApiResponse<ListarPagoTramiteDTO[]>> {
        return this.http.get<ApiResponse<ListarPagoTramiteDTO[]>>(`${this.urlListarPagoPorTramite}${idTramite}`);
    }

    obtenerPagosTramite(): Observable<ApiResponse<ListarPagoTramiteDTO[]>> {
        return this.http.get<ApiResponse<ListarPagoTramiteDTO[]>>(this.urlListarPagosTramite);
    }

    crearPagoTramite(crear: CrearPagoTramiteDTO): Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(this.urlCrearPagoTramite, crear);
    }

    editarPagoTramite(editar: CrearPagoTramiteDTO): Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(this.urlActualizarPagoTramite, editar);  
    }
}