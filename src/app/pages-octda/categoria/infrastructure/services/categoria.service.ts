import { ApiResponse } from "@/shared/models/api-response.model";
import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CrearCategoria, ListarCategoria } from "../../domain/entity/categoria.model";
import { CrearCategoriaDTO, EditarCategoriaDTO, EliminarCategoriaDTO, ListarCategoriaDTO } from "../dto/categoria.dto";

@Injectable({
    providedIn: 'root'
})

export class CategoriaService {
    private http = inject(HttpClient);

    private apiUrl: string = environment.EndPoint
    private urlObtenerCategoria: string = '/api/CategoriaTramite/Listar';
    private urlCrearCategoria: string = '/api/CategoriaTramite/Insertar'
    private urlEditarCategoria: string = '/api/CategoriaTramite/Actualizar'
    private urlEliminarCategoria: string = '/api/CategoriaTramite/Eliminar'

    obtenerCategoria(): Observable<ApiResponse<ListarCategoriaDTO[]>> {
        return this.http.get<ApiResponse<ListarCategoriaDTO[]>>(`${this.apiUrl}${this.urlObtenerCategoria}`);
    }

    crearCategoria(categoria: CrearCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(`${this.apiUrl}${this.urlCrearCategoria}`, categoria);
    }

    editarCategoria(categoria: EditarCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(`${this.apiUrl}${this.urlEditarCategoria}`, categoria);
    }

    eliminarCategoria(categoria: EliminarCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.delete<ApiResponse<unknown>>(`${this.apiUrl}${this.urlEliminarCategoria}`, { body: categoria });
    }

}