import { Module } from '@nestjs/common';
import { UsersModule } from './Accounts/usersModule';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
