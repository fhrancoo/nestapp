import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prismaService.usuarios.create({
        data: createUserDto
      })
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.prismaService.usuarios.findMany();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.usuarios.findUnique({
        where: {
          id,
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    try {
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }

      return await this.prismaService.usuarios.update({
        where: {
          id,
        },
        data: updateUserDto
      })
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.usuarios.delete({
        where: {
          id,
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}
