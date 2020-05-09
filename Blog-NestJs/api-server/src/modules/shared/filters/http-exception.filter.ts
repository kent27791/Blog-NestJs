import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ResponseDto } from '../proxy.model';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = status !== HttpStatus.INTERNAL_SERVER_ERROR ? (exception.message || null) : 'Internal Server Error';
    const response: ResponseDto<any> = {
      statusCode: status,
      success: false,
      errors: [
        errorMessage
      ],
      result: null
    }
    Logger.error(errorMessage);
    res.status(status).json(response); 
  }
}
