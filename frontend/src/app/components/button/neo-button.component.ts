import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'neo-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neo-button.component.html',
  styleUrls: ['./neo-button.component.scss']
})
export class NeoButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get buttonClasses(): string {
    return `neo-btn neo-btn--${this.variant} neo-btn--${this.size} ${this.fullWidth ? 'neo-btn--full' : ''}`;
  }
}
