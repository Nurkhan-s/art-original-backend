import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {
  @ApiProperty({
    example: "Admin",
    description: "Login"
  })
  username: string;
  @ApiProperty({
    example: "admin",
    description: "Password"
  })
  password: string;
}
