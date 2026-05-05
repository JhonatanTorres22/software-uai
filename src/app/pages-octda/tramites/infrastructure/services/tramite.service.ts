import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ApiResponse } from '@/shared/models/api-response.model';
import { CrearFormatoSolicitudDTO, CrearTramiteDTO, EditarFormatoSolicitudDTO, EditarTramiteDTO, EliminarFormatoSolicitudDTO, EliminarTramiteDTO, ListarFormatoSolicitudDTO, ListarTramiteDTO } from '../dto/tramite.dto';
import { inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TramitesService {
  private readonly http = inject(HttpClient);
  private readonly urlApi = environment.EndPoint
  private readonly urlListarTramites = `${this.urlApi}/api/Tramite/Listar`;
  private readonly urlListarTramitePorCodigo = `${this.urlApi}/api/Tramite/ListarPorCodigo/`;
  private readonly urlListarTramitePorSubcategoria = `${this.urlApi}/api/Tramite/ListarPorSubCategoriaTramite/`;
  private readonly urlActualizarTramite = `${this.urlApi}/api/Tramite/Actualizar`;
  private readonly urlCrearTramite = `${this.urlApi}/api/Tramite/Insertar`;
  private readonly urlEliminarTramite = `${this.urlApi}/api/Tramite/Eliminar`;
  private readonly urlObtenerFormatoSolicitudPorTramite = `${this.urlApi}/api/FormatoSolicitud/ListarPorTramite/`;
  private readonly urlCrearFormatoSolicitud = `${this.urlApi}/api/FormatoSolicitud/Insertar`;
  private readonly urlActualizarFormatoSolicitud = `${this.urlApi}/api/FormatoSolicitud/Actualizar`;
  private readonly urlEliminarFormatoSolicitud = `${this.urlApi}/api/FormatoSolicitud/Eliminar`;


  obtenerTramites(): Observable<ApiResponse<ListarTramiteDTO[] | ListarTramiteDTO>> {
    return this.http.get<ApiResponse<ListarTramiteDTO[] | ListarTramiteDTO>>(this.urlListarTramites);
  }

  obtenerTramitesPorSubCategoria(codigoSubCategoriaTramite: number): Observable<ApiResponse<ListarTramiteDTO[] | ListarTramiteDTO>> {
    return this.http.get<ApiResponse<ListarTramiteDTO[] | ListarTramiteDTO>>(`${this.urlListarTramitePorSubcategoria}${codigoSubCategoriaTramite}`);
  }

  obtenerTramitesPorCodigo(codigo: string): Observable<ApiResponse<ListarTramiteDTO[] | ListarTramiteDTO>> {
    return this.http.get<ApiResponse<ListarTramiteDTO[] | ListarTramiteDTO>>(`${this.urlListarTramitePorCodigo}${codigo}`);
  }

  crearTramite(crear: CrearTramiteDTO): Observable<ApiResponse<unknown>> {
    return this.http.post<ApiResponse<unknown>>(this.urlCrearTramite, crear);
  }

  actualizarTramite(tramite: EditarTramiteDTO): Observable<ApiResponse<unknown>> {
    return this.http.put<ApiResponse<unknown>>(this.urlActualizarTramite, tramite);
  }

  eliminarTramite(tramite: EliminarTramiteDTO): Observable<ApiResponse<unknown>> {
    return this.http.delete<ApiResponse<unknown>>(this.urlEliminarTramite, { body: tramite });
  }

  /* FORMATO DE SOLICITUD */

  obtenerFormatoSolicitudPorTramite(idTramite:number): Observable<ApiResponse<ListarFormatoSolicitudDTO[]>> {
    return this.http.get<ApiResponse<ListarFormatoSolicitudDTO[]>>(`${this.urlObtenerFormatoSolicitudPorTramite}${idTramite}`);
  }

  crearFormatoSolicitud(crear: CrearFormatoSolicitudDTO): Observable<ApiResponse<unknown>> {
    return this.http.post<ApiResponse<unknown>>(this.urlCrearFormatoSolicitud, crear);
  }

  actualizarFormatoSolicitud(formato: EditarFormatoSolicitudDTO): Observable<ApiResponse<unknown>> {
    return this.http.put<ApiResponse<unknown>>(this.urlActualizarFormatoSolicitud, formato);
  }

  eliminarFormatoSolicitud(formato: EliminarFormatoSolicitudDTO): Observable<ApiResponse<unknown>> {
    return this.http.delete<ApiResponse<unknown>>(this.urlEliminarFormatoSolicitud, { body: formato });
  }

}