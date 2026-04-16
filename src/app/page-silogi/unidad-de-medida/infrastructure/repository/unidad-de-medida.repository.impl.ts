import { inject, Injectable } from "@angular/core";
import { UnidadDeMedidaRepository } from "../../application/ports/unidad-de-medida.repository";

import { ApiResponse } from "@/shared/models/api-response.model";
import { map, Observable } from "rxjs";
import { CrearUnidadDeMedida, EditarUnidadDeMedida, EliminarUnidadDeMedida, ListarUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";
import { UnidadDeMedidaMapper } from "../mappers/unidad-de-medida.mapper";
import { UnidadDeMedidaService } from "../service/unidad-de-medida.service";

@Injectable({
    providedIn: 'root'
})

export class UnidadDeMedidaRepositoryImpl extends UnidadDeMedidaRepository {
    private readonly service = inject(UnidadDeMedidaService);

    override obtenerUnidadDeMedida(): Observable<ApiResponse<ListarUnidadDeMedida[]>> {
        return this.service.obtenerUnidadDeMedida().pipe(
            map(response => ({
                ...response,
                data: (response.data ?? []).map((item) => UnidadDeMedidaMapper.toDomainUnidadDeMedida(item))
            }))
        )
    }

    override crearUnidadDeMedida(unidadDeMedida: CrearUnidadDeMedida): Observable<ApiResponse<unknown>> {
        return this.service.crearUnidadDeMedida(UnidadDeMedidaMapper.toApiCrearUnidadDeMedida(unidadDeMedida));
    }
    override editarUnidadDeMedida(unidadDeMedida: EditarUnidadDeMedida): Observable<ApiResponse<unknown>> {
        return this.service.editarUnidadDeMedida(UnidadDeMedidaMapper.toApiEditarUnidadDeMedida(unidadDeMedida));
    }

    override eliminarUnidadDeMedida(unidadDeMedida: EliminarUnidadDeMedida): Observable<ApiResponse<unknown>> {
        return this.service.eliminarUnidadDeMedida(UnidadDeMedidaMapper.toApiEliminarUnidadDeMedida(unidadDeMedida));
    }
}