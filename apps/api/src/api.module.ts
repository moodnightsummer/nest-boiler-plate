import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'libs/src/entity/user/user.module';
import { UserRepository } from 'libs/src/entity/user/user.Repository';
import { isTypeOrmModule } from 'libs/src/entity/typeOrm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 경로 잡을 때 루트에서 시작
      envFilePath: `env/${process.env.NODE_ENV}.env`
    }),
    UserModule,
    isTypeOrmModule()
  ],
  controllers: [ApiController],
  providers: [ApiService, UserRepository]
})
export class ApiModule {}
