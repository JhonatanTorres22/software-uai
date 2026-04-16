import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';

function isApiResponse<T>(payload: unknown): payload is ApiResponse<T> {
  if (!payload || typeof payload !== 'object') {
    return false;
  }

  const candidate = payload as Record<string, unknown>;
  return (
    'isSuccess' in candidate &&
    'message' in candidate &&
    'data' in candidate &&
    'errors' in candidate &&
    typeof candidate['isSuccess'] === 'boolean'
  );
}

function resolveErrorMessage(error: HttpErrorResponse): string {
  const payload = error.error as unknown;

  if (isApiResponse<unknown>(payload)) {
    if (typeof payload.message === 'string' && payload.message.trim().length > 0) {
      return payload.message;
    }

    const errors = payload.errors;
    if (Array.isArray(errors) && errors.length > 0) {
      return String(errors[0]);
    }

    if (typeof errors === 'string' && errors.trim().length > 0) {
      return errors;
    }
  }

  if (typeof payload === 'string' && payload.trim().length > 0) {
    return payload;
  }

  return error.message || 'Ocurrio un error al procesar la solicitud.';
}

export const apiResponseInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    catchError((error: unknown) => {
      // El interceptor conserva solo normalizacion de errores HTTP.
      // Los toasts se muestran de forma explicita en cada componente o caso de uso.
      if (error instanceof HttpErrorResponse) {
        resolveErrorMessage(error);
      }
      return throwError(() => error);
    })
  );
};