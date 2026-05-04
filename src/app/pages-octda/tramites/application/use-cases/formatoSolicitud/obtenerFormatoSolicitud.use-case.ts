import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerFormatoSolicitudUseCase {
    private readonly repository = inject(TramiteRepository);

    execute() {
        return this.repository.obtenerFormatoSolicitud();
    }
}