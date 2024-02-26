import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '@app/entity/user/user.module';
import { UserRepository } from '@app/entity/user/user.Repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmModuleOptions } from 'libs/entity/typeOrm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 경로 잡을 때 루트에서 시작
      envFilePath: `env/${process.env.NODE_ENV}.env`
    }),
    UserModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getTypeOrmModuleOptions(configService), // 변경된 부분
      inject: [ConfigService]
    })
  ],
  controllers: [ApiController],
  providers: [ApiService, UserRepository]
})
export class ApiModule {}
