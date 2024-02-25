import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository {
  constructor(
    @InjectRepository(User, process.env.MYSQL_DB)
    private userRepo: Repository<User>
  ) {}

  async findUserName(userId: number): Promise<any> {
    const result = await this.userRepo.findOne({ where: { id: userId } });

    return result;
  }
}
