import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from './userInfo.entity';
import { Repository } from 'typeorm';

export class UserInfoRepository {
  constructor(
    @InjectRepository(UserInfo, process.env.MYSQL_DB)
    private userInfoRepo: Repository<UserInfo>
  ) {}

  async checkEmail() {
    return this.userInfoRepo;
  }
}
