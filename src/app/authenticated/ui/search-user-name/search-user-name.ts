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
import { GetRolesAsignadosUseCase } from '@/authenticated/application/use-cases/rolesAsignados.usecase';
import { AuthenticarValidation } from '@/authenticated/domain/validations/authenticar.validation';
import { UiInputComponent } from "@/shared/components/ui-input/ui-input.component";
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";

@Component({
  selector: 'app-search-user-name',
  imports: [InputNumberModule, ButtonModule, FormsModule, InputGroupModule, InputGroupAddonModule, ReactiveFormsModule, UiButtonComponent, CardModule, UiInputComponent, Divider, UiLoading],
  templateUrl: './search-user-name.html',
  styleUrl: './search-user-name.scss',
})
export class SearchUserName {
  private readonly authenticatedSignal = inject(AuthenticatedSignal);
  readonly loading = this.authenticatedSignal.loadingRoles;
  readonly listModulos = this.authenticatedSignal.listModulos;
  private readonly getRolUseCase = inject(GetRolesAsignadosUseCase);
  visibleInputCorreo: boolean = false;
  readonly userNameIngresado = this.authenticatedSignal.userNameIngresado;
  readonly correoIngresado = this.authenticatedSignal.correoIngresado;
  readonly formLogin: FormGroup<{
    userName: FormControl<string | null>;
    correo: FormControl<string | null>;
  }>;
  readonly siguientePaso = output<void>();

  /* VALIDACIONES */
  private readonly authenticarValidation = inject(AuthenticarValidation);
  expRegUserName = this.authenticarValidation.expRegUserName
  expRegLockInputUserName = this.authenticarValidation.expRegLockInputUserName
  maxLengthUserName = this.authenticarValidation.maxLengthUserName
  minLengthUserName = this.authenticarValidation.minLengthUserName
  constructor() {
    this.formLogin = new FormGroup({
      userName: new FormControl<string | null>(this.userNameIngresado() || null, [
        Validators.required,
        Validators.maxLength(this.maxLengthUserName),
        Validators.minLength(this.minLengthUserName),
        Validators.pattern(this.expRegUserName)
      ]),
      correo: new FormControl('', [
        Validators.required,
      ])
    });
  }

  buscarRolesAsignados(): void {
    const userName = `${this.formLogin.controls.userName.value ?? ''}`.trim();
    if (userName.length < this.minLengthUserName) {
      return;
    }
    this.userNameIngresado.set(userName);
    this.loading.set(true);

    this.getRolUseCase.execute(userName).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.listModulos.set(response.data.modulos);
          if (this.listModulos().length > 0) {
            // this.authenticatedSignal.authErrorMessage.set('El usuario no tiene roles asignados.');
          }
          this.visibleInputCorreo = true;
          this.loading.set(false);
        }
      },
      error: (error: unknown) => {
        this.loading.set(false);
        this.authenticatedSignal.resetRolesState();
        this.userNameIngresado.set(userName);
        // this.authErrorMessage.set('No se pudieron cargar los roles del usuario.');
      }
    });
    this.authenticatedSignal.resetRolesState();
  }

  irAPasoSiguiente(): void {
    const correo = `${this.formLogin.controls.correo.value ?? ''}`.trim();
    this.correoIngresado.set(correo);
    this.siguientePaso.emit();
  }
}
