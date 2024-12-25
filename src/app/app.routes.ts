import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DosaDashboardComponent } from './components/dosa-dashboard/dosa-dashboard.component';
import { IdlyDashboardComponent } from './components/idly-dashboard/idly-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dosa', component:  DosaDashboardComponent},
  { path: 'idly', component: IdlyDashboardComponent },
  // { path: 'chat', component: ChatComponent }
];
