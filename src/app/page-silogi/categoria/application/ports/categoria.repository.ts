import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearCategoria, EditarCategoria, EliminarCategoria, ListarCategoria } from "../../domain/entities/categoria.entity";
import { CrearCategoriaDTO, EditarCategoriaDTO, EliminarCategoriaDTO } from "../../infrastructure/dto/categoria.dto";

export abstract class CategoriaRepository{
    abstract obtenerCategoria() : Observable<ApiResponse<ListarCategoria[]>>
    abstract crearCategoria(categoria: CrearCategoria) : Observable<ApiResponse<unknown>>
    abstract editarCategoria(categoria: EditarCategoria) : Observable<ApiResponse<unknown>>
    abstract eliminarCategoria(categoria: EliminarCategoria) : Observable<ApiResponse<unknown>>
}