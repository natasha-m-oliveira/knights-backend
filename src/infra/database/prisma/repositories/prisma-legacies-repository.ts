import { Injectable } from '@nestjs/common';
import { LegaciesRepository } from '@app/repositories/legacies-repository';
import { PrismaService } from '../prisma.service';
import { Legacy } from '@app/entities/legacy';
import { PrismaLegacyMapper } from '../mappers/prisma-legacy-mapper';

@Injectable()
export class PrismaLegaciesRepository extends LegaciesRepository {
  constructor(private prisma: PrismaService) {
    super();
  }

  async create(legacy: Legacy): Promise<void> {
    const createdLegacy = await this.prisma.legacy.create({
      data: PrismaLegacyMapper.toPrisma(legacy),
    });

    Object.assign(legacy, { id: createdLegacy.id });
  }
}
