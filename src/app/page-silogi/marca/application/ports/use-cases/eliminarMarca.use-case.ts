import { inject, Injectable } from "@angular/core";
import { MarcaRepository } from "../repository/marca.repository";
import { EliminarMarca } from "@/page-silogi/marca/domain/entity/marca.entity";

@Injectable({
    providedIn:'root'
})

export class EliminarMarcaUseCase {
    private readonly marcaRepository = inject(MarcaRepository)

    execute(eliminar : EliminarMarca) {
        return this.marcaRepository.eliminarMarca(eliminar)
    }
}