import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticatedRepository } from '../ports/rolesAsignados.repository';
import {
  AuthenticatedMenuAccess,
  AuthenticatedModuleRoute,
} from '@/authenticated/domain/entities/rolesAsignados.entity';

@Injectable({
  providedIn: 'root'
})
export class GetAuthorizedMenuUseCase {
  private readonly repository = inject(AuthenticatedRepository);

  execute(moduleRoute: AuthenticatedModuleRoute): Observable<AuthenticatedMenuAccess> {
    return this.repository.listarMenu(moduleRoute);
  }
}