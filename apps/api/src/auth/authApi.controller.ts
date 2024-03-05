import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthApiService } from './authApi.service';
import { LoginDto } from './dto/loginDto';

@Controller('/auth')
@ApiTags('로그인/로그아웃 API')
export class AuthApiController {
  constructor(private authService: AuthApiService) {}

  @Post('/login')
  async login(@Body() loginForm: LoginDto) {
    return await this.authService.login(loginForm);
  }
}
