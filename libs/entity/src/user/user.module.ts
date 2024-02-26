import { Module } from '@nestjs/common';
import { UserRepository } from './user.Repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  exports: [TypeOrmModule],
  providers: [],
  controllers: []
})
export class UserModule {}
