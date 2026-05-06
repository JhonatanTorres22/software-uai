import { Observable } from "rxjs";
import { CrearEntidad, EditarEntidad, EliminarEntidad, ListarEntidad } from "../../domain/entity/entidad.entity";
import { ApiResponse } from "@/shared/models/api-response.model";

export abstract class EntidadRepository {
    abstract obtenerEntidades(): Observable<ApiResponse<ListarEntidad[]>>;
    abstract obtenerEntidadesPorTramite(codigoTramite: number): Observable<ApiResponse<ListarEntidad[]>>;
    abstract crearEntidad(crear: CrearEntidad): Observable<ApiResponse<unknown>>;
    abstract editarEntidad(entidad: EditarEntidad): Observable<ApiResponse<unknown>>;
    abstract eliminarEntidad(entidad: EliminarEntidad): Observable<ApiResponse<unknown>>;
}