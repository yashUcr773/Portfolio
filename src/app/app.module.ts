import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LandingComponent } from './components/landing/landing.component';
import { LongShadowComponent } from './components/Animated_Backgrounds/long-shadow/long-shadow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    ProjectsComponent,
    LandingComponent,
    LongShadowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
