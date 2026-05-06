import { inject, Injectable } from "@angular/core";
import { PagoTramiteRepository } from "../../ports/pagoTramite.repository";
import { EditarPagoTramite } from "@/pages-octda/tramites/domain/entity/pagoTramite.entity";

@Injectable({
    providedIn: 'root'
})

export class EditarPagoTramiteUseCase {
    private readonly repository = inject(PagoTramiteRepository);

    execute(editarPagoTramite: EditarPagoTramite) {
        return this.repository.actualizarPagoTramite(editarPagoTramite);
    }
}