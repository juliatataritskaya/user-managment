import { Route } from '@angular/router';
import {EditUserComponent} from './edit-user.component';

export const EditUserRoutes: Route[] = [
  {path: '', redirectTo: 'edit/:id', pathMatch: 'full'},
  {path: 'edit/:id', component: EditUserComponent}
];
