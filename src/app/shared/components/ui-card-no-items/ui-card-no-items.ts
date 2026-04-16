import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-ui-card-no-items',
  imports: [UiButtonComponent],
  templateUrl: './ui-card-no-items.html',
  styleUrl: './ui-card-no-items.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardNoItems {
  readonly message = input<string>('No hay información disponible para este módulo.');
  readonly showButton = input<boolean>(false);
  readonly buttonText = input<string>('Volver a cargar');
  readonly buttonIcon = input<string>('pi pi-refresh');

  readonly onClick = output<void>();

  onAction(): void {
    this.onClick.emit();
  }
}
