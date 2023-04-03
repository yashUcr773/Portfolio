import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldVersionComponent } from './old-version/old-version.component';
import { V2ComponentBaseComponent } from './v2/v2-component-base/v2-component-base.component';
import { V3BaseComponent } from './v3/v3-base/v3-base.component';

const routes: Routes = [
  { path: '', component: V3BaseComponent },
  { path: 'v1', component: OldVersionComponent },
  { path: 'v2', component: V2ComponentBaseComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
