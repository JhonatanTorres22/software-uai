import { Injectable, signal } from "@angular/core";
import { EstadoTramite, ListarTramite } from "../entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class TramiteSignal {
    listTramite = signal<ListarTramite[]>([]);

    selectTramiteDefault : ListarTramite = {
        id: 0,
        codigo: "",
        solicitante: "",
        rol: "alumno",
        tipo: "",
        fechaTramite: "",
        plazo: "",
        areaDestino: "",
        prioridad: "alta",
        estado: "ingresado"
    }

    selectTramite = signal<ListarTramite>(this.selectTramiteDefault);
    loading = signal<boolean>(true);
    selectedEstado = signal<EstadoTramite | null>(null);
}