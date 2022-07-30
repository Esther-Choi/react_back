import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  // user 모듈에서 typeorm을 사용할 수 있도록 typeOrm 모듈 추가
  //db와 매핑되는 entity를 forFeature에 추가한다.
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
