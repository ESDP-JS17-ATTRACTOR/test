import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (user && (await user.checkPassword(pass))) {
      await user.generateToken();
      await this.userRepository.save(user);
      return user;
    }

    return null;
  }
}
