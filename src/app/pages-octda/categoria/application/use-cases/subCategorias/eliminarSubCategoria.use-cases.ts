import { inject, Injectable } from "@angular/core";
import { SubCategoriaRepository } from "../../ports/subCategoria.repository";
import { EditarSubCategoria, EliminarSubCategoria } from "@/pages-octda/categoria/domain/entity/subCategoria.entity";

@Injectable({
    providedIn: 'root'
})

export class EliminarSubCategoriaUseCase {
    private readonly repository = inject(SubCategoriaRepository);

    execute(subCategoria: EliminarSubCategoria) {
        return this.repository.eliminarSubCategoria(subCategoria);
    }
}