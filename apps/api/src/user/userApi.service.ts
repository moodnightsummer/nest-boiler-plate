import { UserRepository } from '@app/entity/user/user.Repository';
import { Injectable } from '@nestjs/common';
import { UserShowDto } from './dto/userShowDto';

@Injectable()
export class UserApiService {
  constructor(private userRepo: UserRepository) {}

  async getHello(): Promise<UserShowDto> {
    return await this.userRepo.findUserName(1);
  }
}
