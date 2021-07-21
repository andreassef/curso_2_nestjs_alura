import { Module } from '@nestjs/common';
import { IsUserAlreadyExistConstraint } from './userNameValidator';
import { UsersController } from './usersController';
import { UsersService } from './usersService';

@Module({
  controllers: [UsersController],
  providers: [UsersService, IsUserAlreadyExistConstraint],
})
export class UsersModule {}
