import { ApiResponse } from "@/shared/models/api-response.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CrearCategoriaDTO, EditarCategoriaDTO, EliminarCategoriaDTO, ListarCategoriaDTO } from "../dto/categoria.dto";
import { CrearCategoria, EditarCategoria, EliminarCategoria, ListarCategoria } from "../../domain/entities/categoria.entity";

@Injectable({
    providedIn: 'root'
})

export class CategoriaService {
    private http = inject(HttpClient);

    private apiUrl : string = environment.EndPoint
    private urlObtenerCategoria : string = '/api/Categoria/Listar';
    private urlCrearCategoria : string = '/api/Categoria/Insertar'
    private urlEditarCategoria : string = '/api/Categoria/Actualizar'
    private urlEliminarCategoria : string = '/api/Categoria/Eliminar'


    obtenerCategoria():Observable<ApiResponse<ListarCategoriaDTO[]>>{
        return this.http.get<ApiResponse<ListarCategoriaDTO[]>>(`${this.apiUrl}${this.urlObtenerCategoria}`);
    }

    crearCategoria(categoria: CrearCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.post<ApiResponse<unknown>>(`${this.apiUrl}${this.urlCrearCategoria}`, categoria);
    }

    editarCategoria(categoria: EditarCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.put<ApiResponse<unknown>>(`${this.apiUrl}${this.urlEditarCategoria}`, categoria);
    }

    eliminarCategoria(categoria: EliminarCategoriaDTO): Observable<ApiResponse<unknown>> {
        return this.http.request<ApiResponse<unknown>>('delete', `${this.apiUrl}${this.urlEliminarCategoria}`, { body: categoria });
    }
}