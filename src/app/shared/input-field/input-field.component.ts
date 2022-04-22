import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() name: string = '';
  @Input() inputId: string = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() placeholder: string = ' ';
  @Input() invalid: boolean = false;
  @Input() label: string = '';
  @Input() errorMessage: string = '';
  @Input() disabled: boolean = false;

  public value: string = '';
  public onTouch!: Function;
  public onChange!: Function;

  constructor() { }

  onInput(event: any) {
    this.onTouch();
    this.value = (event.target as HTMLInputElement).value
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
