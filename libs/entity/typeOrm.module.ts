import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from './src/user/user.entity';

export function getTypeOrmModuleOptions(
  configService: ConfigService
): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('MYSQL_USER'),
    password: configService.get('MYSQL_PASSWORD'),
    database: configService.get('MYSQL_DB'),
    entities: [User],
    synchronize: false,
    logging: false,
    namingStrategy: new SnakeNamingStrategy()
  };
}
