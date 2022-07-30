import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '13579ccs',
    database: 'react',
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
  }), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, Auth],
})
export class AppModule {
  constructor(private connection: Connection){}
}
