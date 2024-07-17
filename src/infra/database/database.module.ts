import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { PrismaKnightsRepository } from './prisma/repositories/prisma-knights-repository';
import { LegaciesRepository } from '@app/repositories/legacies-repository';
import { PrismaLegaciesRepository } from './prisma/repositories/prisma-legacies-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: KnightsRepository,
      useClass: PrismaKnightsRepository,
    },
    {
      provide: LegaciesRepository,
      useClass: PrismaLegaciesRepository,
    },
  ],
  exports: [KnightsRepository, LegaciesRepository],
})
export class DatabaseModule {}
