import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import { ThemeHelperService } from './services/theme-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'portfolio';

    constructor(private themeHelperService: ThemeHelperService) {

    }

    ngOnInit(): void {

        AOS.init({
            // Global settings:
            // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            // initClassName: 'aos-init', // class applied after initialization
            // animatedClassName: 'aos-animate', // class applied on animation
            // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            // offset: 200, // offset (in px) from the original trigger point
            delay: 100, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            easing: 'ease-in', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });

        this.themeHelperService.checkAndApplytheme();

        window.scrollTo(0, 0);

        this.followCurser()
    }

    followCurser() {

        const curserOffset = -32;
        const cursor = document.querySelector("#cursor") as HTMLDivElement;
        const cursorBorder = document.querySelector("#cursor-border") as HTMLDivElement;
        const cursorPos = { x: 0, y: 0 };
        const cursorBorderPos = { x: 0, y: 0 };

        document.addEventListener("mousemove", (e) => {
            cursorPos.x = e.clientX;
            cursorPos.y = e.clientY;

            cursor.style.transform = `translate(${e.clientX - curserOffset}px, ${e.clientY - curserOffset}px)`;
        });

        requestAnimationFrame(function loop() {
            const easting = 8;
            cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x - curserOffset) / easting;
            cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y - curserOffset) / easting;

            cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
            requestAnimationFrame(loop);
        });


    }



}
