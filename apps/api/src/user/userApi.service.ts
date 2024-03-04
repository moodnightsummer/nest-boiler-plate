import { UserRepository } from '@app/entity/user/user.Repository';
import { Injectable } from '@nestjs/common';
import { UserShowDto } from './dto/userShowDto';
import { HashUtil } from '@app/utils';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
@Injectable()
export class UserApiService {
  constructor(private userRepo: UserRepository) {}

  async getHello(): Promise<UserShowDto> {
    return await this.userRepo.findUserName(1);
  }

  async createUser(signupForm) {
    // 이미 등록된 이메일인지 확인

    // 이미 등록된 이메일일 경우 에러 반환

    // password 암호화
    const password = await HashUtil.createHashPassword(signupForm.password);
    console.log(password);

    // transcation으로 user, userInfo에 데이터 저장
  }
}
