import { DocumentBuilder } from '@nestjs/swagger';

export class SwaggerConfig {
  builder = new DocumentBuilder();

  initalizeOptions() {
    return this.builder
      .setTitle('api Backend')
      .setDescription('API 명세서')
      .setVersion('0.1')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'accessToken',
          in: 'header'
        },
        'accessToken'
      )
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'refreshToken',
          in: 'header'
        },
        'refreshToken'
      )
      .build();
  }
}
