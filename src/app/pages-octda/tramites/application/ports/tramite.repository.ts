import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearFormatoSolicitud, CrearTramite, EditarTramite, EliminarTramite, ListarFormatoSolicitud, ListarTramite } from "../../domain/entity/tramite.entity";

export abstract class TramiteRepository {
    abstract obtenerTramites(): Observable<ApiResponse<ListarTramite[]>>;
    abstract obtenerTramitesPorSubCategoria(codigoSubCategoriaTramite: number): Observable<ApiResponse<ListarTramite[]>>;
    abstract obtenerTramitesPorCodigo(codigo: string): Observable<ApiResponse<ListarTramite[]>>;
    abstract crearTramite(crear: CrearTramite): Observable<ApiResponse<unknown>>;
    abstract actualizarTramite(tramite: EditarTramite): Observable<ApiResponse<unknown>>;
    abstract eliminarTramite(eliminar: EliminarTramite): Observable<ApiResponse<unknown>>;

    /* FORMATO DE SOLICITUD */
    abstract obtenerFormatoSolicitud(): Observable<ApiResponse<ListarFormatoSolicitud[]>>;
    abstract crearFormatoSolicitud(crear: CrearFormatoSolicitud): Observable<ApiResponse<unknown>>;
}
