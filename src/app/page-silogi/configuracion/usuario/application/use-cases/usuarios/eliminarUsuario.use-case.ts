import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { EliminarUsuario } from "../../../domain/entities/usuario.entity";
import { UsuarioRepository } from "../../ports/usuario.repository";


@Injectable({
	providedIn: 'root'
})
export class EliminarUsuarioUseCase {
	private readonly repository = inject(UsuarioRepository);

	execute(eliminar: EliminarUsuario): Observable<ApiResponse<unknown>> {
		return this.repository.eliminarUsuario(eliminar);
	}
}
