import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageRoutes} from './pages/home-page/home-page.routing';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  ...HomePageRoutes,
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
