import { inject, Injectable } from "@angular/core";
import { MarcaRepository } from "../repository/marca.repository";
import { CrearMarca, EliminarMarca } from "@/page-silogi/marca/domain/entity/marca.entity";

@Injectable({
    providedIn:'root'
})

export class CrearMarcaUseCase {
    private readonly marcaRepository = inject(MarcaRepository)

    execute(crear : CrearMarca) {
        return this.marcaRepository.crearMarca(crear)
    }
}