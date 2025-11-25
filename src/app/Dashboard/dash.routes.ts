import { Routes } from '@angular/router';
import { DashboardComponent } from './dash';
import { assetsComponent } from './assets';

export const Dash_routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'assets',
    component: assetsComponent,
  },

];
