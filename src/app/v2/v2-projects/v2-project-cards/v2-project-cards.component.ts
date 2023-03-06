import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-v2-project-cards',
	templateUrl: './v2-project-cards.component.html',
	styleUrls: ['./v2-project-cards.component.scss']
})
export class V2ProjectCardsComponent implements OnInit {

	@Input() cardObject: any;
	constructor() {

	}
	ngOnInit(): void {
	}

	launchGithub(link: any) {
		window.open(link, '_blank');
	}

	launchNewTab(link: any) {
		window.open(link, '_blank');
	}

}
