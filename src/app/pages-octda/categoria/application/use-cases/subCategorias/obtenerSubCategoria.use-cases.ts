import { inject, Injectable } from "@angular/core";
import { SubCategoriaRepository } from "../../ports/subCategoria.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerSubCategoriaUseCase {
    private readonly repository = inject(SubCategoriaRepository);

    execute() {
        return this.repository.obtenerSubCategoria();
    }
}