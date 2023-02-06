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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
