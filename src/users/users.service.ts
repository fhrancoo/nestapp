import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  // create(createUserDto: CreateUserDto) {
  //   const lastId = users.reduce((maxId, user) => Math.max(maxId, user.id), 0);
  //   const newUser = { ...createUserDto, id: lastId + 1 };
  //   users.push(newUser);

  //   return newUser;
  // }

  findAll() {
    return this.prismaService.usuarios.findMany();
  }

  // findOne(id: number) {
  //   return users.find(user => user.id === id);
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   const user = this.findOne(id);

  //   if (user) {
  //     const newUser = { ...user, ...updateUserDto };
  //     users = users.map(u => (u.id === id ? newUser : u));
  //   }

  //   return this.findOne(id);
  // }

  // remove(id: number) {
  //   users = users.filter(user => user.id !== id);
  //   return users;
  // }
}
