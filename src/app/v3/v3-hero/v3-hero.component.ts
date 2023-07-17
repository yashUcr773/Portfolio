import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AppHelperService } from '../services/app-helper.service';
import { socials_config } from 'config/socials';

@Component({
    selector: 'app-v3-hero',
    templateUrl: './v3-hero.component.html',
    styleUrls: ['./v3-hero.component.scss']
})
export class V3HeroComponent implements OnInit {

    socials_config = socials_config;
    constructor(private appHelperService: AppHelperService) {

    }

    ngOnInit(): void {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            loop: true,
            smartBackspace: true,
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 2000,
            shuffle: true,
            showCursor: false
        });

    }

    createRange(number: any) {
        return new Array(number).fill(0)
            .map((n, index) => index + 1);
    }

    goto(section: string) {
        let element = document.querySelector('#' + section + "-section");
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    launchLink(url: string) {
        this.appHelperService.launchLink(url);
    }

}
