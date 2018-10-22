import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MapPageComponent} from './map-page.component';
import {MapPageRoutingModule} from './map-page.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MapPageRoutingModule,
  ],
  exports: [],
  providers: []
})
export class MapPageModule {
}
