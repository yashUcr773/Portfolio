import { Component } from '@angular/core';
import { AppHelperService } from 'src/app/services/app-helper.service';

@Component({
    selector: 'app-projects-home',
    templateUrl: './projects-home.component.html',
    styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent {

    project_cards: ProjectCards[] = [];
    all_projects: ProjectCards[] = [];
    display_cards = 'all';

    ngOnInit(): void {
        this.initializeCards();
    }

    constructor(private appHelperService: AppHelperService) {

    }

    initializeCards() {

        this.all_projects = [
            {
                'title': 'Portfolio Website',
                'image': '../../../assets/Project_images/portfolio_screenshot.jpg',
                'description': "A website that presents information about myself and showcases the various projects I have been involved in.",
                'github_link': 'https://github.com/yashUcr773/Portfolio',
                'demo_link': 'https://yashaggarwal.com/',
                'tags': ['ai', 'web'],
                'fadeStyle': fadeStyle['web']
            },
            {
                'title': 'N Puzzle Solver',
                'image': '../../../assets/Project_images/NPuzzle.png',
                'description': "A project allowing users to either solve a randomly generated n-puzzle or opt for the AI to solve it on their behalf. Implemented using the versatile search functionality, the solver provides various cost functions that influence the time and computational requirements for achieving the solution.",
                'github_link': 'https://github.com/yashUcr773/N-Puzzle-Solver',
                'demo_link': 'https://n-puzzle-solver.netlify.app/',
                'tags': ['ai', 'web'],
                'fadeStyle': fadeStyle['ai']
            }, {
                'title': 'Feature Selector for ML models',
                'image': '../../../assets/Project_images/featureSelector.png',
                'description': "A project that aims to identify the most relevant and irrelevant features through forward selection, backward elimination, and nearest neighbor search techniques. By employing these methods, the project seeks to enhance the understanding and improve performance of artificial intelligence algorithms in feature selection, contributing to the overall knowledge and expertise of the students.",
                'github_link': 'https://github.com/yashUcr773/CS_205_AI/tree/main/Projects/Project%202',
                'tags': ['ai'],
                'fadeStyle': fadeStyle['ai']
            },
            {
                'title': 'Image Colorization using AutoEncoders',
                'image': '../../../assets/Project_images/ImageColorization.jpg',
                'description': "This project aims to implement image colorization using autoencoders, a type of neural network architecture that can learn to encode and decode images while preserving their color information, converting grayscale images to colorized versions.",
                'github_link': 'https://github.com/yashUcr773/CS_228_Intro_to_DL/tree/main/Projects/Project%201',
                'tags': ['ai'],
                'fadeStyle': fadeStyle['ai']
            }
        ]

        this.project_cards = this.all_projects;
    }

    filterCards(type: AllowedTags) {
        this.display_cards = type;

        this.project_cards = this.all_projects.filter(elem => {
            if (type == 'all') return true
            return elem.tags.indexOf(type) > -1
        })
    }

    launchLink(url: string) {
        this.appHelperService.launchLink(url, false);
    }

}

interface ProjectCards {
    title: string;
    image: string;
    description: string;
    github_link?: string;
    demo_link?: string;
    tags: AllowedTags[];
    fadeStyle: fadeStyle;
}

type AllowedTags = 'all' | 'ai' | 'dsa' | 'web';

enum fadeStyle {
    ai = "fade-left",
    web = "fade-right",
    dsa = "fade-up"
}
