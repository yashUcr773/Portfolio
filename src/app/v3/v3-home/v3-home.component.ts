import { Component, HostListener, OnInit } from '@angular/core';
@Component({
    selector: 'app-v3-home',
    templateUrl: './v3-home.component.html',
    styleUrls: ['./v3-home.component.scss']
})
export class V3HomeComponent implements OnInit {

    baseScrollHeight: number = 100;

    ngOnInit(): void {

    }

    // @HostListener('scroll', ['$event']) // for scroll events of the current element
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll() {
        let mybutton = document.getElementById("buttonToTop") as HTMLElement;

        if (mybutton) {

            if (document.body.scrollTop > this.baseScrollHeight || document.documentElement.scrollTop > this.baseScrollHeight) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }
        }
    }


    backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

}
