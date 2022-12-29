import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    constructor(
    ) { }

    ngOnInit() {
        this.animate_introduction_greeting()
    }

    async delay(time: number) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, time)
        })

    }


    async animate_introduction_greeting() {
        let span = document.getElementById('introduction_greeting');

        if (span == null) {
            return;
        }

        this.delay(1000)

        let text_elements: any = span.getElementsByClassName('text_element');

        let element: any;
        for (element of Array.from(text_elements)) {

            // remove hide class
            element.classList.remove('hide');

            // add text in class
            element.classList.add('text_in');

            await this.delay(100)

            element.addEventListener("mouseover", addRubberBand);
            element.addEventListener("animationend", removeRubberBand);
            function addRubberBand(e: any) {
                e.target.classList.add("text_hover");
            }
            function removeRubberBand(e: any) {
                e.target.classList.remove('text_in');
                e.target.classList.remove("text_hover");
            }
        }


    }

}
