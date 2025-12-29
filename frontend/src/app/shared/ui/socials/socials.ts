import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconName, ICONS } from '../../../core/config';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-socials',
  imports: [NgClass],
  standalone: true,
  templateUrl: './socials.html',
  styleUrl: './socials.scss',
})
export class Socials {
  @Input({ required: true })
  social: IconName = 'github';

  @Input()
  variant: Variant = 'inline';

  @Input() size = '48px';
  @Input() currentColor = 'red'

  constructor(private sanitizer: DomSanitizer) { }

  get svg() {
    return this.sanitizer.bypassSecurityTrustHtml(ICONS[this.social].svg);
  }
  get title() {
    return ICONS[this.social].title;
  }
}

export type Variant = 'inline' | 'icon';