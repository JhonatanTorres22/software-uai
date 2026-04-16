import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@/shared/models/api-response.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AsignarPermisosDTO, EliminarPermisosDTO, ModuloPermisoDTO } from '../dto/permiso.dto';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  private readonly http = inject(HttpClient);
  private readonly urlApi = environment.EndPoint;
  private readonly urlObtenerPermisos = '/api/Permiso/Listar';
  private readonly urlAsignarPermisos = '/api/UsuarioPermiso/Insertar';
  private readonly urlEliminarPermisos = '/api/UsuarioPermiso/Eliminar';
  private readonly urlPermisoPorUsuario = '/api/Permiso/ListarPorUsuario/';

  obtenerPermisos(): Observable<ApiResponse<ModuloPermisoDTO[]>> {
    return this.http.get<ApiResponse<ModuloPermisoDTO[]>>(`${this.urlApi}${this.urlObtenerPermisos}`);
  }

  asignarPermisos(asignar: AsignarPermisosDTO[]): Observable<ApiResponse<unknown>> {
    return this.http.post<ApiResponse<unknown>>(`${this.urlApi}${this.urlAsignarPermisos}`, asignar);
  }

  eliminarPermisos(eliminar: EliminarPermisosDTO[]): Observable<ApiResponse<unknown>> {
    return this.http.request<ApiResponse<unknown>>('delete', `${this.urlApi}${this.urlEliminarPermisos}`, {
      body: eliminar,
    });
  }

  permisoxUsuario(idUsuario: number): Observable<ApiResponse<ModuloPermisoDTO[]>> {
    return this.http.get<ApiResponse<ModuloPermisoDTO[]>>(`${this.urlApi}${this.urlPermisoPorUsuario}${idUsuario}`);
  }
}
