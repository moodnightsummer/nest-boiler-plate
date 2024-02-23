import { Injectable } from '@nestjs/common';

@Injectable()
export class EntityService {
  getHello(): string {
    return 'hello mono world!';
  }
}
