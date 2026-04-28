import { ApiResponse } from "@/shared/models/api-response.model";
import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CrearCategoriaDTO, EditarCategoriaDTO, EliminarCategoriaDTO, ListarCategoriaDTO } from "../dto/categoria.dto";
import { CrearSubCategoriaDTO, EditarSubCategoriaDTO, EliminarSubCategoriaDTO, ListarSubCategoriaDTO } from "../dto/subCategoria.dto";

@Injectable({
    providedIn: 'root'
})

export class SubCategoriaService {
    private http = inject(HttpClient);

    private apiUrl: string = environment.EndPoint
    private urlObtenerSubCategoria: string = '/api/SubCategoriaTramite/Listar';
    private urlObtenerSubCategoriaPorCategoria: string = '/api/SubCategoriaTramite/ListarPorId/';
    private urlCrearSubCategoria: string = '/api/SubCategoriaTramite/Insertar'
    private urlEditarSubCategoria: string = '/api/SubCategoriaTramite/Actualizar'
    private urlEliminarSubCategoria: string = '/api/SubCategoriaTramite/Eliminar'

    obtenerSubCategoria(): Observable<ApiResponse<ListarSubCategoriaDTO[]>> {
        return this.http.get<ApiResponse<ListarSubCategoriaDTO[]>>(`${this.apiUrl}${this.urlObtenerSubCategoria}`);
    }

    obtenerSubCategoriaPorCategoria(idCategoria: number): Observable<ApiResponse<ListarSubCategoriaDTO[]>> {
        return this.http.get<ApiResponse<ListarSubCategoriaDTO[]>>(`${this.apiUrl}${this.urlObtenerSubCategoriaPorCategoria}${idCategoria}`);
    }

    crearSubCategoria(subCategoria: CrearSubCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(`${this.apiUrl}${this.urlCrearSubCategoria}`, subCategoria);
    }

    editarCategoria(subCategoria: EditarSubCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(`${this.apiUrl}${this.urlEditarSubCategoria}`, subCategoria);
    }

    eliminarCategoria(subCategoria: EliminarSubCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.delete<ApiResponse<unknown>>(`${this.apiUrl}${this.urlEliminarSubCategoria}`, { body: subCategoria });
    }

}