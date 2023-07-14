import { Injectable } from '@angular/core';

@Injectable()
export class AppHelperService {

    launchLink(url: string) {
        let link: any = document.querySelector('#external-link-button');
        link.target = '_blank';
        link.href = url;
        link.click();
    }

    generateRandomNumbers(low: number, high: number) {
        const randomNumber = (Math.random() * (high - low + 1)) + low;
        return randomNumber;
    }

}