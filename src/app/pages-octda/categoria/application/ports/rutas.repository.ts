import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearRuta, EditarRuta, EliminarRuta, ListarRutas } from "../../domain/entity/rutas.entity";

export abstract class RutasRepository {
    abstract obtenerRutas() : Observable<ApiResponse<ListarRutas[]>>
    abstract crearRutas(crear : CrearRuta) : Observable<ApiResponse<unknown>>
    abstract editarRutas(editar : EditarRuta) : Observable<ApiResponse<unknown>>
    abstract eliminarRutas(eliminar : EliminarRuta) : Observable<ApiResponse<unknown>>
}