import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './old-version/components/about/about.component';
import { AnimatedMatrixComponent } from './old-version/components/Animated_Backgrounds/animated-matrix/animated-matrix.component';
import { LongShadowComponent } from './old-version/components/Animated_Backgrounds/long-shadow/long-shadow.component';
import { ContactComponent } from './old-version/components/contact/contact.component';
import { ExperienceComponent } from './old-version/components/experience/experience.component';
import { HomeComponent } from './old-version/components/home/home.component';
import { LandingComponent } from './old-version/components/landing/landing.component';
import { LogoComponent } from './old-version/components/logo/logo.component';
import { ProjectsComponent } from './old-version/components/projects/projects.component';
import { OldVersionComponent } from './old-version/old-version.component';
import { V2HomeComponent } from './v2/v2-home/v2-home.component';
import { V2AboutComponent } from './v2/v2-about/v2-about.component';
import { V2ContactComponent } from './v2/v2-contact/v2-contact.component';
import { V2ExperienceComponent } from './v2/v2-experience/v2-experience.component';
import { V2ProjectsComponent } from './v2/v2-projects/v2-projects.component';
import { V2HeroComponent } from './v2/v2-hero/v2-hero.component';
import { V2FooterComponent } from './v2/v2-footer/v2-footer.component';
import { V2SvgsComponent } from './v2/v2-svgs/v2-svgs.component';
import { V2ProjectCardsComponent } from './v2/v2-projects/v2-project-cards/v2-project-cards.component';
import { V2ExperienceCardsComponent } from './v2/v2-experience/v2-experience-cards/v2-experience-cards.component';
import { V2ComponentBaseComponent } from './v2/v2-component-base/v2-component-base.component';
import { V3HomeComponent } from './v3/v3-home/v3-home.component';
import { V3BaseComponent } from './v3/v3-base/v3-base.component';

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
    AnimatedMatrixComponent,
    OldVersionComponent,
    V2HomeComponent,
    V2AboutComponent,
    V2ContactComponent,
    V2ExperienceComponent,
    V2ProjectsComponent,
    V2HeroComponent,
    V2FooterComponent,
    V2SvgsComponent,
    V2ProjectCardsComponent,
    V2ExperienceCardsComponent,
    V2ComponentBaseComponent,
    V3HomeComponent,
    V3BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
