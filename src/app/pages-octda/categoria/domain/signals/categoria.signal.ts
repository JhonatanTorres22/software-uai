import { Injectable, signal } from "@angular/core";
import { Categoria, Subcategoria } from "../categoria.model";

@Injectable({
    providedIn: 'root'
})

export class CategoriaSignal {
    selectCategoriaDefault : Categoria = {
        id: 0,
        nombre: "",
        subcategorias: [],
        descripcion: ""
    }

    selectSubCategoriaDefault : Subcategoria= {
        id: 0,
        nombre: "",
        descripcion: "",
        costo: 0,
        requiereDocumentos: false,
        documentos: [],
        areas: []
    }

    selectCategoria = signal<Categoria>(this.selectCategoriaDefault);
    selectSubCategoria = signal<Subcategoria>(this.selectSubCategoriaDefault);
    loading = signal<boolean>(false);
}