import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

//로그인과 토큰에 저장된 정보를 확인하기 위한 route 처리를 수행한다. 이때 Guard를 사용하여 해당 함수를 실행하기 전에 필요한 작업을 수행할 수 있다.
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req): any {
    return req.user;
  }
}