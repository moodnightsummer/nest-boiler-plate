import { Module } from '@nestjs/common';
import { UserInfoModule } from '@app/entity/userInfo/userInfo.module';
import { AuthApiController } from './authApi.controller';

@Module({
  imports: [UserInfoModule],
  controllers: [AuthApiController],
  providers: []
})
export class AuthApiModule {}
