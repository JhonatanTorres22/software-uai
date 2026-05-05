import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";
import { EditarFormatoSolicitud } from "@/pages-octda/tramites/domain/entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class EditarFormatoSolicitudUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(formato: EditarFormatoSolicitud) {
        return this.repository.actualizarFormatoSolicitud(formato);
    }
}