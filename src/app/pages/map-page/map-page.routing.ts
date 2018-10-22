import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapPageComponent} from './map-page.component';


export const MapPageRoutes: Routes = [
  {path: 'map', component: MapPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(MapPageRoutes)],
  exports: [RouterModule],
  providers: []
})

export class MapPageRoutingModule {
}
