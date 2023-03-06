import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-v2-experience',
	templateUrl: './v2-experience.component.html',
	styleUrls: ['./v2-experience.component.scss']
})
export class V2ExperienceComponent implements OnInit {
	experienceCards: any = [];

	ngOnInit(): void {
		this.initializeCards();

	}

	initializeCards() {
		this.experienceCards = [
			{
				'type': 'work',
				'header': 'Compro Technologies',
				'designation': 'Full Stack Developer',
				'tenure': 'July 2019 - July 2022',
				'job_desc': [
					'Communicated with multi-disciplinary teams of designers, clients, mentors, and mentees on a daily basis.',
					'Written modern, scalable, performant, and maintainable code as per client requiremrnts and internal projects.',
					'Worked on several in-house libraries to increase productivity and efficiency.',
				],
				'sub_header': 'Technology Stack Used',
				'tech_stack': [
					'RxDB',
					'Express',
					'Angular 1',
					'Angular 5+',
					'Node',
					'Electron'
				],
			},
			{
				'type': 'work',
				'header': 'HCL Technologies',
				'designation': 'Summer Inter',
				'tenure': 'June 2018 - July 2018',
				'job_desc': [
					'Documented functional requirements and created use case models for new features.',
					'Defined development roadmap and executed it.',
					'Part of a tight-knit team of interns designated to build POCs and MVP products.',
					'Collaborated closely with the Product Manager to track tactical objectives, and define an achievable work plan.'
				],
				'sub_header': 'Technology Stack Used',
				'tech_stack': [
					'Java',
					'Spring Framework',
					'JSP',
					'Apache Server',
					'MS SQL',
				],
			},
			{
				'type': 'education',
				'header': 'University of California, Riverside',
				'designation': 'Masters in Computer Science Student',
				'tenure': 'Sept 2022 - Dec 2023',
				'job_desc': [
					'Masters Student with concentration in Artificial Intelligence.',
					'Worked on Generative AI for image and text.',
					'GPA - 4.0/4.0',
					'Treasurer for the International Student Union.'
				],
				'sub_header': 'Relevant Coursework',
				'tech_stack': [
					'Introduction to Machine Learning and Data mining',
					'Computer Security',
					'Data Mining Techniques',
					'Advanced Operating Systems',
					'Natural Language Generation',
				],
			},
			{
				'type': 'education',
				'header': 'Guru Gobind Singh Indraprastha University',
				'designation': "Bachelor's of Technology Student",
				'tenure': 'August 2015 - May 2019',
				'job_desc': [
					"Bachelor's of Technology in Information Technology with concentration in Artificial Intelligence.",
					'Worked on Discriminative AI and various applications.',
					'GGPA - 8.0/10.0',
					'Member of the dotC Programming Club.'
				],
				'sub_header': 'Relevant Coursework',
				'tech_stack': [
					'Artificial Intelligence',
					'Web Technologies',
					'Data Structres and Algorithms',
					'Java Programming',
				],
			}
		]
	}

}
