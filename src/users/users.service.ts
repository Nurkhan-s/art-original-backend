import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { RegisterUserDto } from "./register-user.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(registerUserDto: RegisterUserDto): Promise<User> {
    const { username, password } = registerUserDto;

    const user = new User();
    user.username = username;
    user.password = password;
    return this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }
}
