import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {MatButtonModule} from '@angular/material/button';
import {AuthRoutes} from './auth.routing';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(AuthRoutes),
  ],
  providers: []
})
export class AuthModule {
}
