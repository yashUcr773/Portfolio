import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-v3-home',
  templateUrl: './v3-home.component.html',
  styleUrls: ['./v3-home.component.scss']
})
export class V3HomeComponent implements OnInit {


  ngOnInit(): void {
    AOS.init();
  }

}
