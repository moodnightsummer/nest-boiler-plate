import { Module } from '@nestjs/common';
import { UserInfoModule } from 'libs/entity/userInfo/userInfo.module';
import { AuthApiController } from './authApi.controller';

@Module({
  imports: [UserInfoModule],
  controllers: [AuthApiController]
})
export class AuthApiModule {}
