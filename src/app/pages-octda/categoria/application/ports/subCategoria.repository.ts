import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { ListarSubCategoria, CrearSubCategoria, EditarSubCategoria, EliminarSubCategoria } from "../../domain/entity/subCategoria.entity";

export abstract class SubCategoriaRepository{
    abstract obtenerSubCategoria() : Observable<ApiResponse<ListarSubCategoria[]>>
    abstract obtenerSubCategoriaPorCategoria(idCategoria: number) : Observable<ApiResponse<ListarSubCategoria[]>>
    abstract obtenerSubCategoriaPorId(idSubCategoria: number) : Observable<ApiResponse<ListarSubCategoria>>
    abstract crearSubCategoria(subCategoria: CrearSubCategoria) : Observable<ApiResponse<unknown>>
    abstract editarSubCategoria(subCategoria: EditarSubCategoria) : Observable<ApiResponse<unknown>>
    abstract eliminarSubCategoria(subCategoria: EliminarSubCategoria) : Observable<ApiResponse<unknown>>
}