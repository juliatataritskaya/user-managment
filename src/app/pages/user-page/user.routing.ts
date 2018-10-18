import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from './user-page.component';
import {UserListRoutes} from './user-list/user-list.routes';
import {NewUserRoutes} from './new/new-user.routes';
import {EditUserRoutes} from './edit/edit-user.routes';


export const UserRoutes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users', component: UserPageComponent, children: [
    ...UserListRoutes,
    ...NewUserRoutes,
    ...EditUserRoutes
  ]
  },
  {path: '**', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule],
  providers: []
})

export class UserRoutingModule {
}
