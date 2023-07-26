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
