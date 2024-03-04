import { ApiProperty, OmitType } from '@nestjs/swagger';
import { UserShowDto } from './userShowDto';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto extends OmitType(UserShowDto, ['isActive', 'id']) {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'example@email.com',
    description: '이메일'
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'password',
    description: '비밀번호'
  })
  password: string;
}
