import { Injectable, signal } from "@angular/core";
import { ListarUnidadDeMedida } from "../entity/unidad-de-medida.entity";

@Injectable({
    providedIn: 'root'
})
export class UnidadDeMedidaSignal {
    listUnidadDeMedida = signal<ListarUnidadDeMedida[]>([]);
    selectUnidadDeMedidaDefault : ListarUnidadDeMedida = {
        idUnidadDeMedida: 0,
        nombre: "",
        descripcion: ""
    }
    loading = signal<boolean>(false)
    selectUnidadDeMedida = signal<ListarUnidadDeMedida>(this.selectUnidadDeMedidaDefault);
}