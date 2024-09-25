import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
    });

    return next.handle(clonedReq).pipe(
 
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';

        if (error.error instanceof ErrorEvent) {

          errorMsg = `Client-side error: ${error.error.message}`;
        } else {

          errorMsg = `Server-side error: Error Code: ${error.status}\nMessage: ${error.message}`;
          if (error.status === 401) {
            errorMsg = 'Unauthorized access. Please login again.';
          } else if (error.status === 500) {
            errorMsg = 'Internal Server Error. Please try again later.';
          }
        }
        console.error(errorMsg);
        return throwError(() => errorMsg);
      })
    );
  }
}
