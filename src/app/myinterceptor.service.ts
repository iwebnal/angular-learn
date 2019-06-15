import { Injectable, ErrorHandler } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
// import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';


@Injectable()
export class Myinterceptor implements HttpInterceptor {

  constructor(private _handler: ErrorHandler){
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: req.headers.set('AUTH_TOKEN', 'asdsad454asd4'),
      params: req.params.set('x', '5')
    });
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      if(error.status === 422) {
        console.log('REDIRECT LOGIN!');
      }

      this._handler.handleError(error);
      return empty();
    }))
  }
}
