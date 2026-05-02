import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SubCategoriaValidations {
    maxLengthNombre = 100;
    maxLengthDescripcion = 255;

    minLengthNombre = 3;
    minLengthDescripcion = 5;

    expReg : RegExp = /^[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F][a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F\s.-]*[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F.-]$/;

    expLockInputNombre : RegExp = /[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]/g;
    expLockInputDescripcion : RegExp = /[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ,.-]/g;

    maxlengthCosto = 12; // 10 dígitos para la parte entera, 1 para el punto decimal y 2 para los decimales
    minlengthCosto = 1;
    expRegCosto: RegExp = /^\d{1,10}(\.\d{1,2})?$/
    expLockInputCosto : RegExp = /[^0-9./]/g;

}