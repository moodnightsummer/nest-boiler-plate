import { Controller, Get } from '@nestjs/common';
import { UserApiService } from './userApi.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserShowDto } from './dto/userShowDto';

@Controller('/user')
@ApiTags('유저 API')
export class UserApiController {
  constructor(private userApiService: UserApiService) {}

  @Get()
  @ApiResponse({ type: UserShowDto })
  async getHello(): Promise<UserShowDto> {
    return await this.userApiService.getHello();
  }
}
