import { Injectable } from "@angular/core";

@Injectable()

export class ThemeHelperService {

    applyTheme(theme: 'light' | 'dark') {

        document.querySelector('body')?.classList.remove('theme-light');
        document.querySelector('body')?.classList.remove('theme-dark');
        document.querySelector('body')?.classList.add('theme-' + theme);
        localStorage.setItem('theme', theme);

    }

    checkAndApplytheme() {

        // assume dark by default.
        let dark = false;

        // get theme from localstorage or system default.
        let lsTheme = localStorage.getItem('theme');
        if (lsTheme && lsTheme == 'dark') {
            dark = true;
        } else if (!lsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dark = true;
        }
        this.applyTheme(dark ? 'dark' : 'light');

    }
}