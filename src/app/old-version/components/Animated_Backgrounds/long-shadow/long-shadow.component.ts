import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-long-shadow',
	templateUrl: './long-shadow.component.html',
	styleUrls: ['./long-shadow.component.scss']
})
export class LongShadowComponent implements OnInit {


	constructor(
	) { }

	ngOnInit() {
		this.animate_canvas()
	}

	animate_canvas() {

		let canv: any = document.getElementById("long_shadow_canvas");
		if (canv == null) {
			return
		}
		let ctx = canv.getContext("2d");

		function resize() {
			var box = canv.getBoundingClientRect();
			canv.width = box.width;
			canv.height = box.height;
		}

		var light = {
			x: 160,
			y: 200
		}

		var colors = ["#f5c156", "#e6616b", "#5cd3ad"];

		function drawLight() {
			ctx.beginPath();
			ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
			var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
			gradient.addColorStop(0, "#3b4654");
			gradient.addColorStop(1, "#012417");
			ctx.fillStyle = gradient;
			ctx.fill();

			// ctx.beginPath();
			// ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
			// gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
			// gradient.addColorStop(0, "#fff");
			// gradient.addColorStop(1, "#3b4654");
			// ctx.fillStyle = gradient;
			// ctx.fill();
		}



		let boxes: any = [];

		function draw() {
			ctx.clearRect(0, 0, canv.width, canv.height);
			drawLight();

			for (var i = 0; i < boxes.length; i++) {
				boxes[i].rotate();
				boxes[i].drawShadow();
			};
			for (var i = 0; i < boxes.length; i++) {
				collisionDetection(i)
				boxes[i].draw();
			};
			requestAnimationFrame(draw);
		}

		resize();
		draw();

		while (boxes.length < 14) {
			boxes.push(new Box(canv, ctx, colors, light));
		}

		window.onresize = resize;
		let x: any = document.querySelector('.landing_section')
		x.onmousemove = function (e: any) {
			light.x = e.pageX;
			light.y = e.pageY;
		}
		canv.onmousemove = function (e: any) {
			light.x = e.pageX;
			light.y = e.pageY;
		}


		function collisionDetection(b: any) {
			for (var i = boxes.length - 1; i >= 0; i--) {
				if (i != b) {
					var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
					var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
					var d = Math.sqrt(dx * dx + dy * dy);
					if (d < boxes[b].half_size + boxes[i].half_size) {
						boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size -= 1 : 1;
						boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size -= 1 : 1;
					}
				}
			}
		}
	}

}

class Box {

	canv: any;
	ctx: any;
	colors: any;
	half_size: any;
	x: any;
	y: any;
	r: any;
	shadow_length: any;
	color: any;
	light: any;
	constructor(
		canv: any,
		ctx: any,
		colors: any,
		light: any
	) {
		this.canv = canv;
		this.ctx = ctx;
		this.colors = colors;
		this.light = light;

		this.half_size = Math.floor((Math.random() * 50) + 1);
		this.x = Math.floor((Math.random() * this.canv.width) + 1);
		this.y = Math.floor((Math.random() * this.canv.height) + 1);
		this.r = Math.random() * Math.PI;
		this.shadow_length = 2000;
		this.color = this.colors[Math.floor((Math.random() * this.colors.length))];
	}



	getDots() {

		var full = (Math.PI * 2) / 4;


		var p1 = {
			x: this.x + this.half_size * Math.sin(this.r),
			y: this.y + this.half_size * Math.cos(this.r)
		};
		var p2 = {
			x: this.x + this.half_size * Math.sin(this.r + full),
			y: this.y + this.half_size * Math.cos(this.r + full)
		};
		var p3 = {
			x: this.x + this.half_size * Math.sin(this.r + full * 2),
			y: this.y + this.half_size * Math.cos(this.r + full * 2)
		};
		var p4 = {
			x: this.x + this.half_size * Math.sin(this.r + full * 3),
			y: this.y + this.half_size * Math.cos(this.r + full * 3)
		};

		return {
			p1: p1,
			p2: p2,
			p3: p3,
			p4: p4
		};
	}

	rotate() {
		var speed = (60 - this.half_size) / 20;
		this.r += speed * 0.002;
		this.x += speed;
		this.y += speed;
	}

	draw() {
		var dots = this.getDots();
		this.ctx.beginPath();
		this.ctx.moveTo(dots.p1.x, dots.p1.y);
		this.ctx.lineTo(dots.p2.x, dots.p2.y);
		this.ctx.lineTo(dots.p3.x, dots.p3.y);
		this.ctx.lineTo(dots.p4.x, dots.p4.y);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();


		if (this.y - this.half_size > this.canv.height) {
			this.y -= this.canv.height + 100;
		}
		if (this.x - this.half_size > this.canv.width) {
			this.x -= this.canv.width + 100;
		}
	}

	drawShadow() {
		let dots: any = this.getDots();
		let angles = [];
		let points = [];

		for (let dot in dots) {
			let angle = Math.atan2(this.light.y - dots[dot].y, this.light.x - dots[dot].x);
			let endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
			let endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
			angles.push(angle);
			points.push({
				endX: endX,
				endY: endY,
				startX: dots[dot].x,
				startY: dots[dot].y
			});
		};

		for (var i = points.length - 1; i >= 0; i--) {
			var n = i == 3 ? 0 : i + 1;
			this.ctx.beginPath();
			this.ctx.moveTo(points[i].startX, points[i].startY);
			this.ctx.lineTo(points[n].startX, points[n].startY);
			this.ctx.lineTo(points[n].endX, points[n].endY);
			this.ctx.lineTo(points[i].endX, points[i].endY);
			
			// TODO: Update color here in case of theme change 
			this.ctx.fillStyle = "#012417";
			this.ctx.fill();
		};
	}
}
