import { inject, Injectable } from "@angular/core";
import { SubCategoriaRepository } from "../../application/ports/subCategoria.repository";
import { SubCategoriaService } from "../services/subCategoria.service";
import { map, Observable } from "rxjs";
import { ApiResponse } from "@/shared/models/api-response.model";
import { CrearSubCategoria, EditarSubCategoria, EliminarSubCategoria, ListarSubCategoria } from "../../domain/entity/subCategoria.entity";
import { SubCategoriaMapper } from "../mappers/subCategoria.mapper";
import { ListarSubCategoriaDTO } from "../dto/subCategoria.dto";

@Injectable({
    providedIn: 'root'
})


export class SubCategoriaRepositoryImpl extends SubCategoriaRepository {
    private readonly service = inject(SubCategoriaService);

    private normalizeListData(data: ListarSubCategoriaDTO[] | ListarSubCategoriaDTO | null | undefined): ListarSubCategoriaDTO[] {
        if (Array.isArray(data)) {
            return data;
        }

        return data ? [data] : [];
    }

    override obtenerSubCategoria(): Observable<ApiResponse<ListarSubCategoria[]>> {
        return this.service.obtenerSubCategoria().pipe(
            map((response) => ({
                ...response,
                data: this.normalizeListData(response.data).map((item) => SubCategoriaMapper.toDomainSubCategoria(item))
            }))
        )
    }

    override obtenerSubCategoriaPorId(idSubCategoria: number): Observable<ApiResponse<ListarSubCategoria>> {
        return this.service.obtenerSubCategoriaPorId(idSubCategoria).pipe(
            map((response) => ({
                ...response,
                data: SubCategoriaMapper.toDomainSubCategoria(response.data)
            }))
        )
    }

    override crearSubCategoria(subCategoria: CrearSubCategoria): Observable<ApiResponse<unknown>> {
        return this.service.crearSubCategoria(SubCategoriaMapper.toApiCrearSubCategoria(subCategoria));
    }

    override editarSubCategoria(subCategoria: EditarSubCategoria): Observable<ApiResponse<unknown>> {
        return this.service.editarCategoria(SubCategoriaMapper.toApiEditarSubCategoria(subCategoria))
    }

    override eliminarSubCategoria(subCategoria: EliminarSubCategoria): Observable<ApiResponse<unknown>> {
        return this.service.eliminarCategoria(SubCategoriaMapper.toApiEliminarSubCategoria(subCategoria))
    }

    override obtenerSubCategoriaPorCategoria(idCategoria: number): Observable<ApiResponse<ListarSubCategoria[]>> {
        return this.service.obtenerSubCategoriaPorCategoria(idCategoria).pipe(
            map((response) => ({
                ...response,
                data: this.normalizeListData(response.data).map((item) => SubCategoriaMapper.toDomainSubCategoria(item))
            }))
        )
    }
}