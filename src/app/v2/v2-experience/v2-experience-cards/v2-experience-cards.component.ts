import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-v2-experience-cards',
  templateUrl: './v2-experience-cards.component.html',
  styleUrls: ['./v2-experience-cards.component.scss']
})
export class V2ExperienceCardsComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() experienceCard: any;
  @Input() childIndex: any;


}
