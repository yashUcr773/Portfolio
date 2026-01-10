import { Routes } from '@angular/router';
import { ComponentShowcaseComponent } from './components/showcase/component-showcase.component';

export const routes: Routes = [
  { path: '', redirectTo: '/showcase', pathMatch: 'full' },
  { path: 'showcase', component: ComponentShowcaseComponent }
];
