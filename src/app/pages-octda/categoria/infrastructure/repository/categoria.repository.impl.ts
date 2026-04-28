import { inject, Injectable } from "@angular/core";
import { CategoriaRepository } from "../../application/ports/categoria.repository";
import { CategoriaService } from "../services/categoria.service";
import { ApiResponse } from "@/shared/models/api-response.model";
import { map, Observable } from "rxjs";
import { CrearCategoria, EditarCategoria, EliminarCategoria, ListarCategoria } from "../../domain/entity/categoria.model";
import { CategoriaMapper } from "../mappers/categoria.mapper";

@Injectable({
    providedIn: 'root'
})

export class CategoriaRepositoryImpl extends CategoriaRepository {
    private readonly service = inject(CategoriaService);

    override crearCategoria(categoria: CrearCategoria): Observable<ApiResponse<unknown>> {
        return this.service.crearCategoria(CategoriaMapper.toApiCrearCategoria(categoria));
    }

    override editarCategoria(categoria: EditarCategoria): Observable<ApiResponse<unknown>> {
        return this.service.editarCategoria(CategoriaMapper.toApiEditarCategoria(categoria))
    }

    override eliminarCategoria(categoria: EliminarCategoria): Observable<ApiResponse<unknown>> {
        return this.service.eliminarCategoria(CategoriaMapper.toApiEliminarCategoria(categoria))
    }

    override obtenerCategoria(): Observable<ApiResponse<ListarCategoria[]>> {
        return this.service.obtenerCategoria().pipe(
            map((response) => ({
                ...response,
                data: (response.data ?? []).map((item) => CategoriaMapper.toDomainCategoria(item))
            }))
        )
    }
}