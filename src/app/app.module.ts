import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer} from './redusers/user.reducer';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {UserModule} from './pages/user-page/user.module';
import {HttpClientModule} from '@angular/common/http';
import {ServicesModule} from './services/services.module';
import {MapPageModule} from './pages/map-page/map-page.module';
import {MenuPageModule} from './pages/menu/menu-page.module';
import {HomePageModule} from './pages/home-page/home-page.module';
import {AuthModule} from './pages/auth/auth.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    MapPageModule,
    MenuPageModule,
    HomePageModule,
    AuthModule,
    HttpClientModule,
    ServicesModule,
    SharedModule,
    StoreModule.forRoot({
      user: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
