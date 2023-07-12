import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-v3-hero',
  templateUrl: './v3-hero.component.html',
  styleUrls: ['./v3-hero.component.scss']
})
export class V3HeroComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      smartBackspace: true,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 2000,
      shuffle: true,
      showCursor: false
    });

  }

  createRange(number: any) {
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  makeCall() {
    console.log('call made')
    console.log('call made')
    console.log('call made')
    this.http.get('apigateway/data1').subscribe((response) => {
      console.log(response);
    });
    this.http.get('apigateway/data2').subscribe((response) => {
      console.log(response);
    });
    this.http.post('apigateway/data1', { 'body': 'text' }).subscribe((response) => {
      console.log(response);
    });
  }

}
