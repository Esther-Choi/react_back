import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//토큰에 저장된 정보를 확인하기 전에 passport의 jwt-strategy를 사용하여 토큰을 검증한다.
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}