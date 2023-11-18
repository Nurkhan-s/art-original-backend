import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { CreateUserParams } from "../utils/types";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { User } from "../users/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(userDto: CreateUserParams) {
    const user = await this.validateUser(userDto);
    return { token: this.generateToken(user) };
  }

  async registration(userDto: CreateUserParams) {
    let candidate = null;
    await this.userService.findByUsername(userDto.username).then((res) => {
      candidate = res;
    });
    if (candidate) {
      throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword
    });
    return {
      token: this.generateToken(user),
      message: "SUCCESS",
      username: user.username
    };
  }

  generateToken(user: User) {
    const payload = {
      email: user.username,
      id: user.id
    };
    return this.jwtService.sign(payload);
  }

  async validateUser(userDto: CreateUserParams) {
    let user = null;
    await this.userService.findByUsername(userDto.username).then((res) => {
      user = res;
    });
    if (!user) {
      throw new UnauthorizedException({ message: "Invalid email or password" });
    } else {
      const passwordValid = await bcrypt.compare(
        userDto.password,
        user?.password
      );
      if (passwordValid) {
        return user;
      }
    }
  }
}
