import { Injectable, signal } from "@angular/core";
import { ListarCategoria } from "../entities/categoria.entity";

@Injectable({
    providedIn: 'root'
})

export class CategoriaSignal {
    listCategoria = signal<ListarCategoria[]>([]);

    selectCategoriaDafaul : ListarCategoria = {
        idCategoria: 0,
        nombre: "",
        descripcion: ""
    }

    loading = signal<boolean>(false);
    selectCategoria = signal<ListarCategoria>(this.selectCategoriaDafaul);
}