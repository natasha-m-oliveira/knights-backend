import { Injectable } from '@nestjs/common';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { Knight } from '@app/entities/knight';
import { PrismaService } from '../prisma.service';
import { PrismaKnightMapper } from '../mappers/prisma-knight-mapper';

@Injectable()
export class PrismaKnightsRepository extends KnightsRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(knight: Knight): Promise<void> {
    await this.prisma.knight.create({
      data: PrismaKnightMapper.toPrisma(knight),
    });
  }

  async findByNickname(nickname: string): Promise<Knight | null> {
    const knight = await this.prisma.knight.findUnique({
      where: {
        nickname,
      },
    });

    if (!knight) return null;

    return PrismaKnightMapper.toDomain(knight);
  }

  async findById(id: string): Promise<Knight | null> {
    const knight = await this.prisma.knight.findUnique({
      where: {
        id,
      },
    });

    if (!knight) return null;

    return PrismaKnightMapper.toDomain(knight);
  }

  async list(filter: { onlyHeroes?: boolean }): Promise<Knight[]> {
    const knights = await this.prisma.knight.findMany();

    return knights?.map(PrismaKnightMapper.toDomain);
  }

  async save(knight: Knight): Promise<void> {
    await this.prisma.knight.update({
      data: PrismaKnightMapper.toPrisma(knight),
      where: {
        id: knight.id,
      },
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.knight.delete({
      where: {
        id,
      },
    });
  }
}
