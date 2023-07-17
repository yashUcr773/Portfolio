// Internal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { V3HomeComponent } from './v3/v3-home/v3-home.component';
import { V3BaseComponent } from './v3/v3-base/v3-base.component';
import { V3HeaderComponent } from './v3/v3-header/v3-header.component';
import { V3HeroComponent } from './v3/v3-hero/v3-hero.component';
import { V3ExperienceComponent } from './v3/v3-experience/v3-experience.component';
import { V3ProjectsComponent } from './v3/v3-projects/v3-projects.component';
import { V3FooterComponent } from './v3/v3-footer/v3-footer.component';
import { V3ContactComponent } from './v3/v3-contact/v3-contact.component';

// Services
import { AppHelperService } from './services/app-helper.service';
import { SnackbarService } from './services/snackbar-service';

@NgModule({
    declarations: [
        AppComponent,
        V3HomeComponent,
        V3BaseComponent,
        V3HeaderComponent,
        V3HeroComponent,
        V3ExperienceComponent,
        V3FooterComponent,
        V3ContactComponent,
        V3ProjectsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        AppHelperService,
        SnackbarService
    ],
    bootstrap: [AppComponent
    ]
})
export class AppModule { }
