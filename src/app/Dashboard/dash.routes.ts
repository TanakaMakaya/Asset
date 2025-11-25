import { Routes } from '@angular/router';
import { dashboardComponent } from './dash';
import { assetsComponent } from './assets';

export const Dash_routes: Routes = [
  {
    path: 'dashboard',
    component: dashboardComponent,
  },
  {
    path: 'assets',
    component: assetsComponent,
  },

];
