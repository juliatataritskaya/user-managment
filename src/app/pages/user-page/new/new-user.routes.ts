import {Route} from '@angular/router';
import {NewUserComponent} from './new-user.component';

export const NewUserRoutes: Route[] = [
  {path: '', redirectTo: 'new', pathMatch: 'full'},
  {path: 'new', component: NewUserComponent}
];
