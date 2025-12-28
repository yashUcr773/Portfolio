import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboard/page/page';
import { ThemedComponentsPage } from './features/themed-components/page/page';

export const routes: Routes = [
    { path: '', component: DashboardPage },
    { path: 'themed-components', component: ThemedComponentsPage },
    { path: '**', component: DashboardPage },
];
