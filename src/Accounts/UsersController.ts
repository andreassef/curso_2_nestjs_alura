import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from 'src/Core/Http/nest-response';
import { NestResponseBuilder } from 'src/Core/Http/nest-response-builder';
import { User } from './User';
import { UsersService } from './usersService';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() body: User): NestResponse {
    const user = this.usersService.create(body);
    // res.status(HttpStatus.CREATED).location(`/users/${user.name}`).json(user);
    return new NestResponseBuilder()
      .setStatus(HttpStatus.CREATED)
      .setHeaders({ Location: `/users/${user.name}` })
      .setBody(user)
      .build();
  }

  @Get()
  users(): User[] {
    return this.usersService.list();
  }

  @Get(':name')
  findByName(@Param('name') name: string): User {
    console.log('Entrou: ' + name);
    const user = this.usersService.listOneByName(name);

    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'usuário não encontrao',
      });
    }
    return user;
  }
}
