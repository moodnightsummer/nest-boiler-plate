import { Module } from '@nestjs/common';
import { AuthApiController } from './authApi.controller';
import { AuthApiService } from './authApi.service';
import { UserInfoModule } from '@app/entity/userInfo/userInfo.module';
import { UserInfoRepository } from '@app/entity/userInfo/userInfo.repository';
import { HashUtil } from '@app/utils';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

console.log(process.env.JWT_SECRET_KEY);
@Module({
  imports: [
    UserInfoModule,
    // 동기 처리하면 env 파일을 찾을 수 없기 때문에 비동기 처리
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET_KEY')
      })
    })
  ],
  controllers: [AuthApiController],
  providers: [AuthApiService, UserInfoRepository, HashUtil]
})
export class AuthApiModule {}
