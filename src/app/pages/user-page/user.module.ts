import {NgModule} from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {BrowserModule} from '@angular/platform-browser';
import {NewUserComponent} from './new/new-user.component';
import {UserPageComponent} from './user-page.component';
import {UserRoutingModule} from './user.routing';
import {RouterModule} from '@angular/router';
import {EditUserComponent} from './edit/edit-user.component';
import {UserFormComponent} from './form/user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    NewUserComponent,
    UserPageComponent,
    EditUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserComponent],
  providers: []
})
export class UserModule {
}
