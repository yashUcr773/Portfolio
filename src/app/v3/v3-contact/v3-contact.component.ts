import { Component, OnInit } from '@angular/core';
import { AppHelperService } from '../services/app-helper.service';
import { socials_config } from 'config/socials';

@Component({
  selector: 'app-v3-contact',
  templateUrl: './v3-contact.component.html',
  styleUrls: ['./v3-contact.component.scss']
})
export class V3ContactComponent implements OnInit {

  socials_config = socials_config;

  constructor(private appHelperService: AppHelperService) {

  }

  ngOnInit(): void {

  }

  openLink(url: string) {
    this.appHelperService.launchLink(url);
  }


}
