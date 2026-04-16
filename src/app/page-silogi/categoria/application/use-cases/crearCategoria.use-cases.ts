import { inject, Injectable } from "@angular/core";
import { CategoriaRepository } from "../ports/categoria.repository";
import { CrearCategoria } from "../../domain/entities/categoria.entity";

@Injectable({
    providedIn: 'root'
})

export class CrearCategoriaUseCase {
    private readonly repository = inject(CategoriaRepository);

    execute(categoria: CrearCategoria) {
        return this.repository.crearCategoria(categoria);
    }
}