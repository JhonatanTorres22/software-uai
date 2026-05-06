import { Injectable, signal } from "@angular/core";
import { EstadoTramite, ListarTramite } from "../entity/tramite.entity";

@Injectable({
    providedIn: 'root'
})

export class TramiteSignal {
    listTramite = signal<ListarTramite[]>([]);

    selectTramiteDefault : ListarTramite = {
        idTramite: 0,
        idSubCategoriaTramite: 0,
        codigoExpediente: "",
        nombreSubcategoriaTramite: "",
        tipoDoc: "",
        numeroDoc: "",
        tipoSolicitante: "ALUMNO",
        nombreSolicitante: "",
        apePaternoSolicitante: "",
        apeMaternoSolicitante: "",
        celularSolicitante: "",
        correoSolicitante: "",
        asunto: "",
        archivoAnexo: "",
        fechaTramiteCreacion: "",
        estado: "INGRESADO"
    }

    selectTramite = signal<ListarTramite>(this.selectTramiteDefault);
    loading = signal<boolean>(true);
    selectedEstado = signal<EstadoTramite | null>(null);
    selectedCodigoSubCategoria = signal<string>('');
}