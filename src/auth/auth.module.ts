import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

//auth에서 사용할 다른 모듈을 정의
//Passport는 여러가지 strategy를 제공한다. 이중에서 id/password 기반으로 동작하는 LocalStrategy을 사용하여 로그인 기능을 구현하고, 
// 로그인을 할 때 토큰을 생성하여 이후 요청을 관리할 수 있는 JwtStrategy를 사용한다.
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([User])],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
