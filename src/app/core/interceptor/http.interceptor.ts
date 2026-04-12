import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { LoggerService } from '../services/logger.service';

export const httpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const logger = inject(LoggerService);

  logger.debug(`--> ${req.method} ${req.url}`);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        logger.debug(`<-- ${event.status} ${req.url}`);
      }
    }),
    catchError((error: HttpErrorResponse) => {
      const message = resolveErrorMessage(error);
      logger.error(`HTTP ${error.status}: ${message}`, { url: req.url });
      return throwError(() => ({ status: error.status, message }));
    })
  );
};

function resolveErrorMessage(error: HttpErrorResponse): string {
  const serverMessage = (error.error as { message?: string })?.message;
  switch (error.status) {
    case 400: return serverMessage ?? 'Bad request';
    case 401: return 'Unauthorized — please log in again';
    case 403: return 'You do not have permission to perform this action';
    case 404: return 'The requested resource was not found';
    case 422: return serverMessage ?? 'Validation error';
    case 429: return 'Too many requests — please slow down';
    case 500: return 'Internal server error — please try again later';
    default:  return serverMessage ?? 'An unexpected error occurred';
  }
}
