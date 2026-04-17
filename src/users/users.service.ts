import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

let users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
  }
];


@Injectable()
export class UsersService {

  create(createUserDto: CreateUserDto) {
    const lastId = users.reduce((maxId, user) => Math.max(maxId, user.id), 0);
    const newUser = { ...createUserDto, id: lastId + 1 };
    users.push(newUser);

    return newUser;
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    return users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    if (user) {
      const newUser = { ...user, ...updateUserDto };
      users = users.map(u => (u.id === id ? newUser : u));
    }

    return this.findOne(id);
  }

  remove(id: number) {
    users = users.filter(user => user.id !== id);
    return users;
  }
}
