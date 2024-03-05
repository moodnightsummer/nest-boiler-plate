import { UserRepository } from '@app/entity/user/user.Repository';
import { Injectable } from '@nestjs/common';
import { UserShowDto } from './dto/userShowDto';
import { HashUtil } from '@app/utils';
import { UserInfoRepository } from '@app/entity/userInfo/userInfo.repository';

@Injectable()
export class UserApiService {
  constructor(
    private userRepo: UserRepository,
    private userInfoRepo: UserInfoRepository
  ) {}

  async getHello(): Promise<UserShowDto> {
    return await this.userRepo.findUserName(1);
  }

  async createUser(signupForm) {
    // 이미 등록된 이메일인지 확인
    const isExist = await this.userInfoRepo.checkEmail(signupForm.email);

    // 이미 등록된 이메일일 경우 에러 반환
    if (isExist) {
      throw new Error('이미 존재하는 이메일입니다.');
    }

    // password 암호화
    const hashPassword = await HashUtil.createHashPassword(signupForm.password);

    // transcation으로 user, userInfo에 데이터 저장
    const userObj = {
      firstName: signupForm.firstName,
      lastName: signupForm.lastName,
      email: signupForm.email,
      password: hashPassword,
      id: undefined
    };

    const queryRunner = this.userRepo.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = await this.userRepo.createUser(userObj, queryRunner.manager);

      userObj.id = user;

      await this.userInfoRepo.createUserInfo(userObj, queryRunner.manager);

      await queryRunner.commitTransaction();

      return '회원 가입이 완료되었습니다.';
    } catch (error) {
      await queryRunner.rollbackTransaction();

      throw new Error('에러가 발생하였습니다.');
    } finally {
      await queryRunner.release();
    }
  }
}
