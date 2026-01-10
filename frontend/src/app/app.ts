import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  ButtonComponent, 
  CardComponent, 
  InputComponent, 
  ModalComponent,
  AlertComponent,
  BadgeComponent,
  SpinnerComponent,
  ToggleComponent
} from './components';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule,
    ButtonComponent,
    CardComponent,
    InputComponent,
    ModalComponent,
    AlertComponent,
    BadgeComponent,
    SpinnerComponent,
    ToggleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isModalOpen = signal(false);

  constructor(public themeService: ThemeService) {}

  get isDarkMode() {
    return this.themeService.isDarkMode;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }
}
