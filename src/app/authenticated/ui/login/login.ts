import { Component, computed, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, switchMap, tap } from 'rxjs';
import { PasswordModule } from "primeng/password";
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { Divider } from "primeng/divider";
import { AvatarModule } from 'primeng/avatar';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';
import { AuthenticateUserUseCase } from '@/authenticated/application/use-cases/authenticate.usecase';
import { GetAuthorizedMenuUseCase } from '@/authenticated/application/use-cases/load-menu.usecase';
import { AuthenticatedStorageService } from '@/authenticated/infrastructure/services/authenticated-storage.service';
import { InputOtp } from 'primeng/inputotp';
import { NotificationService } from '@/shared/services/notification.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, PasswordModule, UiButtonComponent, Divider, AvatarModule, InputOtp],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly pasoAnterior = output<void>();

  private readonly authenticatedSignal = inject(AuthenticatedSignal);
  private readonly authenticateUserUseCase = inject(AuthenticateUserUseCase);
  private readonly getAuthorizedMenuUseCase = inject(GetAuthorizedMenuUseCase);
  private readonly storage = inject(AuthenticatedStorageService);
  private readonly router = inject(Router);
  private readonly notifications = inject(NotificationService);

  readonly userNameIngresado = this.authenticatedSignal.userNameIngresado;
  readonly correoIngresado = this.authenticatedSignal.correoIngresado;
  readonly rolSeleccionado = this.authenticatedSignal.rolSeleccionado;
  readonly password = this.authenticatedSignal.passwordIngresado;
  readonly loading = this.authenticatedSignal.loadingLogin;
  // readonly authErrorMessage = this.authenticatedSignal.authErrorMessage;

  readonly canSubmit = computed(() => {
    const hasPassword = this.password().trim().length > 0;
    return hasPassword && Boolean(this.userNameIngresado().trim()) && Boolean(this.rolSeleccionado()) && !this.loading();
  });

  stepAnterior(): void {
    this.password.set('');
    // this.authErrorMessage.set(null);
    this.pasoAnterior.emit();
  }

  ingresar(): void {
    const selectedRole = this.rolSeleccionado();
    const password = this.password().trim();
    const userName = this.userNameIngresado().trim();

    if (!selectedRole || !password || !userName) {
        this.notifications.error('Por favor, complete todos los campos requeridos.');
      return;
    }
    this.loading.set(true);
    this.authenticateUserUseCase.execute({userName,password,role: selectedRole.rol,})
      .pipe(
        tap((response) => {
          const token = response.data.token;
          const decodedToken = this.storage.decodeToken(token);
          this.authenticatedSignal.setAuthenticatedToken(token, decodedToken);
        }),
        switchMap(() => this.getAuthorizedMenuUseCase.execute(selectedRole.moduleRoute)),
        finalize(() => {
          this.loading.set(false);
          this.authenticatedSignal.loadingMenu.set(false);
        })
      )
      .subscribe({
        next: (menuAccess) => {
          this.authenticatedSignal.setMenuAccess(menuAccess);
          this.notifications.success('Autenticación exitosa. ¡Bienvenido!');
          void this.router.navigate([`/${selectedRole.moduleRoute}`]);
        },
        error: (error: unknown) => {
          this.authenticatedSignal.clearAccessState();
          this.notifications.error('Error de autenticación. Por favor, verifique sus credenciales e intente nuevamente.');
          // this.authErrorMessage.set(this.getErrorMessage(error));
        }
      });
  }
}
