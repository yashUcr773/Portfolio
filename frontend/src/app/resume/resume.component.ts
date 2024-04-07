import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { socials_config } from 'config/socials';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
    socials_config = socials_config;

    ngOnInit(): void {
        window.open(socials_config.resume);
    }
}
