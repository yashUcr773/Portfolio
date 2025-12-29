import { Component } from '@angular/core';
import { IconName, ICONS } from '../../../core/config';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

type SocialIconVM = {
  title: string;
  svg: SafeHtml;
  class: string;
  social: IconName
};

@Component({
  selector: 'app-social-picker',
  imports: [NgClass],
  templateUrl: './social-picker.html',
  styleUrl: './social-picker.scss',
})
export class SocialPicker {
  svgs: IconName[] = ['github', 'linkedin', 'gmail', 'whatsapp']

  rows: SocialIconVM[][];

  constructor(private sanitizer: DomSanitizer) {
    const names: IconName[] = ['github', 'linkedin', 'gmail', 'whatsapp'];

    const icons = names.map((name, i) => ({
      title: ICONS[name].title,
      svg: this.sanitizer.bypassSecurityTrustHtml(ICONS[name].svg),
      class: `card${i + 1}`,
      social: name
    }));

    this.rows = [
      icons.slice(0, 2),
      icons.slice(2, 4),
    ];
  }
}
