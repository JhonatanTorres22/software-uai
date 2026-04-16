import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearUnidadDeMedida, EditarUnidadDeMedida, EliminarUnidadDeMedida, ListarUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";

export abstract class UnidadDeMedidaRepository {
    abstract obtenerUnidadDeMedida() : Observable<ApiResponse<ListarUnidadDeMedida[]>>
    abstract crearUnidadDeMedida(unidadDeMedida: CrearUnidadDeMedida) : Observable<ApiResponse<unknown>>
    abstract editarUnidadDeMedida(unidadDeMedida: EditarUnidadDeMedida) : Observable<ApiResponse<unknown>>
    abstract eliminarUnidadDeMedida(unidadDeMedida: EliminarUnidadDeMedida) : Observable<ApiResponse<unknown>>
}