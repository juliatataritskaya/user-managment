import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page.routing';
import {RouterModule} from '@angular/router';
import {MenuPageModule} from '../menu/menu-page.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomePageRoutingModule,
    MenuPageModule
  ],
  exports: [],
  providers: []
})
export class HomePageModule {
}
