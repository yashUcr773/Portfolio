import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-animated-matrix',
	templateUrl: './animated-matrix.component.html',
	styleUrls: ['./animated-matrix.component.scss']
})
export class AnimatedMatrixComponent implements OnInit {

	letters: any = [
		'HTML', 'CSS', 'Javascript',
		'Angular', 'Electron',
		'Machine Learning',
		'Artificial Intelligence',
		'MLOps',
		'Deep Learning',
		'Computer Vision',
		'Image Processing'
	];
	fontSize = 20;
	refreshRate = 45;

	constructor() {

	}

	ngOnInit(): void {

		this.animate_canvas();
	}

	animate_canvas() {
		// Initialising the canvas
		let canvas: any = document.querySelector('#matrix_canvas');
		let ctx = canvas.getContext('2d');

		// Setting the width and height of the canvas
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let columns: any = canvas.width / this.fontSize;

		// Setting up the drops
		let drops: any = [];

		for (let i = 0; i < columns; i++) {
			drops[i] = 1;
		}

		// Setting up the draw function
		let draw = () => {
			// TODO: Update color here in case of theme change 
			ctx.fillStyle = 'rgba(0, 0, 0, .1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			for (var i = 0; i < drops.length; i++) {
				var text = this.letters[Math.floor(Math.random() * this.letters.length)];
				
				// TODO: Update color here in case of theme change 
				ctx.fillStyle = '#00ff00';
				ctx.fillText(text, i * this.fontSize, drops[i] * this.fontSize);
				drops[i]++;
				if (drops[i] * this.fontSize > canvas.height && Math.random() > .95) {
					drops[i] = 0;
				}
			}
		}

		// Loop the animation
		setInterval(draw, this.refreshRate);
	}

}