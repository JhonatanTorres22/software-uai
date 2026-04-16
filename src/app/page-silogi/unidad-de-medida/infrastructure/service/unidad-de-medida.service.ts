import { ApiResponse } from "@/shared/models/api-response.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ListarUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";
import { CrearUnidadDeMedidaDTO, EditarUnidadDeMedidaDTO, EliminarUnidadDeMedidaDTO, ListarUnidadDeMedidaDTO } from "../../../unidad-de-medida/infrastructure/dto/unidad-de-medida.dto";

@Injectable({
    providedIn: 'root'
})

export class UnidadDeMedidaService {
   private http = inject(HttpClient)
   private urlApi : string = environment.EndPoint
   private urlListarUnidadDeMedida : string = '/api/UnidadMedida/Listar'
   private urlAgregarUnidadDeMedida : string = '/api/UnidadMedida/Insertar'
   private urlEditarUnidadDeMedida : string = '/api/UnidadMedida/Actualizar'
   private urlEliminarUnidadDeMedida : string = '/api/UnidadMedida/Eliminar'

   obtenerUnidadDeMedida():Observable<ApiResponse<ListarUnidadDeMedidaDTO[]>>{
    return this.http.get<ApiResponse<ListarUnidadDeMedidaDTO[]>>(`${this.urlApi}${this.urlListarUnidadDeMedida}`)
   }

   crearUnidadDeMedida(unidadDeMedida: CrearUnidadDeMedidaDTO): Observable<ApiResponse<unknown>> {
    return this.http.post<ApiResponse<unknown>>(`${this.urlApi}${this.urlAgregarUnidadDeMedida}`, unidadDeMedida)
   }

   editarUnidadDeMedida(unidadDeMedida: EditarUnidadDeMedidaDTO): Observable<ApiResponse<unknown>> {
    return this.http.put<ApiResponse<unknown>>(`${this.urlApi}${this.urlEditarUnidadDeMedida}`, unidadDeMedida)
   }

   eliminarUnidadDeMedida(unidadDeMedida: EliminarUnidadDeMedidaDTO): Observable<ApiResponse<unknown>> {
    return this.http.request<ApiResponse<unknown>>('delete', `${this.urlApi}${this.urlEliminarUnidadDeMedida}`, { body: unidadDeMedida })
   }
}