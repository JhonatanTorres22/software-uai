import { Component, input, output } from '@angular/core';
import { UiButtonComponent } from "../ui-button/ui-button.component";
@Component({
  selector: 'ui-modal-footer',
  imports: [UiButtonComponent],
  templateUrl: './ui-modal-footer.html',
  styleUrl: './ui-modal-footer.scss',
})
export class UiModalFooter {
  label = input<string>('Guardar');
  disabled = input<boolean>(false);

  cancel = output<void>();
  submit = output<void>();
}
