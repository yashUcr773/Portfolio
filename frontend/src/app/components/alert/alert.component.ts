import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="alertClasses" role="alert">
      <div class="alert-icon" *ngIf="showIcon">
        <ng-content select="[icon]"></ng-content>
      </div>
      <div class="alert-content">
        <div class="alert-title" *ngIf="title">{{ title }}</div>
        <div class="alert-message">
          <ng-content></ng-content>
        </div>
      </div>
      <button 
        *ngIf="dismissible"
        class="alert-close"
        (click)="onClose()"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  `,
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() variant: AlertVariant = 'info';
  @Input() title: string = '';
  @Input() showIcon: boolean = true;
  @Input() dismissible: boolean = false;
  
  visible: boolean = true;

  get alertClasses(): string {
    return [
      'alert',
      `alert-${this.variant}`,
      !this.visible ? 'alert-hidden' : ''
    ].filter(Boolean).join(' ');
  }

  onClose(): void {
    this.visible = false;
  }
}
