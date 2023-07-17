import { Component, OnInit } from '@angular/core';
import { AppHelperService } from '../services/app-helper.service';
import { socials_config } from 'config/socials';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar-service';

@Component({
	selector: 'app-v3-contact',
	templateUrl: './v3-contact.component.html',
	styleUrls: ['./v3-contact.component.scss']
})
export class V3ContactComponent implements OnInit {

	socials_config = socials_config;
	nameChanged = false;
	emailChanged = false;
	textareaChanged = false;

	constructor(private appHelperService: AppHelperService,
		private http: HttpClient,
		private snackbarService: SnackbarService
	) {

	}

	ngOnInit(): void {

	}

	openLink(url: string) {
		this.appHelperService.launchLink(url);
	}

	sendMail() {


		let name = (<HTMLInputElement>document.getElementById('contact-name'))?.value;
		let email = (<HTMLInputElement>document.getElementById('contact-email'))?.value;
		let message = (<HTMLInputElement>document.getElementById('contact-textarea'))?.value;

		let flag = false;
		if (name == '') {
			this.nameChanged = true;
			flag = true;
		}
		if (email == '') {
			this.emailChanged = true;
			flag = true;
		}
		if (message == '') {
			this.textareaChanged = true;
			flag = true;
		}

		if (!flag) {
			let url = this.appHelperService.getURLPrefix();
			url += '/sendEmail';
			let payload = {
				name, email, message
			};

			(<HTMLInputElement>document.getElementById('contact-name')).value = "";
			(<HTMLInputElement>document.getElementById('contact-email')).value = "";
			(<HTMLInputElement>document.getElementById('contact-textarea')).value = "";

			this.http.post(url, payload).subscribe((response: any) => {
				console.log(response);
				if (response.success == true) {
					this.snackbarService
						.enqueueSnack({
							message: "Your message was recieved. Allow me 1-2 days to revert back.",
							classes: ['success']
						});
				} else {
					this.snackbarService
						.enqueueSnack({
							message: "There was an issue sending the message. Try again in a few days.",
							classes: ['error']
						});
				}
			});

		}


	}

	onchange(field: string) {
		let name = (<HTMLInputElement>document.getElementById(field))?.value;
		if (name == '') {
			if (field == 'contact-name') {
				this.nameChanged = true;

			} else if (field == 'contact-email') {
				this.emailChanged = true;

			} else if (field == 'contact-textarea') {
				this.textareaChanged = true;

			}
		} else {
			if (field == 'contact-name') {
				this.nameChanged = false;

			} else if (field == 'contact-email') {
				this.emailChanged = false;

			} else if (field == 'contact-textarea') {
				this.textareaChanged = false;

			}
		}
	}


}
