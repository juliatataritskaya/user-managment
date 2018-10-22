import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageRoutes} from './pages/home-page/home-page.routing';
import {AuthRoutes} from './pages/auth/auth.routing';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  ...HomePageRoutes,
  ...AuthRoutes,
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
