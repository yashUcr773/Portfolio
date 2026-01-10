import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type ToggleSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label [class]="toggleClasses">
      <input
        type="checkbox"
        class="toggle-input"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange($event)"
      />
      <span class="toggle-slider"></span>
      <span *ngIf="label" class="toggle-label">{{ label }}</span>
    </label>
  `,
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() size: ToggleSize = 'md';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  
  @Output() checkedChange = new EventEmitter<boolean>();

  onChangeFn: (value: boolean) => void = () => {};
  onTouchedFn: () => void = () => {};

  get toggleClasses(): string {
    return [
      'toggle',
      `toggle-${this.size}`,
      this.disabled ? 'toggle-disabled' : ''
    ].filter(Boolean).join(' ');
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.checkedChange.emit(this.checked);
    this.onChangeFn(this.checked);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
