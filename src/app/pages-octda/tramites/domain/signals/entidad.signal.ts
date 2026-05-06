import { Injectable, signal } from "@angular/core";
import { ListarEntidad } from "../entity/entidad.entity";

@Injectable({
    providedIn: 'root'
})

export class EntidadSignal {
    listEntidad = signal<ListarEntidad[]>([])
    selectEntidadDefault : ListarEntidad = {
        idEntidad: 0,
        idTramite: 0,
        ruc: "",
        razonSocial: "",
        direccion: "",
        fechaCreacion: ""
    }

    selectEntidad = signal<ListarEntidad>(this.selectEntidadDefault);
    loading = signal<boolean>(true);
}