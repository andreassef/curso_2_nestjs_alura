import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserAlreadyExist } from './userNameValidator';

export class User {
  id: string;
  @IsNotEmpty({
    message: 'Nome completo é obrigatório',
  })
  @IsUserAlreadyExist({
    message: 'O usuario ja existe!',
  })
  name: string;

  @IsEmail()
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  senha: string;
}
