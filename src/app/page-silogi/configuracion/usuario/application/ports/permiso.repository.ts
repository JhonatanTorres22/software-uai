import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { AsignarPermisos, EliminarPermisos, ModuloPermiso } from "../../domain/entities/permiso.entity";

export abstract class PermisoRepository {
   abstract obtenerPermisos() : Observable<ApiResponse<ModuloPermiso[]>>
   abstract asignarPermisos(asignar: AsignarPermisos[]) : Observable<ApiResponse<unknown>>
   abstract eliminarPermisos(eliminar: EliminarPermisos[]) : Observable<ApiResponse<unknown>>
   abstract permisoxUsuario(id:number) : Observable<ApiResponse<ModuloPermiso[]>>
}