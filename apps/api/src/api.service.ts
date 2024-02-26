import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/entity/user/user.Repository';

@Injectable()
export class ApiService {
  getHello(): string {
    return 'Hello, My Mono Repository Project!';
  }
}
