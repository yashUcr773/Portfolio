import { Component } from '@angular/core';
import { Socials } from '../../../shared/ui/socials/socials';
import { SocialPicker } from '../../../shared/ui/social-picker/social-picker';
@Component({
  selector: 'app-themed-components-page',
  imports: [Socials, SocialPicker],
  standalone: true,
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class ThemedComponentsPage {

}
