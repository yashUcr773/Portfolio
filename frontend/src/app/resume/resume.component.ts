import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { socials_config } from 'config/socials';
import { Router } from '@angular/router';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements AfterViewInit {
    socials_config = socials_config;

    constructor(private router: Router) {

    }

    ngAfterViewInit(): void {
        this.launchLink(socials_config.resume);
    }

    launchLink(url: string, newTab = true) {
        let link = document.querySelector('#external-link-button') as HTMLAnchorElement;
        if (link) {
            if (newTab) {
                link.target = '_blank';
            }
            link.href = url;
            link.click();
        }
        this.router.navigate(['/']);
    }
}
