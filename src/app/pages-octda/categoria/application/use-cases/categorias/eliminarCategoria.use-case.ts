import { inject, Injectable } from "@angular/core";
import { CategoriaRepository } from "../../ports/categoria.repository";
import { EliminarCategoria } from "../../../domain/entity/categoria.model";

@Injectable({
    providedIn: 'root'
})

export class EliminarCategoriaUseCase {
    private readonly repository = inject(CategoriaRepository);

    execute(categoria: EliminarCategoria) {
        return this.repository.eliminarCategoria(categoria);
    }
}