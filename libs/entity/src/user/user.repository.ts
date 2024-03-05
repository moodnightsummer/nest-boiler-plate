import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, EntityManager } from 'typeorm';
import { User } from './user.entity';

export class UserRepository {
  constructor(
    @InjectRepository(User, process.env.MYSQL_DB)
    private userRepo: Repository<User>,
    // 트랜잭션을 위한 DataSource 생성
    @InjectDataSource(process.env.MYSQL_DB)
    public readonly dataSource: DataSource
  ) {}

  async createUser(userObj, transactionManager?: EntityManager) {
    const repo =
      transactionManager?.withRepository(this.userRepo) || this.userRepo;
    const result = await repo
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          firstName: userObj.firstName,
          lastName: userObj.lastName,
          isActive: true
        }
      ])
      .execute();

    return result.identifiers[0].id;
  }

  async findUserName(userId: number): Promise<User> {
    const result = this.userRepo
      .createQueryBuilder()
      .where('user.id = :id', { id: userId })
      .getRawOne();

    return result;
  }
}
