import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrl: './badge.component.scss',
  host: {
    '[class]': 'hostClasses'
  }
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() outline: boolean = false;
  @Input() dot: boolean = false;
  @Input() pill: boolean = false;

  get hostClasses(): string {
    const classes = ['badge'];
    
    classes.push(`badge-${this.variant}`);
    classes.push(`badge-${this.size}`);
    
    if (this.outline) {
      classes.push('badge-outline');
    }
    
    if (this.dot) {
      classes.push('badge-dot');
    }
    
    if (this.pill) {
      classes.push('badge-pill');
    }
    
    return classes.join(' ');
  }
}
