import { Controller, Get } from '@nestjs/common';
import { UserApiService } from './userApi.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/user')
@ApiTags('유저 API')
export class UserApiController {
  constructor(private userApiService: UserApiService) {}
  @Get()
  async getHello(): Promise<any> {
    return await this.userApiService.getHello();
  }
}
