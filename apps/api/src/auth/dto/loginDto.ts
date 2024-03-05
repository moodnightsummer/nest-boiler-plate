import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'example@email.com',
    description: '이메일'
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: '비밀번호'
  })
  password: string;
}
