import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { socials_config } from '../../../../config/socials';
import { AppHelperService } from '../../services/app-helper.service';

@Component({
    selector: 'app-v3-footer',
    templateUrl: './v3-footer.component.html',
    styleUrls: ['./v3-footer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class V3FooterComponent implements OnInit {

    socials_config = socials_config

    constructor(private appHelperService: AppHelperService) {

    }
    ngOnInit(): void {
        this.setBubbles();
    }

    generateRandomNumbers(low: number, high: number, suffix: string) {
        const randomNumber = this.appHelperService.generateRandomNumbers(low, high);
        return randomNumber + suffix;
    }

    setBubbles() {

        let totalBubbles = window.innerWidth / 8;

        if (totalBubbles < 100) {
            totalBubbles = 100
        } else if (totalBubbles > 500) {
            totalBubbles = 200
        }
        if (window.innerWidth < 500){
            totalBubbles = 40
        }

        let bubbles = document.querySelector('.bubbles') as HTMLElement;
        if (bubbles) {
            for (let i = 0; i < totalBubbles; i += 1) {
                let bubble = document.createElement('div');
                let style = '--size: ' + this.generateRandomNumbers(6, 18, 'rem') + ';';
                style += ' --distance: ' + this.generateRandomNumbers(4, 12, 'rem') + ';';
                style += ' --position: ' + this.generateRandomNumbers(-10, 110, '%') + ';';
                style += ' --time: ' + this.generateRandomNumbers(2, 8, 's') + ';';
                style += ' --delay: ' + this.generateRandomNumbers(-1, 8, 's') + ';';
                bubble.classList.add('bubble');
                bubble.setAttribute('style', style);
                bubbles.appendChild(bubble);
            }
        }

    }

    openLink(url: string) {
        this.appHelperService.launchLink(url);
    }

}
