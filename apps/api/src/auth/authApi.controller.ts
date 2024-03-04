import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/auth')
@ApiTags('로그인/로그아웃 API')
export class AuthApiController {}
