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
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'FinTracker',
                'image': '../../../assets/Project_images/FinTracker.png',
                'description': "Introducing a web-application track and manage your finances and transaction. Generate insights and plan better.",
                'github_link': 'https://github.com/yashUcr773/FinTracker',
                'demo_link': 'https://FinTracker.uk/',
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'MiroClone',
                'image': '../../../assets/Project_images/Miro.png',
                'description': "Introducing a web-application plan and colaborate with others in real-time.",
                'github_link': 'https://github.com/yashUcr773/miroClone',
                'demo_link': 'https://miroclone.uk/',
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'Discord',
                'image': '../../../assets/Project_images/Discord.png',
                'description': "Introducing a web-application to connect with your friends, message and talk with them. Share document and find poeple with similar interests.",
                'github_link': 'https://github.com/yashUcr773/discordClone',
                'demo_link': 'https://discordclone.uk/',
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'Spotify',
                'image': '../../../assets/Project_images/Spotify.png',
                'description': "Introducing a web-application to listen to all your favorite music at one place.",
                'github_link': 'https://github.com/yashUcr773/SpotifyClone',
                'demo_link': 'https://spotifyclone.uk/',
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'SwiftChat',
                'image': '../../../assets/Project_images/chat_app.jpg',
                'description': "Introducing a real-time chat app made with the MERN stack, for sending and recieving messages from and to friends.",
                'github_link': 'https://github.com/yashUcr773/chat_app',
                'demo_link': 'https://swiftchat.dev/',
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'Shtr',
                'image': '../../../assets/Project_images/url-shortener.jpg',
                'description': "Introducing a sleek URL shortening solution engineered with the MERN stack, streamlining long URLs into concise links.",
                'github_link': 'https://github.com/yashUcr773/URLShortner',
                'demo_link': 'https://app.shtr.dev/',
                'fadeStyle': fadeStyle.up
            },
            {
                'title': 'DigitalDime',
                'image': '../../../assets/Project_images/e-wallet.jpg',
                'description': "Introducing a mock e-wallet app created with MERN stack, that can be used to send and recieve money from contacts.",
                'github_link': 'https://github.com/yashUcr773/e_wallet_app',
                'demo_link': 'https://app.digitaldime.win',
                'fadeStyle': fadeStyle.up
            },



        ]
    }



    launchLink(url: string, newTab = true) {
        this.appHelperService.launchLink(url, newTab);
    }

}

interface ProjectCards {
    title: string;
    image: string;
    description: string;
    github_link: string;
    demo_link: string;
    fadeStyle: fadeStyle;
}

enum fadeStyle {
    left = "fade-left",
    right = "fade-right",
    up = "fade-up",
    neutral = "fade"
}
