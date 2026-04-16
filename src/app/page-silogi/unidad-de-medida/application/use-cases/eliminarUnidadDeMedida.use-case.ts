import { inject, Injectable } from "@angular/core";
import { CrearUnidadDeMedida, EliminarUnidadDeMedida } from "../../domain/entity/unidad-de-medida.entity";
import { UnidadDeMedidaRepository } from "../ports/unidad-de-medida.repository";

@Injectable({
    providedIn: 'root'
})

export class EliminarUnidadDeMedidaUseCase {
    private readonly repository = inject(UnidadDeMedidaRepository);

    execute(unidadDeMedida: EliminarUnidadDeMedida) {
        return this.repository.eliminarUnidadDeMedida(unidadDeMedida);
    }
}