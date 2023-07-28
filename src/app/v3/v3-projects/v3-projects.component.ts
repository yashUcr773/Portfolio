import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { AppHelperService } from 'src/app/services/app-helper.service';

@Component({
    selector: 'app-v3-projects',
    templateUrl: './v3-projects.component.html',
    styleUrls: ['./v3-projects.component.scss']
})
export class V3ProjectsComponent implements OnInit {

    constructor(private appHelperService: AppHelperService) {

    }
    project_cards: ProjectCards[] = [];
    display_cards = 'all';

    ngOnInit(): void {
        this.initializeCards()
    }

    initializeCards() {

        this.project_cards = [
            {
                'title': 'Portfolio (this Website)',
                'image': '../../../assets/Project_images/portfolio_screenshot.jpg',
                'description': "A website that presents information about myself and showcases the various projects I have been involved in.",
                'github_link': 'https://github.com/yashUcr773/Portfolio',
                'demo_link': 'https://yashaggarwal.com/',
                'tags': 'web',
                'fadeStyle': fadeStyle['web']
            },
            {
                'title': 'N Puzzle Solver',
                'image': '../../../assets/Project_images/NPuzzle.png',
                'description': "A project allowing users to either solve a randomly generated n-puzzle or opt for the AI to solve it on their behalf. Implemented using the versatile search functionality, the solver provides various cost functions that influence the time and computational requirements for achieving the solution.",
                'github_link': 'https://github.com/yashUcr773/N-Puzzle-Solver',
                'demo_link': 'https://n-puzzle-solver.netlify.app/',
                'tags': 'ai',
                'fadeStyle': fadeStyle['ai']
            }
        ]
    }

    filterCards(type: string) {
        this.display_cards = type;
        setTimeout(() => {
            AOS.refresh()
        })
    }

    launchLink(url: string, newTab = true) {
        this.appHelperService.launchLink(url, newTab);
    }

}

interface ProjectCards {
    title: string;
    image: string;
    description: string;
    github_link?: string;
    demo_link?: string;
    tags: 'all' | 'ai' | 'dsa' | 'web';
    fadeStyle: fadeStyle;
}

enum fadeStyle {
    ai = "fade-left",
    web = "fade-right",
    dsa = "fade-up"
}
