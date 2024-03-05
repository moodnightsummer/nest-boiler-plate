import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserApiService } from './userApi.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserShowDto } from './dto/userShowDto';
import { UserInterceptor } from '@app/interceptor/user.interceptor';
import { CreateUserDto } from './dto/createUserDto';

// user 개별 인터셉터 추가
@UseInterceptors(UserInterceptor)
@Controller('/user')
@ApiTags('유저 API')
export class UserApiController {
  constructor(private userApiService: UserApiService) {}

  @Get()
  @ApiResponse({ type: UserShowDto })
  async getHello(): Promise<UserShowDto> {
    return await this.userApiService.getHello();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<any> {
    await this.userApiService.createUser(createUser);
  }
}
