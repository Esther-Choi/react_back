import { IsString } from "class-validator";

// 회원가입을 위한 user dto
export class LoginUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}