import { inject, Injectable } from "@angular/core";
import { RutasRepository } from "../../ports/rutas.repository";
import { EditarRuta } from "@/pages-octda/categoria/domain/entity/rutas.entity";

@Injectable({
    providedIn: 'root'
})

export class EditarRutaUseCase {
    private readonly repository = inject(RutasRepository)

    execute(editar: EditarRuta) {
         return this.repository.editarRutas(editar)
    }
}