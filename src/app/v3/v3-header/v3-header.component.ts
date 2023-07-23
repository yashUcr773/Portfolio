import { Component, HostListener, OnInit } from '@angular/core';
import { AppHelperService } from '../../services/app-helper.service';
import { socials_config } from 'config/socials';

@Component({
    selector: 'app-v3-header',
    templateUrl: './v3-header.component.html',
    styleUrls: ['./v3-header.component.scss']
})

export class V3HeaderComponent implements OnInit {

    socials_config = socials_config;
    hamburgerActive = false;
    constructor(private appHelperService: AppHelperService) {

    }

    ngOnInit(): void {

    }

    @HostListener('window:resize', ['$event'])
    resizeHandler() {
        if (window.innerWidth > 600) {
            this.toggleHamburger(false);
        }
    }

    goto(section: string) {
        this.toggleHamburger(false);
        let element = document.querySelector('#' + section + "-section");
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    launchLink(url: string) {
        this.toggleHamburger(false);
        this.appHelperService.launchLink(url);
    }

    toggleHamburger(toggleValue?: boolean) {

        if (toggleValue != undefined) {
            this.hamburgerActive = toggleValue;
        } else {
            this.hamburgerActive = !this.hamburgerActive;
        }

        if (this.hamburgerActive == false) {
            document.querySelector('body')?.classList.remove('sidebarActive')
        } else {
            document.querySelector('body')?.classList.add('sidebarActive')
        }

    }

}
