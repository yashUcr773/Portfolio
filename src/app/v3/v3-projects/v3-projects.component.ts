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
        'title': 'Project 1',
        'image': 'https://www.nibib.nih.gov/sites/default/files/inline-images/AI%20600%20x%20400.jpg',
        'description': "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with",
        'github_link': 'https://github.com/yashUcr773/CS_224_Foundations_of_ML',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'ai',
        'fadeStyle': fadeStyle['ai']
      },
      {
        'title': 'Project 2',
        'image': 'https://intellipaat.com/mediaFiles/2019/02/DATA-STRUCTURES-with-Python.png',
        'description': "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        'github_link': 'https://github.com/yashUcr773/CS_171_Intro_to_ML',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'dsa',
        'fadeStyle': fadeStyle['dsa']
      },
      {
        'title': 'Project 3',
        'image': 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png',
        'description': "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
        'github_link': 'https://github.com/yashUcr773/CS_228_Intro_to_DL',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'web',
        'fadeStyle': fadeStyle['web']
      },
      {
        'title': 'Project 4',
        'image': 'https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png',
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. ",
        'github_link': 'https://github.com/yashUcr773/CS_205_AI',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'web',
        'fadeStyle': fadeStyle['web']
      },
      {
        'title': 'Project 1',
        'image': 'https://www.nibib.nih.gov/sites/default/files/inline-images/AI%20600%20x%20400.jpg',
        'description': "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with",
        'github_link': 'https://github.com/yashUcr773/CS_224_Foundations_of_ML',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'web',
        'fadeStyle': fadeStyle['web']
      },
      {
        'title': 'Project 2',
        'image': 'https://intellipaat.com/mediaFiles/2019/02/DATA-STRUCTURES-with-Python.png',
        'description': "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
        'github_link': 'https://github.com/yashUcr773/CS_171_Intro_to_ML',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'web',
        'fadeStyle': fadeStyle['web']
      },
      {
        'title': 'Project 3',
        'image': 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200203200336/13-Things-You-Should-Know-Before-You-Enter-In-Web-Development.png',
        'description': "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
        'github_link': 'https://github.com/yashUcr773/CS_228_Intro_to_DL',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'ai',
        'fadeStyle': fadeStyle['ai']
      },
      {
        'title': 'Project 4',
        'image': 'https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png',
        'description': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. ",
        'github_link': 'https://github.com/yashUcr773/CS_205_AI',
        'demo_link': 'https://www.cs.usfca.edu/~galles/visualization/RecQueens.html',
        'tags': 'dsa',
        'fadeStyle': fadeStyle['dsa']
      }
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
