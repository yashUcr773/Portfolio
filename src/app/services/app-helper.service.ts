import { Injectable } from '@angular/core';
import { constants } from 'config/constants';

@Injectable()
export class AppHelperService {

    launchLink(url: string) {
        let link = document.querySelector('#external-link-button') as HTMLAnchorElement;
        if (link) {
            link.target = '_blank';
            link.href = url;
            link.click();
        }
    }

    generateRandomNumbers(low: number, high: number) {
        const randomNumber = (Math.random() * (high - low + 1)) + low;
        return randomNumber;
    }

    getURLPrefix() {
        return constants.apiBaseURL;
    }

}