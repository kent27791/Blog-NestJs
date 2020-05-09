import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseDto } from '../proxy.model';

@Injectable()
export class ResultInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getResponse();

    return next.handle()
      .pipe(
        map((data: any) => {
          const response: ResponseDto<any> = {
            statusCode: req.statusCode,
            success: true,
            errors: null,
            result: data
          }
          return response;
        })
      )
  }
}
