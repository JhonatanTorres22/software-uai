import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TramiteValidation{
    readonly dniLength = 8;
    readonly carnetExtranjeriaMinLength = 9;
    readonly carnetExtranjeriaMaxLength = 12;

    readonly minNombres = 2;
    readonly maxNombres = 100;
    readonly minApellidos = 2;
    readonly maxApellidos = 80;

    readonly celularLength = 9;
    readonly minAsunto = 10;
    readonly maxAsunto = 250;

    readonly soloNumeros = /^\d+$/;
    readonly soloLetras = /^[a-zA-ZáÁéÉíÍóÓúÚ\u00C0-\u017F][a-zA-ZáÁéÉíÍóÓúÚ\u00C0-\u017F\s]*[a-zA-ZáÁéÉíÍóÓúÚ\u00C0-\u017F]$/;
    readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    readonly lockInputNumber = /[^0-9]/
    readonly lockInputText = /[^a-zA-ZáÁéÉíÍóÓúÚ\u00C0-\u017F\s]/

}