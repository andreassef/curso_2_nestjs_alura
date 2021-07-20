import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './User';
import { UsersService } from './usersService';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() body: User): User {
    const user = this.usersService.create(body);
    return user;
  }

  @Get()
  users(): User[] {
    return this.usersService.list();
  }
}
