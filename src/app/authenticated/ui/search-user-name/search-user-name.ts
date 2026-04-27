import { Component, inject, output, signal } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { NotificationService } from '@/shared/services/notification.service';

@Component({
  selector: 'app-search-user-name',
  imports: [InputNumberModule, ButtonModule, FormsModule,CommonModule, InputGroupModule, InputGroupAddonModule, ReactiveFormsModule, UiButtonComponent, CardModule, UiInputComponent, Divider, UiLoading],
  templateUrl: './search-user-name.html',
  styleUrl: './search-user-name.scss',
})
export class SearchUserName {
  private readonly authenticatedSignal = inject(AuthenticatedSignal);
  readonly loading = this.authenticatedSignal.loadingRoles;
  readonly listModulos = this.authenticatedSignal.listModulos;
  private readonly getRolUseCase = inject(GetRolesAsignadosUseCase);
  readonly userNameIngresado = this.authenticatedSignal.userNameIngresado;
  readonly correoIngresado = this.authenticatedSignal.correoIngresado;
  readonly formLogin: FormGroup<{
    userName: FormControl<string | null>;
    correo: FormControl<string | null>;
  }>;
  visibleMessageError = signal(false);
  readonly siguientePaso = output<void>();
  private readonly notificationService = inject(NotificationService);

  /* VALIDACIONES */
  private readonly authenticarValidation = inject(AuthenticarValidation);
  expRegUserName = this.authenticarValidation.expRegUserName
  expRegLockInputUserName = this.authenticarValidation.expRegLockInputUserName
  maxLengthUserName = this.authenticarValidation.maxLengthUserName
  minLengthUserName = this.authenticarValidation.minLengthUserName
  expRegCorreo = this.authenticarValidation.expRegCorreo
  expRegLockInputCorreo = this.authenticarValidation.expRegLockInputCorreo
  maxLengthCorreo = this.authenticarValidation.maxLengthCorreo
  minLengthCorreo = this.authenticarValidation.minLengthCorreo
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
        Validators.maxLength(this.maxLengthCorreo),
        Validators.minLength(this.minLengthCorreo),
        Validators.pattern(this.expRegCorreo)
      ])
    });
  }

  buscarRolesAsignados(): void {
    if(this.formLogin.invalid){return}
    const userName = `${this.formLogin.controls.userName.value ?? ''}`.trim();
    const correo = `${this.formLogin.controls.correo.value ?? ''}`.trim();

    this.userNameIngresado.set(userName);
    this.loading.set(true);
    console.log(this.loading());
    
    this.getRolUseCase.execute(userName, correo).subscribe({
      next: (response) => {
        console.log(response);
        if (response.isSuccess) {
          
          this.listModulos.set(response.data.modulos);
          console.log(this.listModulos());
          if (this.listModulos().length === 0) {
            this.visibleMessageError .set(true);
            this.notificationService.error('No se encontraron roles para el usuario.');
            return
          }
          this.notificationService.success('Roles cargados correctamente');
          this.irAPasoSiguiente()
        }
      },
      error: (error: unknown) => {
        console.log(error);
        this.loading.set(false);
        this.authenticatedSignal.resetRolesState();
        this.userNameIngresado.set(userName);
        // this.notificationService.error(`${error.message || 'No se pudieron cargar los roles del usuario.'}`);
        // this.authErrorMessage.set('No se pudieron cargar los roles del usuario.');
      }
    });
  }

  irAPasoSiguiente(): void {   
    if(this.visibleMessageError()){return}
    const correo = `${this.formLogin.controls.correo.value ?? ''}`.trim();
    this.correoIngresado.set(correo);
    this.siguientePaso.emit();
    this.loading.set(false);
  }
}
