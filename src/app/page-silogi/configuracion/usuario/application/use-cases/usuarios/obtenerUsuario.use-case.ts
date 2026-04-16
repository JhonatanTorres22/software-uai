import { inject, Injectable } from "@angular/core";
import { ApiResponse } from "@/shared/models/api-response.model";
import { Observable } from "rxjs";
import { ListarUsuario } from "../../../domain/entities/usuario.entity";
import { UsuarioRepository } from "../../ports/usuario.repository";


@Injectable({
    providedIn: 'root'
})

export class ObtenerUsuarioUseCase {
    private readonly repository = inject(UsuarioRepository);

    execute() : Observable<ApiResponse<ListarUsuario[]>> {
        return this.repository.obtenerUsuarios();
    }
}