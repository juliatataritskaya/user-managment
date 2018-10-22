import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {UserRoutes} from '../user-page/user.routing';
import {MapPageRoutes} from '../map-page/map-page.routing';


export const HomePageRoutes: Routes = [
  {path: 'home', component: HomePageComponent, children: [
    ...UserRoutes,
    ...MapPageRoutes
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(HomePageRoutes)],
  exports: [RouterModule],
  providers: []
})

export class HomePageRoutingModule {
}
