import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
  @ApiProperty({
    example: "Admin",
    description: "Имя пользователя"
  })
  username: string;

  @ApiProperty({
    example: "Password",
    description: "Пароль"
  })
  password: string;
}
