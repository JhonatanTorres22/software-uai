import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerFormatoSolicitudPorTramiteUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(idTramite:number) {
        return this.repository.obtenerFormatoSolicitudPorTramite(idTramite);
    }
}