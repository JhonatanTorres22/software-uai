import { inject, Injectable } from "@angular/core";
import { MarcaRepository } from "../repository/marca.repository";
import { EditarMarca, EliminarMarca } from "@/page-silogi/marca/domain/entity/marca.entity";

@Injectable({
    providedIn:'root'
})

export class EditarMarcaUseCase {
    private readonly marcaRepository = inject(MarcaRepository)

    execute(editar : EditarMarca) {
        return this.marcaRepository.editarMarca(editar)
    }
}