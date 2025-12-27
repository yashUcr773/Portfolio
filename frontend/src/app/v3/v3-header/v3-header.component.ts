import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AppHelperService } from '../../services/app-helper.service';
import { socials_config } from 'config/socials';
import { ThemeHelperService } from 'src/app/services/theme-service';

@Component({
    selector: 'app-v3-header',
    templateUrl: './v3-header.component.html',
    styleUrls: ['./v3-header.component.scss']
})

export class V3HeaderComponent implements OnInit, AfterViewInit {

    socials_config = socials_config;
    hamburgerActive = false;
    darkTheme = false;
    resizeTimer: ReturnType<typeof setTimeout> | undefined = undefined
    generateFunctionReference: (() => void) | undefined = undefined

    constructor(private appHelperService: AppHelperService,
        private themeHelperService: ThemeHelperService) {
    }

    ngOnInit(): void {

        this.checkAndUpdateThemeIcon();
        this.generateFunctionReference = this.generateStars.bind(this)
    }

    ngAfterViewInit(): void {
        this.generateStars();
    }

    @HostListener('window:resize', ['$event'])
    resizeHandler() {
        if (window.innerWidth > 600) {
            this.toggleHamburger(false);
        }
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(this.generateFunctionReference!, 200);
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
        this.generateStars()
    }

    checkAndUpdateThemeIcon() {
        let theme = localStorage.getItem('theme');
        this.darkTheme = theme == 'dark' ? true : false;
    }

    generateStarLayer(id: string, count: number, size: number) {
        const el = document.getElementById(id);
        if (!el) return;

        const width = window.innerWidth;
        const height = window.innerHeight * 2; // IMPORTANT: 2x animation distance
        const color = getComputedStyle(document.body)
            .getPropertyValue('--v2_primary_background_star_color')
            .trim() || '#fff';

        const shadows = [];

        for (let i = 0; i < count; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            shadows.push(`${x}px ${y}px ${color}`);
        }

        el.style.boxShadow = shadows.join(', ');
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
    }

    // density tuned for performance
    generateStars() {
        const dpr = window.devicePixelRatio || 1;
        const area = window.innerWidth * window.innerHeight * dpr * dpr;
        const maxStars = 3000;
        const baseCount = Math.floor(area * (0.03 / 100));
        const count = Math.min(baseCount, maxStars);

        this.generateStarLayer('stars', count, 1);
        this.generateStarLayer('stars2', count, 2);
        this.generateStarLayer('stars3', count, 3);
        this.generateStarLayer('stars4', count, 1);
    }
}
