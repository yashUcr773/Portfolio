import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'default' | 'highlight' | 'success' | 'danger' | 'warning';

@Component({
  selector: 'neo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neo-card.component.html',
  styleUrls: ['./neo-card.component.scss']
})
export class NeoCardComponent {
  @Input() variant: CardVariant = 'default';
  @Input() hoverable: boolean = false;
  @Input() noPadding: boolean = false;

  get cardClasses(): string {
    return `neo-card neo-card--${this.variant} ${this.hoverable ? 'neo-card--hoverable' : ''} ${this.noPadding ? 'neo-card--no-padding' : ''}`;
  }
}
