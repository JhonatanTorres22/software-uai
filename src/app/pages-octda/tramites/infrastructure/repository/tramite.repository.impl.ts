import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiResponse } from "@/shared/models/api-response.model";
import { TramiteRepository } from "../../application/ports/tramite.repository";
import { CrearFormatoSolicitud, CrearTramite, EditarFormatoSolicitud, EditarTramite, EliminarFormatoSolicitud, EliminarTramite, ListarFormatoSolicitud, ListarTramite } from "../../domain/entity/tramite.entity";
import { ListarTramiteDTO } from "../dto/tramite.dto";
import { TramiteMapper } from "../mappers/tramite.mapper";
import { TramitesService } from "../services/tramite.service";

@Injectable({
    providedIn: 'root'
})
export class TramiteRepositoryImpl extends TramiteRepository {
    private readonly service = inject(TramitesService);

    override obtenerTramites(): Observable<ApiResponse<ListarTramite[]>> {
        return this.service.obtenerTramites().pipe(
            map((response) => ({
                ...response,
                data: this.normalizeListData(response.data).map((item) => TramiteMapper.toDomainTramite(item))
            }))
        );
    }

    override obtenerTramitesPorSubCategoria(codigoSubCategoriaTramite: number): Observable<ApiResponse<ListarTramite[]>> {
        return this.service.obtenerTramitesPorSubCategoria(codigoSubCategoriaTramite).pipe(
            map((response) => ({
                ...response,
                data: this.normalizeListData(response.data).map((item) => TramiteMapper.toDomainTramite(item))
            }))
        );
    }

    override obtenerTramitesPorCodigo(codigo: string): Observable<ApiResponse<ListarTramite[]>> {
        return this.service.obtenerTramitesPorCodigo(codigo).pipe(
            map((response) => ({
                ...response,
                data: this.normalizeListData(response.data).map((item) => TramiteMapper.toDomainTramite(item))
            }))
        );
    }

    override actualizarTramite(tramite: EditarTramite): Observable<ApiResponse<unknown>> {
        const tramiteDTO = TramiteMapper.toApiEditarTramite(tramite);
        return this.service.actualizarTramite(tramiteDTO);
    }

    override crearTramite(crear: CrearTramite): Observable<ApiResponse<unknown>> {
        const crearTramiteDTO = TramiteMapper.toApiCrearTramite(crear);
        return this.service.crearTramite(crearTramiteDTO);
    }
    override eliminarTramite(eliminar: EliminarTramite): Observable<ApiResponse<unknown>> {
        const eliminarTramiteDTO = TramiteMapper.toApiEliminarTramite(eliminar);
        return this.service.eliminarTramite(eliminarTramiteDTO);
    }

    /* FORMATO DE SOLICITUD */
    override obtenerFormatoSolicitudPorTramite(idTramite: number): Observable<ApiResponse<ListarFormatoSolicitud[]>> {
        return this.service.obtenerFormatoSolicitudPorTramite(idTramite).pipe(
            map((response) => ({
                ...response,
                data: (response.data ?? []).map((item) => TramiteMapper.toDomainFormatoSolicitud(item))
            }))
        );
    }
    
    override crearFormatoSolicitud(crear: CrearFormatoSolicitud): Observable<ApiResponse<unknown>> {
        const crearFormatoSolicitudDTO = TramiteMapper.toApiCrearFormatoSolicitud(crear);
        return this.service.crearFormatoSolicitud(crearFormatoSolicitudDTO);
    }

    override actualizarFormatoSolicitud(formato: EditarFormatoSolicitud): Observable<ApiResponse<unknown>> {
        const editarFormatoSolicitudDTO = TramiteMapper.toApiEditarFormatoSolicitud(formato);
        return this.service.actualizarFormatoSolicitud(editarFormatoSolicitudDTO);
    }

    override eliminarFormatoSolicitud(formato: EliminarFormatoSolicitud): Observable<ApiResponse<unknown>> {
        const eliminarFormatoSolicitudDTO = TramiteMapper.toApiEliminarFormatoSolicitud(formato);
        return this.service.eliminarFormatoSolicitud(eliminarFormatoSolicitudDTO);
    }

    private normalizeListData(data: ListarTramiteDTO[] | ListarTramiteDTO |  null | undefined ): ListarTramiteDTO[] {
        if (Array.isArray(data)) {
            return data;
        }
        return data ? [data] : [];
    }
}
