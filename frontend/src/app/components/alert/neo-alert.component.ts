import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'neo-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neo-alert.component.html',
  styleUrls: ['./neo-alert.component.scss']
})
export class NeoAlertComponent {
  @Input() variant: AlertVariant = 'info';
  @Input() title?: string;
  @Input() dismissible: boolean = false;
  @Output() dismiss = new EventEmitter<void>();

  isVisible: boolean = true;

  get alertClasses(): string {
    return `neo-alert neo-alert--${this.variant}`;
  }

  get icon(): string {
    switch (this.variant) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'danger': return '✕';
      case 'info': 
      default: return 'ℹ';
    }
  }

  onDismiss(): void {
    this.isVisible = false;
    this.dismiss.emit();
  }
}
