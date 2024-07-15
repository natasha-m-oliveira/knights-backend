import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { KnightsModule } from './controllers/knights/knights.module';

@Module({
  imports: [
    KnightsModule,
    RouterModule.register([
      {
        path: 'knights',
        module: KnightsModule,
      },
    ]),
  ],
})
export class HttpModule {}
