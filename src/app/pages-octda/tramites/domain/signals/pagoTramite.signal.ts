import { Injectable, signal } from "@angular/core";
import { ListarPagoTramite } from "../entity/pagoTramite.entity";

@Injectable({
    providedIn: 'root'
})

export class PagoTramiteSignal{
    listPagoTramite = signal<ListarPagoTramite[]>([])
    selectPagoTramiteDefault : ListarPagoTramite = {
        idPagoTramite: 0,
        idTramite: 0,
        constanciaPago: "",
        fechaPago: "",
        horaPago: "",
        minutoPago: "",
        fechaCreacion: ""
    }

    selectPagoTramite = signal<ListarPagoTramite>(this.selectPagoTramiteDefault);
    loading = signal<boolean>(true);
}