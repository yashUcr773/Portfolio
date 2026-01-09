import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'hostClasses',
    '[attr.disabled]': 'disabled ? true : null',
    '[attr.type]': 'type'
  }
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Input() fullWidth: boolean = false;
  @Input() loading: boolean = false;

  get hostClasses(): string {
    const classes = ['btn'];
    
    classes.push(`btn-${this.variant}`);
    classes.push(`btn-${this.size}`);
    
    if (this.disabled) {
      classes.push('btn-disabled');
    }
    
    if (this.fullWidth) {
      classes.push('btn-full-width');
    }
    
    if (this.loading) {
      classes.push('btn-loading');
    }
    
    return classes.join(' ');
  }
}
