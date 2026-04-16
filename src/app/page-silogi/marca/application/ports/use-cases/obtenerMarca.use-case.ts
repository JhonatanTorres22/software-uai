import { inject, Injectable } from "@angular/core";
import { MarcaRepository } from "../repository/marca.repository";
import { EliminarMarca } from "@/page-silogi/marca/domain/entity/marca.entity";

@Injectable({
    providedIn:'root'
})

export class ObtenerMarcaUseCase {
    private readonly marcaRepository = inject(MarcaRepository)

    execute() {
        return this.marcaRepository.obtenerMarcas()
    }
}