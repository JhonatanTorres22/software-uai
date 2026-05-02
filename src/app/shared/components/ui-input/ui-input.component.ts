import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, Self, EventEmitter, input, output } from '@angular/core';

import { ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

import { FloatLabelModule } from 'primeng/floatlabel';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { UpperCaseDirective } from '@/shared/directivas/upper-case.directive';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [ CommonModule, FloatLabelModule,UpperCaseDirective, FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, InputNumberModule],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss'
})
export class UiInputComponent implements ControlValueAccessor, OnInit{

   constructor(@Self() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  hide = true;

  // OUTPUT SIGNAL
  onInputEvent = output<Event>();

  // INPUT SIGNALS
  label = input<string>('');
  type = input<'text' | 'password' | 'number' | 'decimal'>('text');
  readonly = input<boolean>(false);
  maxlength = input<number>(0);
  minlength = input<number>(0);
  expReg = input<RegExp | null>(null);
  classInput = input<string>('');
  patternErrorMessage = input<string>('');
  min = input<number | null>(null);
  upperCase = input<boolean>(true);
  useExternalLabel = input<boolean>(false);

  formControl!: FormControl;

  ngOnInit(): void {
    this.formControl = this.ngControl.control as FormControl;
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  disabled = false;

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event) {
    const regex = this.expReg();

    if (!regex) return;

    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.replace(regex, '');

    this.formControl.setValue(value, { emitEvent: false });
  }
  
}
