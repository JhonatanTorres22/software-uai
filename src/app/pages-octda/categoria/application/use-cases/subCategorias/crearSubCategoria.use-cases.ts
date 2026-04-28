import { inject, Injectable } from "@angular/core";
import { SubCategoriaRepository } from "../../ports/subCategoria.repository";
import { CrearSubCategoria } from "@/pages-octda/categoria/domain/entity/subCategoria.entity";

@Injectable({
    providedIn: 'root'
})

export class CrearSubCategoriaUseCase {

    private readonly repository = inject(SubCategoriaRepository);

    execute(subCategoria: CrearSubCategoria) {
        return this.repository.crearSubCategoria(subCategoria);
    }
}