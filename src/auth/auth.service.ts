import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserParams } from '../utils/types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(user: CreateUserParams) {
    const res = await this.usersService.findByUsername(user.username);
    if (!user || !res) {
      throw new UnauthorizedException({ message: 'Invalid email or password' });
    } else {
      const passwordValid = await bcrypt.compare(user.password, res?.password);
      if (passwordValid) {
        const payload = { username: user.username, password: user.password };

        return {
          access_token: this.jwtService.sign(payload),
          username: user.username
        };
      }
    }
  }

  async registration(userDto: CreateUserParams) {
    let candidate = null;
    await this.usersService.findByUsername(userDto.username).then((res) => {
      candidate = res;
    });
    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.usersService.create({
      ...userDto,
      password: hashPassword
    });
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
      message: 'SUCCESS',
      username: user.username
    };
  }
}
