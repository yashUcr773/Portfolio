import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-v3-footer',
  templateUrl: './v3-footer.component.html',
  styleUrls: ['./v3-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class V3FooterComponent implements OnInit {

  ngOnInit(): void {
    this.setBubbles();
  }

  generateRandomNumbers(low: number, high: number, suffix: string) {
    const randomNumber = (Math.random() * (high - low + 1)) + low;
    return randomNumber + suffix
  }

  setBubbles() {

    let bubbles: any = document.querySelector('.bubbles');
    if (bubbles) {
      for (let i = 0; i < 400; i += 1) {
        let bubble: any = document.createElement('div');
        let style = '--size: ' + this.generateRandomNumbers(2, 7, 'rem') + ';';
        style += ' --distance: ' + this.generateRandomNumbers(5, 8, 'rem') + ';';
        style += ' --position: ' + this.generateRandomNumbers(-10, 110, '%') + ';';
        style += ' --time: ' + this.generateRandomNumbers(4, 6, 's') + ';';
        style += ' --delay: ' + this.generateRandomNumbers(-1, 5, 's') + ';';
        bubble.classList.add('bubble')
        bubble.setAttribute('style', style)
        bubbles.appendChild(bubble);
      }
    }

  }

}
