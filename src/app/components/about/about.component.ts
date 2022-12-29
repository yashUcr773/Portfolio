import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor() {

	}

	ngOnInit(): void {
		this.draw_chart()
	}

	draw_chart() {

		const canv: any = document.getElementById('myChart');
		if (canv == null) { return; }

		const data = {
			labels: [
				'Red',
				'Blue',
				'Yellow'
			],
			datasets: [{
				label: 'My First Dataset',
				data: [300, 50, 100],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)'
				],
				hoverOffset: 4
			}]
		};

		new Chart(canv, {
			type: 'pie',
			data: data,
		});

	}



}
