import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { UsersModule } from './Accounts/usersModule';
import { HandleError } from './common/filter/HandleError';
import { HandleResponseInterceptor } from './Core/Http/handle-response-interceptors';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HandleError,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HandleResponseInterceptor,
    },
  ],
})
export class AppModule {}
