import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ResultInterceptor } from './interceptors/result.interceptor';
import { PagingResultDto } from './proxy.model';
import { AuthorizeGuard } from './guards/authorize.guard';
import { BaseService } from './services/base.service';

@Module({
    exports: [
        BaseService
    ],
    imports: [
        BaseService
    ],
    providers: [
        {
            provide: 'APP_INTERCEPTOR',
            useClass: LoggingInterceptor,
        },
        {
            provide: 'APP_FILTER',
            useClass: HttpExceptionFilter
        },
        {
            provide: 'APP_INTERCEPTOR',
            useClass: ResultInterceptor,
        },
        // {
        //     provide: 'APP_GUARD',
        //     useClass: AuthorizeGuard
        // }
    ]
})
export class SharedModule {

}
