import { inject, Injectable } from "@angular/core";
import { PagoTramiteRepository } from "../../application/ports/pagoTramite.repository";
import { PagoTramiteService } from "../services/pagoTramite.service";
import { ApiResponse } from "@/shared/models/api-response.model";
import { map, Observable } from "rxjs";
import { CrearPagoTramite, EditarPagoTramite, ListarPagoTramite } from "../../domain/entity/pagoTramite.entity";
import { PagoTramiteMapper } from "../mappers/pagoTramite.mapper";

@Injectable({
    providedIn: 'root'
})

export class PagoTramiteRepositoryImpl extends PagoTramiteRepository {
    private readonly service = inject(PagoTramiteService);

    override obtenerPagosPorTramite(idTramite: number): Observable<ApiResponse<ListarPagoTramite[]>> {
        return this.service.obtenerPagosPorTramite(idTramite).pipe(
            map((response) => ({
                ...response,
                data : (response.data || []).map((item) => PagoTramiteMapper.toDomainPagoTramite(item))
            }))
        )
    }

    override obtenerPagosTramite(): Observable<ApiResponse<ListarPagoTramite[]>> {
        return this.service.obtenerPagosTramite().pipe(
            map((response) => ({
                ...response,
                data : (response.data || []).map((item) => PagoTramiteMapper.toDomainPagoTramite(item))
            }))
        )
    }

    override crearPagoTramite(crear: CrearPagoTramite): Observable<ApiResponse<unknown>> {
        const crearPagoTramiteDTO = PagoTramiteMapper.toApiCrearPagoTramite(crear);
        return this.service.crearPagoTramite(crearPagoTramiteDTO);
    }

    override actualizarPagoTramite(pago: EditarPagoTramite): Observable<ApiResponse<unknown>> {
        const editarPagoTramiteDTO = PagoTramiteMapper.toApiEditarPagoTramite(pago);
        return this.service.editarPagoTramite(editarPagoTramiteDTO);

    }
}