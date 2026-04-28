import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, ConfirmDialogModule, ButtonModule],
  template: `
    <p-toast position="top-right" />
    <p-confirmdialog>
      <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
        <div class="ui-confirm-headless">
          <div class="ui-confirm-headless__icon-shell">
            <i [class]="message.icon"></i>
          </div>

          <h3 class="ui-confirm-headless__title">{{ message.header }}</h3>
          <p class="ui-confirm-headless__message">{{ message.message }}</p>

          <div class="ui-confirm-headless__actions">
            <p-button
              [label]="message.acceptLabel || 'Aceptar'"
              [styleClass]="message.acceptButtonStyleClass"
              (onClick)="onAccept()"
            ></p-button>

            <p-button
              [label]="message.rejectLabel || 'Cancelar'"
              [styleClass]="message.rejectButtonStyleClass"
              (onClick)="onReject()"
            ></p-button>
          </div>
        </div>
      </ng-template>
    </p-confirmdialog>
    <router-outlet />
  `
})
export class AppComponent {}
