import { CrearTramite } from "@/pages-octda/tramites/domain/entity/tramite.entity";
import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";

@Injectable({
    providedIn: 'root'
})

export class CrearTramiteConRetornoUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(tramite: CrearTramite) {
        return this.repository.crearTramiteConRetorno(tramite);
    }
}
