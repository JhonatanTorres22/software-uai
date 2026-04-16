import { inject, Injectable } from "@angular/core";
import { UnidadDeMedidaRepository } from "../ports/unidad-de-medida.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerUnidadDeMedidaUseCase {
    private readonly repository = inject(UnidadDeMedidaRepository);

    execute()  {
        return this.repository.obtenerUnidadDeMedida();
    }
}