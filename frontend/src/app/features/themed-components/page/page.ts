import { Component } from '@angular/core';
import { Socials } from '../../../shared/ui/socials/socials';
import { SocialPicker } from '../../../shared/ui/social-picker/social-picker';
import { Logos } from '../../../shared/ui/logos/logos';
import { SectionHeader } from '../../../shared/ui/section-header/section-header';
import { NextComponentLoader } from '../../../shared/ui/next-component-loader/next-component-loader';
@Component({
  selector: 'app-themed-components-page',
  imports: [Socials, SocialPicker, Logos, SectionHeader, NextComponentLoader],
  standalone: true,
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class ThemedComponentsPage {

}
