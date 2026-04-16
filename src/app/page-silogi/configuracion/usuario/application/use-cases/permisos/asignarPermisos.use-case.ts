import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@/shared/models/api-response.model';
import { Observable } from 'rxjs';
import { PermisoRepository } from '../../ports/permiso.repository';
import { AsignarPermisos } from '../../../domain/entities/permiso.entity';

@Injectable({
  providedIn: 'root'
})
export class AsignarPermisosUseCase {
  private readonly repository = inject(PermisoRepository);

  execute(asignar: AsignarPermisos[]): Observable<ApiResponse<unknown>> {
    return this.repository.asignarPermisos(asignar);
  }
}
