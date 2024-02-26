import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { Logger } from '@nestjs/common';
import { SwaggerConfig } from '@app/config/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  app.useLogger(
    process.env.NODE_ENV === 'production'
      ? ['error', 'warn', 'debug']
      : ['error', 'warn', 'log']
  );

  const documentOption = new SwaggerConfig().initalizeOptions();
  const document = SwaggerModule.createDocument(app, documentOption);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log(`start Servcie 3000`);
}
bootstrap();
