import { inject, Injectable } from "@angular/core";
import { EntidadRepository } from "../../ports/entidad.repository";
import { EditarEntidad } from "@/pages-octda/tramites/domain/entity/entidad.entity";

@Injectable({
    providedIn: 'root'
})

export class EditarEntidadUseCase {
    private readonly repository = inject(EntidadRepository);

    execute(entidad: EditarEntidad){
        return this.repository.editarEntidad(entidad);
    }
}