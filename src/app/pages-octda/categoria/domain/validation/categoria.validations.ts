import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CategoriaValidations {
    maxLengthNombre = 100;
    maxLengthDescripcion = 255;

    minLengthNombre = 3;
    minLengthDescripcion = 5;

    expReg : RegExp = /^[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F][a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F\s.-]*[a-zA-Z0-9áÁéÉíÍóÓúÚ\u00C0-\u017F.-]$/;

    expLockInputNombre : RegExp = /[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]/g;
    expLockInputDescripcion : RegExp = /[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ,.-]/g;

}