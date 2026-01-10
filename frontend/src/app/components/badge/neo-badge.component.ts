import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'neo-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neo-badge.component.html',
  styleUrls: ['./neo-badge.component.scss']
})
export class NeoBadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() dot: boolean = false;

  get badgeClasses(): string {
    return `neo-badge neo-badge--${this.variant} neo-badge--${this.size} ${this.dot ? 'neo-badge--dot' : ''}`;
  }
}
