import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export function getTypeOrmModuleOptions(
  configService: ConfigService
): TypeOrmModuleOptions {
  const entityPath = path.join(
    __dirname,
    '../../libs/entity/**/*.entity.{ts, js}'
  );

  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('MYSQL_USER'),
    password: configService.get('MYSQL_PASSWORD'),
    database: configService.get('MYSQL_DB'),
    entities: [entityPath],
    synchronize: false,
    logging: false,
    namingStrategy: new SnakeNamingStrategy()
  };
}
