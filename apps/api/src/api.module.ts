import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { EntityService } from 'entity/entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 경로 잡을 때 루트에서 시작
      envFilePath: `env/${process.env.NODE_ENV}.env`,
    }),
  ],
  controllers: [ApiController],
  providers: [ApiService, EntityService],
})
export class ApiModule {}
