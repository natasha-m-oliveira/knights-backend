import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { PrismaKnightsRepository } from './prisma/repositories/prisma-knights-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: KnightsRepository,
      useClass: PrismaKnightsRepository,
    },
  ],
  exports: [KnightsRepository],
})
export class DatabaseModule {}
