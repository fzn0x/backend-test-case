import {
  applyDecorators,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { CallHandler, HttpStatus } from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();

    return next.handle().pipe(
      map((data) => {
        response.status(HttpStatus.OK).json({
          data,
          status: HttpStatus.OK,
        });
        return data; // Ensures the observable chain completes
      }),
      catchError((err) => {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          data: err.message,
          status: HttpStatus.INTERNAL_SERVER_ERROR,
        });
        return throwError(() => err); // Ensures the observable chain completes
      }),
    );
  }
}

export function HttpResponse() {
  return applyDecorators(UseInterceptors(ResponseInterceptor));
}
