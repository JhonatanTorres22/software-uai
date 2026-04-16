import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { CrearUsuario } from "../../../domain/entities/usuario.entity";
import { UsuarioRepository } from "../../ports/usuario.repository";


@Injectable({
	providedIn: 'root'
})
export class CrearUsuarioUseCase {
	private readonly repository = inject(UsuarioRepository);

	execute(usuario: CrearUsuario): Observable<ApiResponse<unknown>> {
		return this.repository.crearUsuario(usuario);
	}
}
