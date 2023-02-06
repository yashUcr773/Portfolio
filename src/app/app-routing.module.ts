import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OldVersionComponent } from './old-version/old-version.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'v1', component: OldVersionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
