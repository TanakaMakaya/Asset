import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './Register';

export const Auth_routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
   { path: '', redirectTo: 'login', pathMatch: 'full' }
];
