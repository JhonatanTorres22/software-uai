import { inject, Injectable } from "@angular/core";
import { EntidadRepository } from "../../ports/entidad.repository";
import { CrearEntidad, EliminarEntidad } from "@/pages-octda/tramites/domain/entity/entidad.entity";

@Injectable({
    providedIn: 'root'
})

export class EliminarEntidadUseCase {
    private readonly repository = inject(EntidadRepository);

    execute(entidad: EliminarEntidad){
        return this.repository.eliminarEntidad(entidad);
    }
}