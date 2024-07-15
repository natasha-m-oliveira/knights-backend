import { Module } from '@nestjs/common';
import { HttpModule } from '@infra/http/http.module';
import { GlobalModule } from '@infra/global.module';

@Module({
  imports: [HttpModule, GlobalModule],
})
export class AppModule {}
