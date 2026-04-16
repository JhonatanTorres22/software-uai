import { HttpErrorResponse } from '@angular/common/http';
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

@Component({
  selector: 'app-login',
  imports: [FormsModule, PasswordModule, UiButtonComponent, Divider, AvatarModule],
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

  readonly userNameIngresado = this.authenticatedSignal.userNameIngresado;
  readonly rolSeleccionado = this.authenticatedSignal.rolSeleccionado;
  readonly password = this.authenticatedSignal.passwordIngresado;
  readonly loading = this.authenticatedSignal.loadingLogin;
  readonly authErrorMessage = this.authenticatedSignal.authErrorMessage;

  readonly canSubmit = computed(() => {
    const hasPassword = this.password().trim().length > 0;
    return hasPassword && Boolean(this.userNameIngresado().trim()) && Boolean(this.rolSeleccionado()) && !this.loading();
  });

  stepAnterior(): void {
    this.password.set('');
    this.authErrorMessage.set(null);
    this.pasoAnterior.emit();
  }

  ingresar(): void {
    const selectedRole = this.rolSeleccionado();
    const password = this.password().trim();
    const userName = this.userNameIngresado().trim();

    if (!selectedRole || !password || !userName) {
      this.authErrorMessage.set('Completa tus credenciales para continuar.');
      return;
    }

    this.loading.set(true);
    this.authenticatedSignal.loadingMenu.set(true);
    this.authErrorMessage.set(null);

    this.authenticateUserUseCase.execute({
      userName,
      password,
      role: selectedRole.rol,
    })
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
          void this.router.navigate([`/${selectedRole.moduleRoute}`]);
        },
        error: (error: unknown) => {
          this.authenticatedSignal.clearAccessState();
          this.authErrorMessage.set(this.getErrorMessage(error));
        }
      });
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return this.getPayloadMessage(error.error) ?? error.message ?? 'No fue posible iniciar sesión.';
    }

    if (error instanceof Error && error.message.trim().length > 0) {
      return error.message;
    }

    return 'No fue posible iniciar sesión. Verifica tus credenciales e inténtalo nuevamente.';
  }

  private getPayloadMessage(payload: unknown): string | null {
    if (!payload || typeof payload !== 'object') {
      return null;
    }

    const payloadRecord = payload as Record<string, unknown>;
    const message = payloadRecord['message'];
    if (typeof message === 'string' && message.trim().length > 0) {
      return message;
    }

    const errors = payloadRecord['errors'];
    if (Array.isArray(errors)) {
      const firstError = errors.find(
        (item): item is string => typeof item === 'string' && item.trim().length > 0
      );

      return firstError ?? null;
    }

    return null;
  }
}
