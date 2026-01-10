import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NeoButtonComponent } from '../button/neo-button.component';
import { NeoCardComponent } from '../card/neo-card.component';
import { NeoInputComponent } from '../input/neo-input.component';
import { NeoModalComponent } from '../modal/neo-modal.component';
import { NeoBadgeComponent } from '../badge/neo-badge.component';
import { NeoAlertComponent } from '../alert/neo-alert.component';

@Component({
  selector: 'app-component-showcase',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NeoButtonComponent,
    NeoCardComponent,
    NeoInputComponent,
    NeoModalComponent,
    NeoBadgeComponent,
    NeoAlertComponent
  ],
  templateUrl: './component-showcase.component.html',
  styleUrls: ['./component-showcase.component.scss']
})
export class ComponentShowcaseComponent {
  isModalOpen = signal(false);
  inputValue = signal('');
  showAlert = signal(true);

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onAlertDismiss(): void {
    this.showAlert.set(false);
  }
}
