import { UserRepository } from '@app/entity/user/user.Repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserApiService {
  constructor(private userRepo: UserRepository) {}

  async getHello(): Promise<any> {
    return await this.userRepo.findUserName(1);
  }
}
