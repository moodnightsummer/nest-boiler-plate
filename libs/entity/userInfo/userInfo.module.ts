import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from './userInfo.entity';
import { UserInfoRepository } from './userInfo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo, UserInfoRepository])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: []
})
export class UserInfoModule {}
