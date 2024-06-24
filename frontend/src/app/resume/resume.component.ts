import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { socials_config } from 'config/socials';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements AfterViewInit {
    socials_config = socials_config;

    constructor() {

    }

    ngAfterViewInit(): void {
        this.launchLink(socials_config.resume);
    }

    launchLink(url: string) {
        window.location.href = url
    }
}
