import {Route} from '@angular/router';
import {UserListComponent} from './user-list.component';

export const UserListRoutes: Route[] = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: UserListComponent}
];
