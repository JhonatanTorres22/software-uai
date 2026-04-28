import { Injectable, signal } from "@angular/core";
import { ListarCategoria } from "../entity/categoria.model";

@Injectable({
    providedIn: 'root'
})

export class CategoriaSignal {
    selectCategoriaDefault : ListarCategoria = {
        idCategoriaTramite: 0,
        nombre: "",
        descripcion: ""
    }
    selectCategoria = signal<ListarCategoria>(this.selectCategoriaDefault);
    listCategoria = signal<ListarCategoria[]>([]);
    loading = signal<boolean>(false);
}