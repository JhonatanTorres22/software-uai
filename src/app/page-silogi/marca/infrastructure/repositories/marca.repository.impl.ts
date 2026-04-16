import { inject, Injectable } from "@angular/core";
import { MarcaRepository } from "../../application/ports/repository/marca.repository";
import { MarcaService } from "../services/marca.service";
import { ApiResponse } from "@/shared/models/api-response.model";
import { map, Observable } from "rxjs";
import { CrearMarca, EditarMarca, EliminarMarca, ListarMarca } from "../../domain/entity/marca.entity";
import { MarcaMapper } from "../mapper/marca.mapper";

@Injectable({
    providedIn:'root'
})

export class MarcaRepositoryImpl extends MarcaRepository {
    private readonly marcaService = inject(MarcaService)

    override obtenerMarcas(): Observable<ApiResponse<ListarMarca[]>> {
        return this.marcaService.obtenerMarcas().pipe(
            map((response) => ({
                ...response,
                data : (response.data ?? []).map((item) => MarcaMapper.toDomainMarca(item))
            }))
        )
    }

    override crearMarca(marca: CrearMarca): Observable<ApiResponse<ListarMarca>> {
        return this.marcaService.crearMarca(MarcaMapper.toApiCrearMarca(marca))
    }

    override editarMarca(marca: EditarMarca): Observable<ApiResponse<ListarMarca>> {
        return this.marcaService.editarMarca(MarcaMapper.toApiEditarMarca(marca))
    }

    override eliminarMarca(marca: EliminarMarca): Observable<ApiResponse<null>> {
        return this.marcaService.eliminarMarca(MarcaMapper.toApiEliminarMarca(marca))
    }
}