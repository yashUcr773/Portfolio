import { Component, OnInit } from '@angular/core';
import TagCloud from 'TagCloud';
import { AppHelperService } from '../../services/app-helper.service';

@Component({
  selector: 'app-v3-experience',
  templateUrl: './v3-experience.component.html',
  styleUrls: ['./v3-experience.component.scss']
})
export class V3ExperienceComponent implements OnInit {
  activeIndex = 0;
  experiences: experience[] = [];

  constructor(private appHelperService: AppHelperService) { }

  ngOnInit(): void {
    this.initializeWordClouds();
    this.initExperiences();
  }


  initializeWordClouds() {

    const tagsWeb = [
      'JavaScript', 'CSS', 'HTML',
      'Angular', 'AWS', 'Docker',
      'Redis', 'Electron', 'RxDB',
      'Express', 'Node.js', 'CI/CD',
      'Travis', 'SCSS', 'jQuery',
    ];

    let elementWeb = document.querySelector('.word-cloud-web');
    if (elementWeb) {
      TagCloud(elementWeb, tagsWeb, {
        radius: 250,
        maxSpeed: 'normal',
        initSpeed: 'slow',
        keep: true
      });
    }

    const tagsAI = [
      'Python', 'Pandas', 'Numpy',
      'Seaborn', 'Classification', 'Regression',
      'Generative AI', 'Discriminative AI', 'Probabilistic AI',
      'Deep Learning', 'NLP', 'OpenCV',
      'AWS', 'LLM', 'ML',
    ];

    let elementAI = document.querySelector('.word-cloud-ai');
    if (elementAI) {
      TagCloud(elementAI, tagsAI, {
        radius: 250,
        maxSpeed: 'normal',
        initSpeed: 'slow',
        keep: true
      });
    }

    const tagsCombined = tagsAI.concat(tagsWeb)
    for (let i = tagsCombined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tagsCombined[i], tagsCombined[j]] = [tagsCombined[j], tagsCombined[i]];
    }


    let elementCombined = document.querySelector('.word-cloud-combined');
    if (elementCombined) {
      TagCloud(elementCombined, tagsCombined, {
        radius: 250,
        maxSpeed: 'normal',
        initSpeed: 'slow',
        keep: true
      });
    }
  }

  updateActive(id: number) {

    this.activeIndex = this.activeIndex == id ? 0 : id;

  }

  initExperiences() {
    this.experiences = [
      {
        'Company': 'Compro Technologies',
        'designation': 'Software Developer',
        'companyLink': 'https://www.comprotechnologies.com/home',
        'start': 'July-2019',
        'end': 'July-2022',
        showBullets: true,
        showMessage: true,
        showTechStack: true,
        'message': 'Part of a closely-knit team comprising developers, designers, and testers who are collectively responsible for the development of a cutting-edge e-learning platform intended to accommodate more than 20,000 concurrent users worldwide.',
        'bulletsHeading': 'Highlights',
        'bullets': [
          'Worked on Electron to create a multi-OS desktop app version of the website to support offline capabilities.',
          'Developed scalable features and configuration-driven applications to support modular and dynamic requirements.',
        ],
        'techHeading': 'Tech Stack',
        'tech': ['RxDB', 'Express', 'Angular5+', 'Angularjs', 'Nodejs', 'Electron', 'AWS']
      },
      {
        'Company': 'HCL Infotech',
        'designation': 'Summer Intern',
        'companyLink': 'https://hcl.com/',
        'start': 'June-2018',
        'end': 'July-2018',
        showBullets: false,
        showMessage: true,
        showTechStack: true,
        message: 'Part of an intern group tasked with gathering requirements, creating a roadmap, and developing features for our in-house libraries. Through our efforts, we achieved a remarkable 40% increase in productivity by automating numerous manual tasks.',
        'techHeading': 'Tech Stack',
        'tech': ['Java', 'MySQL', 'SpringBoot']
      }
    ]
  }

  launchLink(url: string) {
    this.appHelperService.launchLink(url)
  }

}

interface experience {
  Company: string
  designation: string
  companyLink: string
  start: string
  end: string
  showBullets: boolean
  showMessage: boolean
  showTechStack: boolean
  message?: string
  bulletsHeading?: string
  techHeading?: string
  bullets?: string[]
  tech?: string[]
}