import { inject, Injectable } from "@angular/core";
import { TramiteRepository } from "../../ports/tramite.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerTramitesPorSubCategoriaUseCase {
    private readonly repository = inject(TramiteRepository);

    execute(codigoSubCategoriaTramite: number) {
        return this.repository.obtenerTramitesPorSubCategoria(codigoSubCategoriaTramite);
    }
}
