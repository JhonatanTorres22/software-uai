import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TramiteValidation{
    readonly dniLength = 8;
    readonly carnetExtranjeriaMinLength = 9;
    readonly carnetExtranjeriaMaxLength = 12;

    readonly minNombres = 2;
    readonly maxNombres = 80;
    readonly minApellidos = 2;
    readonly maxApellidos = 60;

    readonly celularLength = 9;
    readonly minAsunto = 10;
    readonly maxAsunto = 250;

    readonly soloNumeros = /^\d+$/;
    readonly soloLetras = /^[A-Za-z\s]+$/;
    readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

}