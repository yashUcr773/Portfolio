import { Component, HostListener, OnInit } from '@angular/core';
import { AppHelperService } from '../../services/app-helper.service';
import { socials_config } from 'config/socials';
import { ThemeHelperService } from 'src/app/services/theme-service';

@Component({
    selector: 'app-v3-header',
    templateUrl: './v3-header.component.html',
    styleUrls: ['./v3-header.component.scss']
})

export class V3HeaderComponent implements OnInit {

    socials_config = socials_config;
    hamburgerActive = false;
    darkTheme = false;

    constructor(private appHelperService: AppHelperService,
        private themeHelperService: ThemeHelperService) {
    }

    ngOnInit(): void {

        this.checkAndUpdateThemeIcon();
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

    toggleTheme(event: any) {
        this.darkTheme = !this.darkTheme;
        this.themeHelperService.applyTheme(this.darkTheme ? 'dark' : 'light')
    }

    checkAndUpdateThemeIcon() {
        let theme = localStorage.getItem('theme');
        this.darkTheme = theme == 'dark' ? true : false;
    }



}
