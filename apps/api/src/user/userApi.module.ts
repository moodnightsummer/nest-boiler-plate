import { UserModule } from '@app/entity/user/user.module';
import { Module } from '@nestjs/common';
import { UserApiController } from './userApi.controller';
import { UserApiService } from './userApi.service';
import { UserRepository } from '@app/entity/user/user.Repository';

@Module({
  imports: [UserModule],
  controllers: [UserApiController],
  providers: [UserApiService, UserRepository]
})
export class UserApiModule {}
