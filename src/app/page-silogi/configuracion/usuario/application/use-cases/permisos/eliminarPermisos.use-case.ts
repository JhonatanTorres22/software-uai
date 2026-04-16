import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@/shared/models/api-response.model';
import { Observable } from 'rxjs';
import { PermisoRepository } from '../../ports/permiso.repository';
import { EliminarPermisos } from '../../../domain/entities/permiso.entity';

@Injectable({
  providedIn: 'root'
})
export class EliminarPermisosUseCase {
  private readonly repository = inject(PermisoRepository);

  execute(eliminar: EliminarPermisos[]): Observable<ApiResponse<unknown>> {
    return this.repository.eliminarPermisos(eliminar);
  }
}
