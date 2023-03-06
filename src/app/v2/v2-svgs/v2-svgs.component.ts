import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-v2-svgs',
	templateUrl: './v2-svgs.component.html',
	styleUrls: ['./v2-svgs.component.scss']
})
export class V2SvgsComponent implements OnInit {

	ngOnInit(): void {
		setInterval(() => {
			this.animateHeroSVG();
		}, 1000);
	}

	@Input() svg: string = "";

	animateHeroSVG() {

		let elements = ['a-one', 'a-two', 'a-three', 'a-four', 'a-five', 'a-six', 'a-seven', 'a-eight', 'a-nine', 'b-one', 'b-two', 'b-three'];
		
		let heroDiv:any = document.querySelector('.hero-svg');

		elements.forEach(element => {
			let elem:any = heroDiv.querySelector('.'+element);
			elem.style.opacity = Math.random();
		})

	}

}
