import { Injectable, signal } from "@angular/core";
import { ListarUsuario } from "../entities/usuario.entity";

@Injectable({
    providedIn: 'root'
})

export class UsuarioSignal {
    listUsuario = signal<ListarUsuario[]>([])

    selecUsuarioDefault : ListarUsuario = {
        id: 0,
        nombres: "",
        apePaterno: "",
        apMaterno: "",
        correo: "",
        tipoDocumento: "",
        nDocumento: ""
    }

    selectUsuario = signal<ListarUsuario>(this.selecUsuarioDefault);
    loading = signal<boolean>(false);
    actionUsuario = signal<string>("");
}