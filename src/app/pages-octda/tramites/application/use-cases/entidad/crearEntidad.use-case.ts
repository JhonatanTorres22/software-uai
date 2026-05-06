import { inject, Injectable } from "@angular/core";
import { EntidadRepository } from "../../ports/entidad.repository";
import { CrearEntidad } from "@/pages-octda/tramites/domain/entity/entidad.entity";

@Injectable({
    providedIn: 'root'
})

export class CrearEntidadUseCase {
    private readonly repository = inject(EntidadRepository);

    execute(entidad: CrearEntidad){
        return this.repository.crearEntidad(entidad);
    }
}