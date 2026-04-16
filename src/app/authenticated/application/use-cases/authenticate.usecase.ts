import { inject, Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { AuthenticatedRepository } from '../ports/rolesAsignados.repository';
import {
  AuthenticatedApiResponse,
  AuthenticatedCredentials,
  AuthenticatedLoginResult,
} from '@/authenticated/domain/entities/rolesAsignados.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserUseCase {
  private readonly repository = inject(AuthenticatedRepository);

  execute(credentials: AuthenticatedCredentials): Observable<AuthenticatedApiResponse<AuthenticatedLoginResult>> {
    const sanitizedCredentials: AuthenticatedCredentials = {
      userName: credentials.userName.trim(),
      password: credentials.password.trim(),
      role: credentials.role.trim(),
    };

    if (!sanitizedCredentials.userName || !sanitizedCredentials.password || !sanitizedCredentials.role) {
      return throwError(() => new Error('Completa usuario, contraseña y rol para continuar.'));
    }

    return this.repository.autenticar(sanitizedCredentials).pipe(
      map((response) => {
        if (!response.isSuccess || !response.data.token) {
          throw new Error(response.message || 'No fue posible autenticar al usuario.');
        }

        return response;
      })
    );
  }
}