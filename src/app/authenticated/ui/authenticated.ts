import { trigger, transition, style, animate } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { SearchUserName } from './search-user-name/search-user-name';
import { ListRoles } from './list-roles/list-roles';
import { Login } from './login/login';
import { CommonModule } from '@angular/common';
import { AuthenticatedSignal } from '../domain/signals/authenticated.signal';
import { AuthenticatedStep } from '../domain/entities/rolesAsignados.entity';
import { Image } from "primeng/image";

@Component({
  selector: 'app-authenticated',
  imports: [SearchUserName, ListRoles, Login, CommonModule, Image],
  templateUrl: './authenticated.html',
  styleUrl: './authenticated.scss',
  animations: [
    trigger('stepTransition', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(24px)' }),
        animate('280ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('220ms ease-in', style({ opacity: 0, transform: 'translateX(-24px)' })),
      ]),
    ]),
  ],
})
export class Authenticated {
  private authenticatedSignal = inject(AuthenticatedSignal);
  userNameIngresado = this.authenticatedSignal.userNameIngresado;
  rolSeleccionado = this.authenticatedSignal.rolSeleccionado;
  step = this.authenticatedSignal.step;

  stepData: Record<AuthenticatedStep, { title: string; desc: string }> = {
    1: {
      title: '¡Bienvenido a la Plataforma Virtual UAI!',
      desc: 'Para comenzar ingresa tu número de documento, esto nos permitirá verificar tu información y buscaremos tus accesos disponibles.'
    },
    2: {
      title: 'Elige cómo deseas ingresar',
      desc: 'Puedes tener más de un rol disponible. Selecciona con cuál deseas acceder a la plataforma.'
    },
    3: {
      title: 'Casi listo',
      desc: 'Ya falta muy poco. Ingresa tu contraseña para acceder a tu cuenta y comenzar a usar el sistema.'
    }
  };

  stepSiguiente(): void {
    this.step.update(s => Math.min(s + 1, 3) as AuthenticatedStep);
  }

  stepAnterior(): void {
    this.step.update(s => Math.max(s - 1, 1) as AuthenticatedStep);
  }

  setStep(s: number): void {
    if (s >= 1 && s <= 3) {
      this.step.set(s as AuthenticatedStep);
    }
  }
}
