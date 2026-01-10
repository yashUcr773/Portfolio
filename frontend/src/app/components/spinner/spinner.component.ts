import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';
export type SpinnerVariant = 'primary' | 'secondary' | 'white';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="spinnerClasses" role="status" [attr.aria-label]="label">
      <div class="spinner-circle"></div>
      <span *ngIf="showLabel" class="spinner-label">{{ label }}</span>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';
  @Input() variant: SpinnerVariant = 'primary';
  @Input() label: string = 'Loading...';
  @Input() showLabel: boolean = false;
  @Input() fullscreen: boolean = false;

  get spinnerClasses(): string {
    return [
      'spinner',
      `spinner-${this.size}`,
      `spinner-${this.variant}`,
      this.fullscreen ? 'spinner-fullscreen' : ''
    ].filter(Boolean).join(' ');
  }
}
