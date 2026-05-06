import { inject, Injectable } from "@angular/core";
import { PagoTramiteRepository } from "../../ports/pagoTramite.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerPagosTramiteUseCase {
    private readonly repository = inject(PagoTramiteRepository);

    execute() {
        return this.repository.obtenerPagosTramite();
    }
}