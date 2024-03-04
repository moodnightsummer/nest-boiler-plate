import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmModuleOptions } from 'libs/entity/typeOrm.module';
import { LoggerMiddleware } from '@app/middleware/logger.middleware';
import { UserApiModule } from './user/userApi.module';
import { CommonInterceptor } from '@app/config/common.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 경로 잡을 때 루트에서 시작
      envFilePath: `env/${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getTypeOrmModuleOptions(configService), // 변경된 부분
      inject: [ConfigService]
    }),

    UserApiModule
  ],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: CommonInterceptor
    }
  ]
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
