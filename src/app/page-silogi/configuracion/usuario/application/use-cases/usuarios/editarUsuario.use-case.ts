import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { ActualizarUsuario } from "../../../domain/entities/usuario.entity";
import { UsuarioRepository } from "../../ports/usuario.repository";


@Injectable({
	providedIn: 'root'
})
export class EditarUsuarioUseCase {
	private readonly repository = inject(UsuarioRepository);

	execute(usuario: ActualizarUsuario): Observable<ApiResponse<unknown>> {
		return this.repository.editarUsuario(usuario);
	}
}
