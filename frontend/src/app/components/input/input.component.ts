import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputVariant = 'default' | 'filled' | 'outlined';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses">
      <label *ngIf="label" [for]="inputId" class="input-label">
        {{ label }}
        <span *ngIf="required" class="input-required">*</span>
      </label>
      
      <div class="input-container">
        <span *ngIf="prefix" class="input-prefix">
          <ng-content select="[prefix]"></ng-content>
        </span>
        
        <input
          [id]="inputId"
          [type]="type"
          [class]="inputClasses"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [value]="value"
          (input)="onInput($event)"
          (blur)="onTouched()"
        />
        
        <span *ngIf="suffix" class="input-suffix">
          <ng-content select="[suffix]"></ng-content>
        </span>
      </div>
      
      <span *ngIf="helperText && !error" class="input-helper">{{ helperText }}</span>
      <span *ngIf="error" class="input-error">{{ error }}</span>
    </div>
  `,
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: InputType = 'text';
  @Input() variant: InputVariant = 'outlined';
  @Input() size: InputSize = 'md';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() error: string = '';
  @Input() helperText: string = '';
  @Input() prefix: boolean = false;
  @Input() suffix: boolean = false;
  @Input() fullWidth: boolean = true;

  inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  value: string = '';

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  get wrapperClasses(): string {
    return [
      'input-wrapper',
      this.fullWidth ? 'input-full-width' : ''
    ].filter(Boolean).join(' ');
  }

  get inputClasses(): string {
    return [
      'input',
      `input-${this.variant}`,
      `input-${this.size}`,
      this.error ? 'input-invalid' : '',
      this.disabled ? 'input-disabled' : '',
      this.prefix ? 'input-has-prefix' : '',
      this.suffix ? 'input-has-suffix' : ''
    ].filter(Boolean).join(' ');
  }
}
