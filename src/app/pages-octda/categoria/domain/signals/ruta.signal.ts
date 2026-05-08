import { Injectable, signal } from "@angular/core";
import { ListarRutas } from "../entity/rutas.entity";

@Injectable({
    providedIn: 'root'
})

export class RutaSignal {
    listRutas = signal<ListarRutas[]>([]);
    selectRutaDefault : ListarRutas = {
        idRuta: 0,
        idEmisor: 0,
        idReceptor: 0,
        duracion: 0,
        orden: 0,
        fechaCreacion: ""
    }

    selectRuta = signal<ListarRutas>(this.selectRutaDefault);
    loading = signal<boolean>(true);
}