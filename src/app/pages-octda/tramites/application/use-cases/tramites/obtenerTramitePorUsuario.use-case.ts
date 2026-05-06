import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerTramitesPorUsuarioUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(){
        return this.repository.obtenerTramitesPorUsuario();
    }
}