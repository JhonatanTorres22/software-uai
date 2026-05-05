import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";
import { EliminarFormatoSolicitud } from "@/pages-octda/tramites/domain/entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class EliminarFormatoSolicitudUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(eliminar: EliminarFormatoSolicitud) {
        return this.repository.eliminarFormatoSolicitud(eliminar);
    }
}