import { inject, Injectable } from "@angular/core";
import { CrearUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";
import { UnidadDeMedidaRepository } from "../ports/unidad-de-medida.repository";

@Injectable({
    providedIn: 'root'
})

export class CrearUnidadDeMedidaUseCase {
    private readonly repository = inject(UnidadDeMedidaRepository);

    execute(unidadDeMedida: CrearUnidadDeMedida) {
        return this.repository.crearUnidadDeMedida(unidadDeMedida);
    }
}