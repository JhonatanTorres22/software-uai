import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearPagoTramite, EditarPagoTramite, ListarPagoTramite } from "../../domain/entity/pagoTramite.entity";

export abstract class PagoTramiteRepository {
    abstract obtenerPagosTramite(): Observable<ApiResponse<ListarPagoTramite[]>>;
    abstract obtenerPagosPorTramite(idTramite: number): Observable<ApiResponse<ListarPagoTramite[]>>;
    abstract crearPagoTramite(crear: CrearPagoTramite): Observable<ApiResponse<unknown>>;
    abstract actualizarPagoTramite(pago: EditarPagoTramite): Observable<ApiResponse<unknown>>;
}