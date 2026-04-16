import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AuthenticatedRepository } from "@/authenticated/application/ports/rolesAsignados.repository";
import {
  AuthenticatedApiResponse,
  AuthenticatedCredentials,
  AuthenticatedEntity,
  AuthenticatedLoginResult,
  AuthenticatedMenuAccess,
  AuthenticatedModuleRoute,
} from "@/authenticated/domain/entities/rolesAsignados.entity";
import { AuthenticatedMapper } from "../mappers/rolesAsignados.mapper";
import { AuthenticatedService } from "../services/rolesAsignados.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedRepositoryImpl implements AuthenticatedRepository {
  private readonly service = inject(AuthenticatedService);

  listarRoles(nombreUsuario: string): Observable<AuthenticatedApiResponse<AuthenticatedEntity>> {
    return this.service.obtenerRolesAsignados(nombreUsuario).pipe(
      map((response) => ({
        ...response,
        data: AuthenticatedMapper.toDomain(response.data),
      }))
    );
  }

  autenticar(credentials: AuthenticatedCredentials): Observable<AuthenticatedApiResponse<AuthenticatedLoginResult>> {
    return this.service.autenticar(credentials).pipe(
      map((response) => ({
        ...response,
        data: {
          token: response.data.token,
        },
      }))
    );
  }

  listarMenu(moduleRoute: AuthenticatedModuleRoute): Observable<AuthenticatedMenuAccess> {
    return this.service.obtenerMenu().pipe(
      map((response) => AuthenticatedMapper.toMenuAccess(response.data, moduleRoute))
    );
  }
}