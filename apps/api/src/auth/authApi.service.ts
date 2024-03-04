import { Injectable } from '@nestjs/common';
import { UserInfoRepository } from 'libs/entity/userInfo/userInfo.repository';

@Injectable()
export class AuthApiService {
  constructor(private userInfoRepo: UserInfoRepository) {}

  // 유효한 이메일인지 확인
  async checkUserEmail(): Promise<boolean> {
    return true;
  }
}
