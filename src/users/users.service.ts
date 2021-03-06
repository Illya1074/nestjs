import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(data: any): Promise<User | undefined> {
    this.users.push({
      userId: this.users.length + 1,
      username: data.username,
      password: data.password,
    });
    return 'user created';
  }

  async getUsers(res: any): Promise<User | undefined> {
    return res.send(this.users);
  }
}
