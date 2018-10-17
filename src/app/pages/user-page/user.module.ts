import {NgModule} from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from "./user/user.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent
  ],
  imports: [BrowserModule],
  exports: [UserComponent],
  providers: []
})
export class UserModule {
}
