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
    HttpClientModule,
    ServicesModule,
    StoreModule.forRoot({
      user: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
