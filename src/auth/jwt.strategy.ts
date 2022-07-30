import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
// import { ExtractJwt } from 'passport-jwt'
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { email: payload.email, name: payload.name, id: payload.id, mobile:payload.mobile };
  }
}