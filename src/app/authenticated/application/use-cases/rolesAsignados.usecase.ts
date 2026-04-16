import { inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { AuthenticatedApiResponse, AuthenticatedEntity } from "@/authenticated/domain/entities/rolesAsignados.entity";
import { AuthenticatedRepository } from "../ports/rolesAsignados.repository";

@Injectable({
  providedIn: 'root'
})
export class GetRolesAsignadosUseCase {
  private readonly repository = inject(AuthenticatedRepository);

  execute(nombreUsuario: string): Observable<AuthenticatedApiResponse<AuthenticatedEntity>> {
    if (!nombreUsuario?.trim()) {
      return throwError(() => new Error("Usuario requerido"));
    }

    return this.repository.listarRoles(nombreUsuario.trim());
  }
}