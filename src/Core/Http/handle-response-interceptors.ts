import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { NestResponse } from './nest-response';

@Injectable()
export class HandleResponseInterceptor implements NestInterceptor {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((controlerResponse: NestResponse) => {
        if (controlerResponse instanceof NestResponse) {
          const httpContext = context.switchToHttp();
          const response = httpContext.getResponse();
          const { headers, status, body } = controlerResponse;

          const headersNames = Object.getOwnPropertyNames(headers);

          headersNames.forEach((element) => {
            const value = headers[element];
            this.httpAdapter.setHeader(response, element, value);
          });

          this.httpAdapter.status(response, status);

          return body;
        }

        return controlerResponse;
      }),
    );
  }
}
