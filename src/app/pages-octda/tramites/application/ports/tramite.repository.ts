import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearFormatoSolicitud, CrearTramite, EditarFormatoSolicitud, EditarTramite, EliminarFormatoSolicitud, EliminarTramite, ListarFormatoSolicitud, ListarTramite } from "../../domain/entity/tramite.entity";

export abstract class TramiteRepository {
    abstract obtenerTramites(): Observable<ApiResponse<ListarTramite[]>>;
    abstract obtenerTramitesPorSubCategoria(codigoSubCategoriaTramite: number): Observable<ApiResponse<ListarTramite[]>>;
    abstract obtenerTramitesPorCodigo(codigo: string): Observable<ApiResponse<ListarTramite[]>>;
    abstract crearTramite(crear: CrearTramite): Observable<ApiResponse<unknown>>;
    abstract actualizarTramite(tramite: EditarTramite): Observable<ApiResponse<unknown>>;
    abstract eliminarTramite(eliminar: EliminarTramite): Observable<ApiResponse<unknown>>;

    /* FORMATO DE SOLICITUD */
    abstract obtenerFormatoSolicitudPorTramite(idTramite:number): Observable<ApiResponse<ListarFormatoSolicitud[]>>;
    abstract crearFormatoSolicitud(crear: CrearFormatoSolicitud): Observable<ApiResponse<unknown>>;
    abstract actualizarFormatoSolicitud(formato: EditarFormatoSolicitud): Observable<ApiResponse<unknown>>;
    abstract eliminarFormatoSolicitud(formato: EliminarFormatoSolicitud): Observable<ApiResponse<unknown>>;
}
