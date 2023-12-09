import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserParams } from '../utils/types';
import { AuthService } from './auth.service';
import { AuthDto } from './Auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('Auth')
  @Post('/login')
  @ApiOperation({
    summary: 'Admin',
    description: 'password'
  })
  login(@Body() userDto: AuthDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  @ApiOperation({
    summary: 'Admin',
    description: 'password'
  })
  registration(@Body() userDto: AuthDto) {
    return this.authService.registration(userDto);
  }
}
