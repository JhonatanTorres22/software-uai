import { Injectable, signal } from "@angular/core";
import { ListarMarca } from "../entity/marca.entity";

@Injectable({
    providedIn:'root'
})

export class MarcaSignal {
    listMarca = signal<ListarMarca[]>([])

    selectMarcaDefault : ListarMarca = {
        idMarca: 0,
        nombreMarca: "",
        descripcionMarca: ""
    }

    selectMarca = signal<ListarMarca>(this.selectMarcaDefault)
    loading = signal<boolean>(false)
}