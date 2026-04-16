import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, output } from '@angular/core';
import { finalize } from 'rxjs';
import { FieldsetModule } from 'primeng/fieldset';
import { UiButtonComponent } from "@/shared/components/ui-button/ui-button.component";
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';
import { UiLoading } from "@/shared/components/ui-loading/ui-loading";
import { GetRolesAsignadosUseCase } from '@/authenticated/application/use-cases/rolesAsignados.usecase';
import {
  AuthenticatedModule,
  AuthenticatedRole,
  resolveModuleRoute,
} from '@/authenticated/domain/entities/rolesAsignados.entity';
import { UiCardNoItems } from "@/shared/components/ui-card-no-items/ui-card-no-items";

@Component({
  selector: 'app-list-roles',
  imports: [CommonModule, FieldsetModule, UiButtonComponent, UiLoading, UiCardNoItems],
  templateUrl: './list-roles.html',
  styleUrl: './list-roles.scss',
})
export class ListRoles implements OnInit {
  private readonly authenticatedSignal = inject(AuthenticatedSignal);
  private readonly getRolUseCase = inject(GetRolesAsignadosUseCase);

  readonly loading = this.authenticatedSignal.loadingRoles;
  readonly userNameIngresado = this.authenticatedSignal.userNameIngresado;
  readonly rolSeleccionado = this.authenticatedSignal.rolSeleccionado;
  readonly abiertos = this.authenticatedSignal.abiertos;
  readonly listModulos = this.authenticatedSignal.listModulos;
  readonly authErrorMessage = this.authenticatedSignal.authErrorMessage;

  readonly siguientePaso = output<void>();
  readonly pasoAnterior = output<void>();

  ngOnInit(): void {
    this.obtenerRolesAsignados();
  }

  obtenerRolesAsignados(): void {
    const userName = this.userNameIngresado().trim();

    if (!userName) {
      this.listModulos.set([]);
      return;
    }

    this.loading.set(true);
    this.authErrorMessage.set(null);

    this.getRolUseCase.execute(userName)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (response) => {
          if (!response.isSuccess) {
            this.listModulos.set([]);
            this.authErrorMessage.set(response.message || 'No se encontraron roles disponibles para el usuario.');
            return;
          }

          this.listModulos.set(response.data.modulos);
          this.abiertos.set([]);
        },
        error: (error: unknown) => {
          console.error('Error al obtener roles del usuario', error);
          this.listModulos.set([]);
          this.authenticatedSignal.resetRolesState();
          this.userNameIngresado.set(userName);
          this.authErrorMessage.set('No se pudieron cargar los roles del usuario.');
        }
      });
  }

  isOpen(index: number): boolean {
    return this.abiertos().includes(index);
  }

  toggle(index: number): void {
    this.abiertos.update((openedIndexes) =>
      openedIndexes.includes(index)
        ? openedIndexes.filter((currentIndex) => currentIndex !== index)
        : [...openedIndexes, index]
    );
  }

  seleccionarRol(modulo: AuthenticatedModule, rol: AuthenticatedRole): void {
    this.authenticatedSignal.selectRole({
      modulo: modulo.nombre,
      rol: rol.nombre,
      moduleRoute: resolveModuleRoute(modulo.nombre),
    });
  }

  continuar(): void {
    if (this.rolSeleccionado()) {
      this.siguientePaso.emit();
    }
  }

  volver(): void {
    this.pasoAnterior.emit();
    this.authenticatedSignal.resetRolesState();
  }
}
