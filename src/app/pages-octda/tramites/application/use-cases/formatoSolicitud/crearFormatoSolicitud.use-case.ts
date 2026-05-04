import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";
import { CrearFormatoSolicitud } from "@/pages-octda/tramites/domain/entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class CrearFormatoSolicitudUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(formatoSolicitud: CrearFormatoSolicitud) {
        return this.repository.crearFormatoSolicitud(formatoSolicitud);
    }
}