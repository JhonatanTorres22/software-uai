import { inject, Injectable } from "@angular/core";
import { EntidadRepository } from "../../ports/entidad.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerEntidadesPorTramiteUseCase {
    private readonly repository = inject(EntidadRepository);

    execute(codigoTramite: number){
        return this.repository.obtenerEntidadesPorTramite(codigoTramite);
    }
}