import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  AuthenticatedApiResponse,
  AuthenticatedCredentials,
} from "@/authenticated/domain/entities/rolesAsignados.entity";
import {
  AuthenticatedDto,
  AuthenticatedLoginRequestDto,
  AuthenticatedLoginResponseDto,
  AuthenticatedMenuPayloadDto,
} from "../dto/rolesAsignados.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.EndPoint;
  private readonly urlListarRoles = `/api/usuario/ListarRoles?nombreUsuario=`;
  private readonly urlAutenticar = `/api/usuario/Autenticar`;
  private readonly urlListarMenu = `/api/usuario/ListarMenu`;

  obtenerRolesAsignados(userName: string, correo: string): Observable<AuthenticatedApiResponse<AuthenticatedDto | AuthenticatedDto[]>> {
        return this.http.get<AuthenticatedApiResponse<AuthenticatedDto | AuthenticatedDto[]>>(
          `${this.apiUrl}${this.urlListarRoles}${userName}&correo=${correo}`,
    );
  }

  autenticar(credentials: AuthenticatedCredentials): Observable<AuthenticatedApiResponse<AuthenticatedLoginResponseDto>> {
    const payload: AuthenticatedLoginRequestDto = {
      nombreUsuario: credentials.userName,
      contrasenia: credentials.password,
      rol: credentials.role,
    };

    return this.http.post<AuthenticatedApiResponse<AuthenticatedLoginResponseDto>>(
      `${this.apiUrl}${this.urlAutenticar}`,
      payload
    );
  }

  obtenerMenu(): Observable<AuthenticatedApiResponse<AuthenticatedMenuPayloadDto>> {
    return this.http.get<AuthenticatedApiResponse<AuthenticatedMenuPayloadDto>>(
      `${this.apiUrl}${this.urlListarMenu}`
    );
  }
}