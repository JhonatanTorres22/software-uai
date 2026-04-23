import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthenticarValidation {
    maxLengthUserName = 16;
    minLengthUserName = 8;
    expRegUserName = /^[0-9]+$/
    expRegLockInputUserName = /[^0-9]/
}