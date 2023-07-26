import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-v3-projects',
    templateUrl: './v3-projects.component.html',
    styleUrls: ['./v3-projects.component.scss']
})
export class V3ProjectsComponent implements OnInit {

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
                'description': " A Website that presents information about myself and showcases a diverse array of projects I have contributed to",
                'github_link': 'https://github.com/yashUcr773/Portfolio',
                'demo_link': 'https://yashaggarwal.com/',
                'tags': 'web',
                'fadeStyle': fadeStyle['web']
            },
        ]
    }

    filterCards(type: string) {
        this.display_cards = type;
        setTimeout(() => {
            AOS.refresh()
        })
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
