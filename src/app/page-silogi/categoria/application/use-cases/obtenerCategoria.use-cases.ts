import { inject, Injectable } from "@angular/core";
import { CategoriaRepository } from "../ports/categoria.repository";

@Injectable({
    providedIn: 'root'
})

export class ObtenerCategoriaUseCase {
    private readonly repository = inject(CategoriaRepository);

    execute() {
        return this.repository.obtenerCategoria();
    }
}