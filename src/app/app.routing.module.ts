import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoutes } from './pages/user-page/user.routing';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  ...UserRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
