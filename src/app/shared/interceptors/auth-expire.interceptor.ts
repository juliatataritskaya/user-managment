import {Injectable, Injector} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {catchError, tap} from "rxjs/internal/operators";
import {throwError} from "rxjs/internal/observable/throwError";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthExpireInterceptor implements HttpInterceptor {
    constructor(
        private injector: Injector
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log(event);
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        let authService: AuthService = this.injector.get(AuthService);
                        authService.logoutUser();
                    } else {
                      console.log(err);
                    }
            }})
        );
    }

}
