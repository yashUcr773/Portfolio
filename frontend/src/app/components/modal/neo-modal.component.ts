import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'neo-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './neo-modal.component.html',
  styleUrls: ['./neo-modal.component.scss']
})
export class NeoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() size: ModalSize = 'md';
  @Input() title?: string;
  @Input() showCloseButton: boolean = true;
  @Output() closeModal = new EventEmitter<void>();

  get modalClasses(): string {
    return `neo-modal-content neo-modal-content--${this.size}`;
  }

  onClose(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
