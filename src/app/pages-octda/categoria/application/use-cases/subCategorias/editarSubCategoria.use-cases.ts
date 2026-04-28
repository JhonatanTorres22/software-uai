import { inject, Injectable } from "@angular/core";
import { SubCategoriaRepository } from "../../ports/subCategoria.repository";
import { EditarSubCategoria } from "@/pages-octda/categoria/domain/entity/subCategoria.entity";

@Injectable({
    providedIn: 'root'
})

export class EditarSubCategoriaUseCase {
    private readonly repository = inject(SubCategoriaRepository);

    execute(subCategoria: EditarSubCategoria) {
        return this.repository.editarSubCategoria(subCategoria);
    }
}