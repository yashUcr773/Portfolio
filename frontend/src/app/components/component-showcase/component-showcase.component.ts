import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { BadgeComponent } from '../badge/badge.component';
import { LinkDirective } from '../link/link.directive';
import { TypographyDirective } from '../typography/typography.directive';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-component-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    BadgeComponent,
    LinkDirective,
    TypographyDirective
  ],
  templateUrl: './component-showcase.component.html',
  styleUrl: './component-showcase.component.scss'
})
export class ComponentShowcaseComponent {
  constructor(public themeService: ThemeService) {}

  setTheme(theme: 'light' | 'dark' | 'high-contrast') {
    this.themeService.setTheme(theme);
  }
}
