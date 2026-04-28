import { inject, Injectable } from "@angular/core";
import { CategoriaRepository } from "../../ports/categoria.repository";
import { EditarCategoria } from "../../../domain/entity/categoria.model";

@Injectable({
    providedIn: 'root'
})

export class EditarCategoriaUseCase {
    private readonly repository = inject(CategoriaRepository);

    execute(categoria: EditarCategoria) {
        return this.repository.editarCategoria(categoria);
    }
}