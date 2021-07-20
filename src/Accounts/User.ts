import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: string;
  @IsNotEmpty({
    message: 'Nome completo é obrigatório',
  })
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
