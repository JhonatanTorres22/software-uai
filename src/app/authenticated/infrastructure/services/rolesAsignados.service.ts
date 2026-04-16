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

  obtenerRolesAsignados(userName: string): Observable<AuthenticatedApiResponse<AuthenticatedDto | AuthenticatedDto[]>> {
    return this.http.get<AuthenticatedApiResponse<AuthenticatedDto | AuthenticatedDto[]>>(
      `${this.apiUrl}/api/usuario/ListarRoles`,
      {
        params: { nombreUsuario: userName }
      }
    );
  }

  autenticar(credentials: AuthenticatedCredentials): Observable<AuthenticatedApiResponse<AuthenticatedLoginResponseDto>> {
    const payload: AuthenticatedLoginRequestDto = {
      nombreUsuario: credentials.userName,
      contrasenia: credentials.password,
      rol: credentials.role,
    };

    return this.http.post<AuthenticatedApiResponse<AuthenticatedLoginResponseDto>>(
      `${this.apiUrl}/api/usuario/Autenticar`,
      payload
    );
  }

  obtenerMenu(): Observable<AuthenticatedApiResponse<AuthenticatedMenuPayloadDto>> {
    return this.http.get<AuthenticatedApiResponse<AuthenticatedMenuPayloadDto>>(
      `${this.apiUrl}/api/usuario/ListarMenu`
    );
  }
}