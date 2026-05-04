import { inject, Injectable } from "@angular/core";
import { SubCategoriaRepository } from "../../ports/subCategoria.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerSubCategoriaPorCategoriaUseCase {
    private readonly repository = inject(SubCategoriaRepository);

    execute(id : number) {
        return this.repository.obtenerSubCategoriaPorCategoria(id);
    }
}