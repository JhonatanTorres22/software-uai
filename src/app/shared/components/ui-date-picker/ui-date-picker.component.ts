import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Self, input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'ui-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePickerModule, FloatLabelModule],
  templateUrl: './ui-date-picker.component.html',
  styleUrl: './ui-date-picker.component.scss'
})
export class UiDatePickerComponent implements ControlValueAccessor, OnInit {

  constructor(@Self() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // INPUT SIGNALS
  label = input<string>('');
  showTime = input<boolean>(false);
  showSeconds = input<boolean>(false);
  placeholder = input<string>('Seleccionar fecha');
  minDate = input<Date | undefined>(undefined);
  maxDate = input<Date | undefined>(undefined);
  dateFormat = input<string>('dd/mm/yy');
  hourFormat = input<'12' | '24'>('24');
  readonly = input<boolean>(false);
  useExternalLabel = input<boolean>(false);

  formControl!: FormControl;

  ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  private onChange = (_: any) => {};
  public onTouched = () => {};

  disabled = false;

  writeValue(value: any): void {
    // Si recibimos un string, convertir a Date
    if (value && typeof value === 'string') {
      this.formControl?.setValue(new Date(value), { emitEvent: false });
    }
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

  onDateChange(event: any): void {
    this.onChange(event);
    this.onTouched();
  }
}
