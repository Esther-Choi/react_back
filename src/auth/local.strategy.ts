import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport';
import { LoginUserDto } from './login-user.dto';

//생성자에서 usernameField를 원하는대로 지정할 수 있다. 
// default로 username, password에 각각 id와 password가 매핑되며 생성자에서 원하는 이름으로 변경할 수 있다.
//  validate 함수는 id와 password를 인자로 받아서 유효성을 검증하는 함수이다. 검증에 성공하면 사용자 객체를 반환하고 실패하면 예외를 던진다.
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email'
    });
  }

  async validate(userId: string, password: string): Promise<any> {
      type NewType = LoginUserDto;

    let loginUserDto: NewType = {
      email: userId,
      password: password,
    }

    const user = await this.authService.validateUser(loginUserDto);

    if(!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}