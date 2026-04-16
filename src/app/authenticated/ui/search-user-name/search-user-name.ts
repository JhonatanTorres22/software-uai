import { Component, inject, output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from "primeng/inputnumber";
import { Divider } from "primeng/divider";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';
import { CardModule } from "primeng/card";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabel } from "primeng/floatlabel";
import { Tag } from "primeng/tag";

@Component({
  selector: 'app-search-user-name',
  imports: [InputNumberModule, ButtonModule, Divider, FormsModule, InputGroupModule, InputGroupAddonModule, ReactiveFormsModule, UiButtonComponent, CardModule, FloatLabel, Tag],
  templateUrl: './search-user-name.html',
  styleUrl: './search-user-name.scss',
})
export class SearchUserName {
  private readonly authenticatedSignal = inject(AuthenticatedSignal);

  readonly userNameIngresado = this.authenticatedSignal.userNameIngresado;
  readonly formLogin: FormGroup<{
    userName: FormControl<string | null>;
  }>;
  readonly siguientePaso = output<void>();

  constructor() {
    this.formLogin = new FormGroup({
      userName: new FormControl<string | null>(this.userNameIngresado() || null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.pattern(/^[0-9]+$/)
      ])
    });
  }

  buscar(): void {
    const userName = `${this.formLogin.controls.userName.value ?? ''}`.trim();
    this.userNameIngresado.set(userName);

    if (this.formLogin.invalid || userName.length !== 8) {
      return;
    }

    this.authenticatedSignal.resetRolesState();
    this.authenticatedSignal.authErrorMessage.set(null);
    this.siguientePaso.emit();
  }
}
