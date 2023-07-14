import { Component, OnInit } from '@angular/core';
import TagCloud from 'TagCloud';

@Component({
  selector: 'app-v3-experience',
  templateUrl: './v3-experience.component.html',
  styleUrls: ['./v3-experience.component.scss']
})
export class V3ExperienceComponent implements OnInit {
  activeIndex = 0;
  experiences: any = [];

  ngOnInit(): void {
    this.initializeWordClouds();
    this.initExperiences();
  }


  initializeWordClouds() {
    const myTags = [
      'JavaScript', 'CSS', 'HTML',
      'C', 'C++', 'React',
      'Python', 'Java', 'git',
      'django', 'Node.js', 'OpenCV',
      'GCP', 'MySQL', 'jQuery',
    ];

    let element: any = document.querySelector('.word-cloud');
    TagCloud(element, myTags, {
      radius: 250,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      keep: true
    });
  }

  updateActive(id: number) {

    this.activeIndex = this.activeIndex == id ? 0 : id;

  }

  initExperiences() {
    this.experiences = [
      {
        'Company': 'Compro Technologies',
        'start': '1-July-2019',
        'end': '25-July-2022',
        'bulletsHeading': 'Roles and Responsibilities',
        'bullets': [
          'Increased growth by 200%',
          'Increased Revenue by 300%',
          'Reduced cost by 400%'
        ],
        'techHeading': 'Tools and Technologies',
        'tech': ['AWS', 'Node', 'Angular', 'Express']
      },
      {
        'Company': 'Compro Technologies',
        'start': '1-July-2019',
        'end': '25-July-2022',
        'bulletsHeading': 'Roles and Responsibilities',
        'bullets': [
          'Increased growth by 200%',
          'Increased Revenue by 300%',
          'Reduced cost by 400%'
        ],
        'techHeading': 'Tools and Technologies',
        'tech': ['AWS', 'Node', 'Angular', 'Express']
      }
    ]
  }

}