import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";
import { ActualizarEstadoTramite } from "@/pages-octda/tramites/domain/entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class ActualizarEstadoTramiteUseCase {
    private readonly repository = inject(TramiteRepository)

    execute(tramite: ActualizarEstadoTramite) {
       return this.repository.actualizarEstadoTramite(tramite)
    }
}