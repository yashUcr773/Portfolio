import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V3BaseComponent } from './v3/v3-base/v3-base.component';
import { ProjectsHomeComponent } from './Projects/projects-home/projects-home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
    { path: '', component: V3BaseComponent },
    { path: 'projects', component: ProjectsHomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
