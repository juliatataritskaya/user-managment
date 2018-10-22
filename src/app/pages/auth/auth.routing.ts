import {Routes} from '@angular/router';
import {LoginRoutes} from './login/login.routes';
import {AuthComponent} from './auth.component';

export const AuthRoutes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent, children: [
    ...LoginRoutes,
  ]
  },
  ];
