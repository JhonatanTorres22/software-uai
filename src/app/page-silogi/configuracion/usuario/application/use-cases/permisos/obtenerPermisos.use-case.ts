import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@/shared/models/api-response.model';
import { Observable } from 'rxjs';
import { PermisoRepository } from '../../ports/permiso.repository';
import { ModuloPermiso } from '../../../domain/entities/permiso.entity';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPermisosUseCase {
  private readonly repository = inject(PermisoRepository);

  execute(): Observable<ApiResponse<ModuloPermiso[]>> {
    return this.repository.obtenerPermisos();
  }
}