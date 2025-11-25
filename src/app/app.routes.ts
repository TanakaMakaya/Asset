import { Routes } from '@angular/router';
import { Auth_routes } from './Auth/auth.route';
import { RouterOutlet } from '@angular/router';
import { Dash_routes } from './Dashboard/dash.routes';

export const routes: Routes = [
    { path: '', children: Auth_routes },
    {path: '', children: Dash_routes },
 
];

