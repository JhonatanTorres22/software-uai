import { inject, Injectable } from "@angular/core";
import { PagoTramiteRepository } from "../../ports/pagoTramite.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerPagosPorTramiteUseCase {
    private readonly repository = inject(PagoTramiteRepository);

    execute(idTramite: number) {
        return this.repository.obtenerPagosPorTramite(idTramite);
    }
}