import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logos',
  imports: [],
  templateUrl: './logos.html',
  styleUrl: './logos.scss',
})
export class Logos {
  @Input()
  variant: 'small' | 'loader' = 'small'
}
