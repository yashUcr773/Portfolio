import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-v2-home',
	templateUrl: './v2-home.component.html',
	styleUrls: ['./v2-home.component.scss']
})
export class V2HomeComponent implements OnInit {

	ngOnInit(): void {
	}

	constructor() {

	}

	sidebarActive = false;

	toggleSidebar(val?: boolean) {
		if (val != null) {
			this.sidebarActive = val;
		} else {
			this.sidebarActive = !this.sidebarActive
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: UIEvent) {

		if(window.innerWidth > 600) {
			this.sidebarActive = false;
		}

	}

}
