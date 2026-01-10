import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'default' | 'bordered' | 'elevated' | 'flat';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <div *ngIf="header" class="card-header">
        <ng-content select="[header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
      <div *ngIf="footer" class="card-footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
  @Input() header: boolean = false;
  @Input() footer: boolean = false;
  @Input() hoverable: boolean = false;
  @Input() clickable: boolean = false;

  get cardClasses(): string {
    return [
      'card',
      `card-${this.variant}`,
      this.hoverable ? 'card-hoverable' : '',
      this.clickable ? 'card-clickable' : ''
    ].filter(Boolean).join(' ');
  }
}
