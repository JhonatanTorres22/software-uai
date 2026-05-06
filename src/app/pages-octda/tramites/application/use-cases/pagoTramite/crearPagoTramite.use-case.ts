import { inject, Injectable } from "@angular/core";
import { PagoTramiteRepository } from "../../ports/pagoTramite.repository";
import { CrearPagoTramite } from "@/pages-octda/tramites/domain/entity/pagoTramite.entity";

@Injectable({
    providedIn: 'root'
})

export class CrearPagoTramiteUseCase {
    private readonly repository = inject(PagoTramiteRepository);

    execute(crearPagoTramite: CrearPagoTramite) {
        return this.repository.crearPagoTramite(crearPagoTramite);
    }
}