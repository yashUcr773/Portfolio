import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgName, SVGS } from '../../../core/config';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-svgs',
    imports: [NgClass],
    standalone: true,
    templateUrl: './svgs.html',
    styleUrl: './svgs.scss',
})
export class Svgs {
    @Input({ required: true })
    svg: SvgName = 'sun';

    @Input() size = '48px';

    constructor(private sanitizer: DomSanitizer) { }

    get svgContent() {
        return this.sanitizer.bypassSecurityTrustHtml(SVGS[this.svg].svg);
    }

    get title() {
        return SVGS[this.svg].title;
    }
}
