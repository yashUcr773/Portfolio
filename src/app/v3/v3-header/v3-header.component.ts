import { Component, OnInit } from '@angular/core';
import { AppHelperService } from '../services/app-helper.service';
import { socials_config } from 'config/socials';

@Component({
    selector: 'app-v3-header',
    templateUrl: './v3-header.component.html',
    styleUrls: ['./v3-header.component.scss']
})

export class V3HeaderComponent implements OnInit {

    socials_config = socials_config;
    constructor(private appHelperService: AppHelperService) {

    }

    ngOnInit(): void {

    }

    goto(section: string) {
        let element = document.querySelector('#' + section + "-section");
        element?.scrollIntoView({ behavior: 'smooth' });

        let hamburger: any = document.querySelector('#nav-check');
        hamburger.checked = false;
    }

    launchLink(url: string) {
        this.appHelperService.launchLink(url);
    }

}
