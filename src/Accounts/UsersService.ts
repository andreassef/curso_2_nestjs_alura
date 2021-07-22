import { Injectable } from '@nestjs/common';
import { User } from './User';

@Injectable()
export class UsersService {
  private storage: User[] = [];
  create(user: User): User {
    this.storage.push(user);
    return user;
  }
  list(): User[] {
    return this.storage;
  }

  listOneByName(name: string): User {
    const user = this.storage.find((index) => index.name === name);
    return user;
  }
}
