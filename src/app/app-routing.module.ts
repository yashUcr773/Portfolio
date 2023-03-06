import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldVersionComponent } from './old-version/old-version.component';
import { V2ComponentBaseComponent } from './v2/v2-component-base/v2-component-base.component';

const routes: Routes = [
  { path: '', component: V2ComponentBaseComponent },
  { path: 'old', component: OldVersionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
