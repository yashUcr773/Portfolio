import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-v3-hero',
  templateUrl: './v3-hero.component.html',
  styleUrls: ['./v3-hero.component.scss']
})
export class V3HeroComponent implements OnInit  {
  ngOnInit(): void {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
      backSpeed: 50,
      shuffle: true,
      showCursor: false
    });
    
  }

  createRange(number:any){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

}
