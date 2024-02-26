import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/entity/user/user.Repository';

@Injectable()
export class ApiService {
  constructor(private userRepo: UserRepository) {}
  async getHello(): Promise<any> {
    return await this.userRepo.findUserName(1);
  }
}
