import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserShowDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: '유저 번호'
  })
  readonly id: number;

  @IsNotEmpty()
  @ApiProperty({
    example: '성',
    description: '성별'
  })
  readonly firstName: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '이름',
    description: '이름'
  })
  readonly lastName: string;

  @IsNotEmpty()
  @ApiProperty({
    example: true,
    description: '현재 상태'
  })
  readonly isActive: boolean;
}
