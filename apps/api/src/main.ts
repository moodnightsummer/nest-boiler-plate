import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.useLogger(
    process.env.NODE_ENV === 'production'
      ? ['error', 'warn', 'debug']
      : ['error', 'warn', 'log']
  );

  await app.listen(3000);
  Logger.log(`start Servcie 3000`);
}
bootstrap();
