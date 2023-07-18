import { Component, HostListener, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
    selector: 'app-v3-home',
    templateUrl: './v3-home.component.html',
    styleUrls: ['./v3-home.component.scss']
})
export class V3HomeComponent implements OnInit {

    baseScrollHeight: number = 100;

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
    }

    // @HostListener('scroll', ['$event']) // for scroll events of the current element
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll() {
        let mybutton: any = document.getElementById("buttonToTop");

        if (document.body.scrollTop > this.baseScrollHeight || document.documentElement.scrollTop > this.baseScrollHeight) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }
    }


    backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

}