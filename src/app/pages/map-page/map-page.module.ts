import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MapPageComponent} from './map-page.component';
import {MapPageRoutingModule} from './map-page.routing';
import {RouterModule} from '@angular/router';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MapPageRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCHXMYz_hVD76d_iTjG3STjvA3Irumm5Do'}),
  ],
  exports: [],
  providers: [
    GoogleMapsAPIWrapper
  ]
})
export class MapPageModule {
}
