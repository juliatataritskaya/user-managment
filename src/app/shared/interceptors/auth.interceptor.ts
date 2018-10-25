import {Injectable, Injector} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private injector: Injector
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = AuthService.ACCESS_TOKEN;
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
        return next.handle(request);
    }

}
