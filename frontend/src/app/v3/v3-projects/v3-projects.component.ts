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
                'title': 'SwiftChat',
                'image': '../../../assets/Project_images/chat_app.jpg',
                'description': "Introducing a real-time chat app made with the MERN stack, for sending and recieving messages from and to friends.",
                'github_link': 'https://github.com/yashUcr773/chat_app',
                'demo_link': 'https://chat.swiftchat.dev',
                'tags': 'web',
                'fadeStyle': fadeStyle['web']
            },
            {
                'title': 'Shtr',
                'image': '../../../assets/Project_images/url-shortener.jpg',
                'description': "Introducing a sleek URL shortening solution engineered with the MERN stack, streamlining long URLs into concise links.",
                'github_link': 'https://github.com/yashUcr773/URLShortner',
                'demo_link': 'https://app.shtr.dev/',
                'tags': 'web',
                'fadeStyle': fadeStyle['web']
            },
            {
                'title': 'DigitalDime',
                'image': '../../../assets/Project_images/e-wallet.jpg',
                'description': "Introducing a mock e-wallet app created with MERN stack, that can be used to send and recieve money from contacts.",
                'github_link': 'https://github.com/yashUcr773/e_wallet_app',
                'demo_link': 'https://app.digitaldime.win',
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
            },
            {
                'title': 'Feature Selector for ML models',
                'image': '../../../assets/Project_images/featureSelector.png',
                'description': "A project that aims to identify the most relevant and irrelevant features through forward selection, backward elimination, and nearest neighbor search techniques. By employing these methods, the project seeks to enhance the understanding and improve performance of artificial intelligence algorithms in feature selection, contributing to the overall knowledge and expertise of the students.",
                'github_link': 'https://github.com/yashUcr773/CS_205_AI/tree/main/Projects/Project%202',
                'tags': 'ai',
                'fadeStyle': fadeStyle['ai']
            },
            {
                'title': 'Image Colorization using AutoEncoders',
                'image': '../../../assets/Project_images/ImageColorization.jpg',
                'description': "This project aims to implement image colorization using autoencoders, a type of neural network architecture that can learn to encode and decode images while preserving their color information, converting grayscale images to colorized versions.",
                'github_link': 'https://github.com/yashUcr773/CS_228_Intro_to_DL/tree/main/Projects/Project%201',
                'tags': 'ai',
                'fadeStyle': fadeStyle['ai']
            },
            {
                'title': 'Detection of phishing websites',
                'image': '../../../assets/Project_images/Phishing_websites.jpg',
                'description': "This project aims to develop an advanced and robust system capable of identifying and flagging fraudulent websites that attempt to deceive users into divulging sensitive information, such as login credentials and financial details. Leveraging cutting-edge technologies like machine learning, data analytics, and website analysis, the system will analyze various features and patterns characteristic of phishing websites to distinguish them from legitimate ones.",
                'github_link': 'https://github.com/yashUcr773/CS_235_Data_Mining/tree/main/Projects/Detection%20of%20Phishing%20Websites',
                'tags': 'ai',
                'fadeStyle': fadeStyle['ai']
            },
            {
                'title': 'Image Captioning',
                'image': '../../../assets/Project_images/ImageCaptioning.png',
                'description': "This project aims to generate captions from images using a novel model YaHa that is based on the flamingo architecture and uses GPT3 and ViT vision transformers as backbone.",
                'github_link': 'https://github.com/yashUcr773/CS_260_NLG_with_DL/tree/main/Projects/ImageCaptioning',
                'tags': 'ai',
                'fadeStyle': fadeStyle['ai']
            },

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
