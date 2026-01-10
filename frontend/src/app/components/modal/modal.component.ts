import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" *ngIf="isOpen" (click)="onBackdropClick()">
      <div 
        [class]="modalClasses"
        (click)="$event.stopPropagation()"
        role="dialog"
        aria-modal="true"
      >
        <div class="modal-header" *ngIf="showHeader">
          <h2 class="modal-title">
            <ng-content select="[header]"></ng-content>
          </h2>
          <button 
            *ngIf="showCloseButton"
            class="modal-close" 
            (click)="close()"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        
        <div class="modal-footer" *ngIf="showFooter">
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() size: ModalSize = 'md';
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() showCloseButton: boolean = true;
  @Input() closeOnBackdropClick: boolean = true;
  @Input() centered: boolean = true;
  
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() closed = new EventEmitter<void>();

  get modalClasses(): string {
    return [
      'modal',
      `modal-${this.size}`,
      this.centered ? 'modal-centered' : ''
    ].filter(Boolean).join(' ');
  }

  close(): void {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.closed.emit();
  }

  onBackdropClick(): void {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }
}
