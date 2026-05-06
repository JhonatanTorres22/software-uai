import { inject, Injectable } from "@angular/core";
import { EntidadRepository } from "../../ports/entidad.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerEntidadesUseCase {
    private readonly repository = inject(EntidadRepository);

    execute(){
        return this.repository.obtenerEntidades();
    }
}