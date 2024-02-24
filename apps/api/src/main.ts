import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(3000);
  console.log(process.env.MYSQL_DB);
}
bootstrap();
