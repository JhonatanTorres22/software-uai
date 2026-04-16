import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearMarca, EditarMarca, EliminarMarca, ListarMarca } from "../../../domain/entity/marca.entity";

export abstract class MarcaRepository {
    abstract obtenerMarcas() : Observable<ApiResponse<ListarMarca[]>>
    abstract crearMarca(marca:CrearMarca) : Observable<ApiResponse<ListarMarca>>
    abstract editarMarca(marca:EditarMarca) : Observable<ApiResponse<ListarMarca>>
    abstract eliminarMarca(marca:EliminarMarca) : Observable<ApiResponse<null>>
}