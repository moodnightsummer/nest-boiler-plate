import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from './userInfo.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { User } from '@app/entity/user/user.entity';

export class UserInfoRepository {
  constructor(
    @InjectRepository(UserInfo, process.env.MYSQL_DB)
    private userInfoRepo: Repository<UserInfo>
  ) {}

  async checkEmail(email: string): Promise<boolean> {
    const user = await this.userInfoRepo
      .createQueryBuilder('userInfo')
      .innerJoinAndSelect(User, 'user', 'userInfo.userId = user.id')
      .where('userInfo.email = :email', { email })
      .andWhere('user.isActive = true')
      .getRawOne();

    return user ? true : false;
  }

  async createUserInfo(userInfo, transactionManager?: EntityManager) {
    // 트랜잭션이 필요하면 transactionManager를 받아서 처리
    // 필요하지 않다면 기존 Repo로 처리
    const repo =
      transactionManager?.withRepository(this.userInfoRepo) ||
      this.userInfoRepo;

    await repo
      .createQueryBuilder()
      .insert()
      .into(UserInfo)
      .values([
        {
          email: userInfo.email,
          userId: userInfo.id,
          password: userInfo.password
        }
      ])
      .execute();
  }

  async findUserPassword(userEmail: string): Promise<string> {
    const result = await this.userInfoRepo
      .createQueryBuilder('userInfo')
      .where('userInfo.email = :email', { email: userEmail })
      .getOne();

    return result.password;
  }
}
