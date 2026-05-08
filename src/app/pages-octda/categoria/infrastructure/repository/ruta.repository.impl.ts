import { inject, Injectable } from "@angular/core";
import { RutasRepository } from "../../application/ports/rutas.repository";
import { RutaService } from "../services/ruta.service";
import { ApiResponse } from "@/shared/models/api-response.model";
import { map, Observable } from "rxjs";
import { CrearRuta, EditarRuta, EliminarRuta, ListarRutas } from "../../domain/entity/rutas.entity";
import { RutasMapper } from "../mappers/rutas.mapper";

@Injectable({
    providedIn: 'root'
})

export class RutaRepositoryImpl extends RutasRepository {
    private readonly service = inject(RutaService);

    override obtenerRutas(): Observable<ApiResponse<ListarRutas[]>> {
        return this.service.obtenerRutas().pipe(
            map((response) => ({
                ...response,
                data: response.data.map((item) => RutasMapper.toDomainRutas(item))
            }))
        );
    }
    override crearRutas(crear: CrearRuta): Observable<ApiResponse<unknown>> {
        const crearRuta = RutasMapper.toApiCrearRuta(crear);
        return this.service.crearRuta(crearRuta);
    }

    override editarRutas(editar: EditarRuta): Observable<ApiResponse<unknown>> {
        const editarRuta = RutasMapper.toApiEditarRuta(editar);
        return this.service.editarRuta(editarRuta);
    }

    override eliminarRutas(eliminar: EliminarRuta): Observable<ApiResponse<unknown>> {
        const eliminarRuta = RutasMapper.toApiEliminarRuta(eliminar);
        return this.service.eliminarRuta(eliminarRuta);
    }
}