import { Observable } from "rxjs";
import {
  AuthenticatedApiResponse,
  AuthenticatedCredentials,
  AuthenticatedEntity,
  AuthenticatedLoginResult,
  AuthenticatedMenuAccess,
  AuthenticatedModuleRoute,
} from "@/authenticated/domain/entities/rolesAsignados.entity";

export abstract class AuthenticatedRepository {
  abstract listarRoles(nombreUsuario: string): Observable<AuthenticatedApiResponse<AuthenticatedEntity>>;
  abstract autenticar(credentials: AuthenticatedCredentials): Observable<AuthenticatedApiResponse<AuthenticatedLoginResult>>;
  abstract listarMenu(moduleRoute: AuthenticatedModuleRoute): Observable<AuthenticatedMenuAccess>;
}