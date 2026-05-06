import { inject, Injectable } from "@angular/core";
import { EntidadRepository } from "../../application/ports/entidad.repository";
import { EntidadService } from "../services/entidad.service";
import { map, Observable } from "rxjs";
import { CrearEntidad, EditarEntidad, EliminarEntidad, ListarEntidad } from "../../domain/entity/entidad.entity";
import { EntidadMapper } from "../mappers/entidad.mapper";
import { ApiResponse } from "@/shared/models/api-response.model";

@Injectable({
    providedIn: 'root'
})

export class EntidadRepositoryImpl extends EntidadRepository {
    private readonly service = inject(EntidadService);

    override obtenerEntidades(): Observable<ApiResponse<ListarEntidad[]>> {
        return this.service.obtenerEntidades().pipe(
            map(response => ({
                ...response,
                data: (response.data || []).map((item) => EntidadMapper.toDomainEntidad(item))
            }))
        );
    }
    override obtenerEntidadesPorTramite(codigoTramite: number): Observable<ApiResponse<ListarEntidad[]>> {
        return this.service.obtenerEntidadesPorTramite(codigoTramite).pipe(
            map(response => ({
                ...response,
                data: (response.data || []).map((item) => EntidadMapper.toDomainEntidad(item))
            }))
        );
    }
    override crearEntidad(crear: CrearEntidad): Observable<ApiResponse<unknown>> {
        const crearEntidadDTO = EntidadMapper.toApiCrearEntidad(crear);
        return this.service.crearEntidad(crearEntidadDTO);
    }
    override editarEntidad(entidad: EditarEntidad): Observable<ApiResponse<unknown>> {
        const editarEntidadDTO = EntidadMapper.toApiEditarEntidad(entidad);
        return this.service.editarEntidad(editarEntidadDTO);
    }

    override eliminarEntidad(entidad: EliminarEntidad): Observable<ApiResponse<unknown>> {
        const eliminarEntidadDTO = EntidadMapper.toApiEliminarEntidad(entidad);
        return this.service.eliminarEntidad(eliminarEntidadDTO);
    }
}

