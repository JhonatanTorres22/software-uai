import { Injectable, signal } from "@angular/core";
import { ListarSubCategoria } from "../entity/subCategoria.entity";

@Injectable({
    providedIn: 'root'
})

export class SubCategoriaSignal {
    listSubCategoria = signal<ListarSubCategoria[]>([]);
    selectSubCategoriaDefault : ListarSubCategoria = {
        idSubCategoriaTramite: 0,
        idCategoriaTramite: 0,
        nombre: "",
        descripcion: ""
    }

    selectSubCategoria = signal<ListarSubCategoria>(this.selectSubCategoriaDefault);
    loading = signal<boolean>(false);
}