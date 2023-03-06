import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-v2-projects',
	templateUrl: './v2-projects.component.html',
	styleUrls: ['./v2-projects.component.scss']
})
export class V2ProjectsComponent implements OnInit {

	constructor() {

	}

	webCards: any = [];
	DSACards: any = [];
	MLCards: any = [];

	ngOnInit(): void {
		this.initializeCards();
	}

	initializeCards() {
		this.webCards = [
			{
				'imgSrc': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
				'title': 'Visual Img',
				'desc': 'Visual Img description as image captioning asasd asdas',
				'github_link': 'https://github.com/yashUcr773',
				'newtab_link': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
			},
			{
				'imgSrc': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
				'title': 'Visual Img',
				'desc': 'Visual Img description as image captioning asasd asdas',
				'github_link': 'https://github.com/yashUcr773',
				'newtab_link': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
			},
		]

		this.DSACards = [
			{
				'imgSrc': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
				'title': 'Visual Img',
				'desc': 'Visual Img description as image captioning asasd asdas',
				'github_link': 'https://github.com/yashUcr773',
				'newtab_link': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
			},
			{
				'imgSrc': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
				'title': 'Visual Img',
				'desc': 'Visual Img description as image captioning asasd asdas',
				'github_link': 'https://github.com/yashUcr773',
				'newtab_link': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
			},
		]

		this.MLCards = [
			{
				'imgSrc': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
				'title': 'Visual Img',
				'desc': 'Visual Img description as image captioning asasd asdas',
				'github_link': 'https://github.com/yashUcr773',
				'newtab_link': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
			},
			{
				'imgSrc': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
				'title': 'Visual Img',
				'desc': 'Visual Img description as image captioning asasd asdas',
				'github_link': 'https://github.com/yashUcr773',
				'newtab_link': 'https://images.unsplash.com/photo-1678005215861-8b75b89aea1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
			},
		]
	}

}
