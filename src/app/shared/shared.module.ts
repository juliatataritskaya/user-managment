import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthExpireInterceptor} from './interceptors/auth-expire.interceptor';
import {TokenInterceptor} from './interceptors/auth.interceptor';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpireInterceptor,
      multi: true
    }]
})
export class SharedModule {
}
