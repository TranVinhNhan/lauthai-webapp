import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ExtensionService } from './extension.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private extension: ExtensionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.extension.openSnackBar(error.error, 'Bỏ qua');
        }
        let errorResponse: { key: string, value: [] };
        errorResponse = error.error.errors;
        const errMessage = errorResponse[Object.keys(errorResponse)[0]][0];
        this.extension.openSnackBar(errMessage, 'Bỏ qua');
        return throwError(error);
      })
    );
  }
}

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true },
];
