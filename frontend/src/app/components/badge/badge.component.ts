import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() outlined: boolean = false;
  @Input() rounded: boolean = false;
  @Input() dot: boolean = false;

  get badgeClasses(): string {
    return [
      'badge',
      `badge-${this.variant}`,
      `badge-${this.size}`,
      this.outlined ? 'badge-outlined' : '',
      this.rounded ? 'badge-rounded' : '',
      this.dot ? 'badge-dot' : ''
    ].filter(Boolean).join(' ');
  }
}
