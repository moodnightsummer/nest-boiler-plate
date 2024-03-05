import { HashUtil } from '@app/utils';
import { Injectable } from '@nestjs/common';
import { UserInfoRepository } from '@app/entity/userInfo/userInfo.repository';
import { LoginDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthApiService {
  constructor(
    private userInfoRepo: UserInfoRepository,
    private readonly jwtService: JwtService
  ) {}

  // 유효한 이메일인지 확인
  async checkUserEmail(userEmail: string): Promise<boolean> {
    return await this.userInfoRepo.checkEmail(userEmail);
  }

  async login(loginForm: LoginDto): Promise<Object> {
    const isExist = await this.checkUserEmail(loginForm.email);

    if (!isExist) {
      throw new Error('아이디나 비밀번호를 확인해 주세요');
    }

    // 데이터베이스에 저장된 해시 암호
    const realPassword = await this.userInfoRepo.findUserPassword(
      loginForm.email
    );

    const isVaild = await HashUtil.isHashVaild(
      loginForm.password,
      realPassword
    );

    if (!isVaild) {
      throw new Error('아이디나 비밀번호를 확인해 주세요');
    }

    try {
      // jwt 토큰 생성 후 반환
      const accessToken = this.jwtService.sign({
        email: loginForm.email,
        expiresIn: '2h'
      });

      const refreshToken = this.jwtService.sign({
        expiresIn: '60days'
      });

      return { accessToken, refreshToken, message: '로그인을 성공하였습니다' };
    } catch (error) {
      throw new Error('예기치 못한 에러가 발생하였습니다.');
    }
  }
}
