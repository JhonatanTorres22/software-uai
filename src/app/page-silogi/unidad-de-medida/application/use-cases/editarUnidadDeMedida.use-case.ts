import { inject, Injectable } from "@angular/core";
import { CrearUnidadDeMedida, EditarUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";
import { UnidadDeMedidaRepository } from "../ports/unidad-de-medida.repository";

@Injectable({
    providedIn: 'root'
})

export class EditarUnidadDeMedidaUseCase {
    private readonly repository = inject(UnidadDeMedidaRepository);

    execute(unidadDeMedida: EditarUnidadDeMedida) {
        return this.repository.editarUnidadDeMedida(unidadDeMedida);
    }
}