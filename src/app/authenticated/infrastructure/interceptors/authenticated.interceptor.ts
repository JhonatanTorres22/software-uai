import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthenticatedSignal } from '@/authenticated/domain/signals/authenticated.signal';

export const authenticatedInterceptor: HttpInterceptorFn = (request, next) => {
  const authenticatedSignal = inject(AuthenticatedSignal);
  const router = inject(Router);
  const token = authenticatedSignal.token();

  const authorizedRequest = token
    ? request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : request;

  return next(authorizedRequest).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
        authenticatedSignal.clearAllState();
        void router.navigate(['/auth']);
      }

      return throwError(() => error);
    })
  );
};