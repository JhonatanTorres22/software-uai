import { inject, Injectable } from "@angular/core";
import { RutasRepository } from "../../ports/rutas.repository";
import { CrearRuta } from "@/pages-octda/categoria/domain/entity/rutas.entity";

@Injectable({
    providedIn: 'root'
})

export class CrearRutaUseCase {
    private readonly repository = inject(RutasRepository)

    execute(crear : CrearRuta) {
         return this.repository.crearRutas(crear)
    }
}