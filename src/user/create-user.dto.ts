import { IsString } from "class-validator";

// 회원가입을 위한 user dto
export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  mobile: string;
}