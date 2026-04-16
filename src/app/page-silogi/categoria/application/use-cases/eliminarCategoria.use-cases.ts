import { inject, Injectable } from "@angular/core";
import { CategoriaRepository } from "../ports/categoria.repository";
import { CrearCategoria, EliminarCategoria } from "../../domain/entities/categoria.entity";

@Injectable({
    providedIn: 'root'
})

export class EliminarCategoriaUseCase {
    private readonly repository = inject(CategoriaRepository);

    execute(categoria: EliminarCategoria) {
        return this.repository.eliminarCategoria(categoria);
    }
}