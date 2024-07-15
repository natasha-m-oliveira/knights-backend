import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { GetKnightById } from '@app/use-cases/knights/get-knight-by-id';
import { HttpMapperInterceptor } from '@infra/http/interceptors/http-mapper.interceptor';

@Controller()
export class GetKnightByIdController {
  constructor(private getKnightById: GetKnightById) {}

  @Get(':id')
  @UseInterceptors(HttpMapperInterceptor)
  async handle(@Param('id') id: string) {
    const { knight } = await this.getKnightById.execute({
      id,
    });

    return knight;
  }
}
