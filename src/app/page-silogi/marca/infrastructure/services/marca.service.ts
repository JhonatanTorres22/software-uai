import { ApiResponse } from "@/shared/models/api-response.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EditarMarca, EliminarMarca, ListarMarca } from "../../domain/entity/marca.entity";
import { CrearMarcaDTO, EditarMarcaDTO, EliminarMarcaDTO, ListarMarcaDTO } from "../dto/marca.dto";

@Injectable({
    providedIn:'root'
})

export class MarcaService {
    private readonly http = inject(HttpClient)
    private urlApi : string = environment.EndPoint
    private urlListarMarca : string = '/api/Marca/Listar'
    private urlCrearMarca : string = '/api/Marca/Insertar'
    private urlEditarMarca : string = '/api/Marca/Actualizar'
    private urlEliminarMarca : string = '/api/Marca/Eliminar'

    obtenerMarcas() : Observable<ApiResponse<ListarMarcaDTO[]>> {
        return this.http.get<ApiResponse<ListarMarcaDTO[]>>(`${this.urlApi}${this.urlListarMarca}`)
    }

    crearMarca(marca:CrearMarcaDTO) : Observable<ApiResponse<ListarMarca>> {
        return this.http.post<ApiResponse<ListarMarca>>(`${this.urlApi}${this.urlCrearMarca}`, marca)
    }

    editarMarca(marca:EditarMarcaDTO) : Observable<ApiResponse<ListarMarca>> {
        return this.http.put<ApiResponse<ListarMarca>>(`${this.urlApi}${this.urlEditarMarca}`, marca)
    }

    eliminarMarca(marca:EliminarMarcaDTO) : Observable<ApiResponse<null>> {
        return this.http.request<ApiResponse<null>>('delete', `${this.urlApi}${this.urlEliminarMarca}`, { body: marca })
    }

}