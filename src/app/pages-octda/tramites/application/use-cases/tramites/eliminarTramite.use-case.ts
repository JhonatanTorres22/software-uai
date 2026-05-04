import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";
import { EliminarTramite } from "@/pages-octda/tramites/domain/entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class EliminarTramiteUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(tramite: EliminarTramite) {
        return this.repository.eliminarTramite(tramite);
    }
}