import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'success' | 'danger' | 'warning';

@Component({
  selector: 'neo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './neo-input.component.html',
  styleUrls: ['./neo-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NeoInputComponent),
      multi: true
    }
  ]
})
export class NeoInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() size: InputSize = 'md';
  @Input() variant: InputVariant = 'default';
  @Input() disabled: boolean = false;
  @Input() error?: string;
  @Input() helperText?: string;

  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  get inputClasses(): string {
    const errorClass = this.error ? 'neo-input--error' : '';
    return `neo-input neo-input--${this.size} neo-input--${this.variant} ${errorClass}`;
  }

  writeValue(value: any): void {
    this.value = value;
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

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
