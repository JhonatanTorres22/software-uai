import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@/shared/models/api-response.model';
import { map, Observable } from 'rxjs';
import { PermisoRepository } from '../../application/ports/permiso.repository';
import { AsignarPermisos, EliminarPermisos, ModuloPermiso } from '../../domain/entities/permiso.entity';
import { PermisoMapper } from '../mappers/permiso.mapper';
import { PermisoService } from '../service/permiso.service';

@Injectable({
  providedIn: 'root'
})
export class PermisoRepositoryImpl extends PermisoRepository {
  private readonly service = inject(PermisoService);

  override obtenerPermisos(): Observable<ApiResponse<ModuloPermiso[]>> {
    return this.service.obtenerPermisos().pipe(
      map((response) => ({
        ...response,
        data: (response.data ?? []).map((modulo) => PermisoMapper.toDomainModuloPermiso(modulo)),
      }))
    );
  }

  override asignarPermisos(asignar: AsignarPermisos[]): Observable<ApiResponse<unknown>> {
    return this.service.asignarPermisos(
      asignar.map((item) => PermisoMapper.toApiAsignarPermisos(item))
    );
  }

  override eliminarPermisos(eliminar: EliminarPermisos[]): Observable<ApiResponse<unknown>> {
    return this.service.eliminarPermisos(
      eliminar.map((item) => PermisoMapper.toApiEliminarPermisos(item))
    );
  }

  override permisoxUsuario(id: number): Observable<ApiResponse<ModuloPermiso[]>> {
    return this.service.permisoxUsuario(id).pipe(
      map((response) => ({
        ...response,
        data: (response.data ?? []).map((modulo) => PermisoMapper.toDomainModuloPermiso(modulo)),
      }))
    );
  }
}
