import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";
import { EditarTramite } from "@/pages-octda/tramites/domain/entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class EditarTramiteUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(tramite: EditarTramite) {
        return this.repository.actualizarTramite(tramite);
    }
}