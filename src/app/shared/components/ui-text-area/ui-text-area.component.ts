import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { UpperCaseDirective } from '@/shared/directivas/upper-case.directive';

@Component({
  selector: 'ui-text-area',
  standalone: true,
  imports: [CommonModule, FloatLabelModule, FormsModule, ReactiveFormsModule, TextareaModule, UpperCaseDirective],
  templateUrl: './ui-text-area.component.html',
  styleUrl: './ui-text-area.component.scss',
})
export class UiTextAreaComponent implements ControlValueAccessor, OnInit {
  constructor(@Self() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() label = '';
  @Input() readonly = false;
  @Input() maxlength = 0;
  @Input() minlength = 0;
  @Input() rows = 4;
  @Input() classInput = '';
  @Input() expReg = RegExp('');
  @Input() patternErrorMessage = '';
  @Input() upperCase = true;
  @Input() useExternalLabel = false;

  formControl!: FormControl;

  ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  disabled = false;

  writeValue(value: any): void {
    // El valor se maneja con formControlName en el formulario padre.
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    if (!this.expReg) return;

    const input = event.target as HTMLTextAreaElement;
    const value = input.value.replace(new RegExp(this.expReg, 'g'), '');
    this.formControl.setValue(value, { emitEvent: false });
  }
}
