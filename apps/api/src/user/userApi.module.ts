import { UserModule } from '@app/entity/user/user.module';
import { Module } from '@nestjs/common';
import { UserApiController } from './userApi.controller';
import { UserApiService } from './userApi.service';
import { UserRepository } from '@app/entity/user/user.Repository';
import { UserInfoModule } from '@app/entity/userInfo/userInfo.module';
import { UserInfoRepository } from '@app/entity/userInfo/userInfo.repository';

@Module({
  imports: [UserModule, UserInfoModule],
  controllers: [UserApiController],
  providers: [UserApiService, UserRepository, UserInfoRepository]
})
export class UserApiModule {}
