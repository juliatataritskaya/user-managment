import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRoutes} from './pages/user-page/user.routing';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  ...UserRoutes,
  {path: '**', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
