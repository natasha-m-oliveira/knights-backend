import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ListKnights } from '@app/use-cases/knights/list-knights';
import { HttpMapperInterceptor } from '@infra/http/interceptors/http-mapper.interceptor';

@Controller()
export class ListKnightsController {
  constructor(private listKnights: ListKnights) {}

  @Get()
  @UseInterceptors(HttpMapperInterceptor)
  async handle(@Query('filter') filter: string | string[]) {
    const filters = typeof filter === 'string' ? [filter] : filter;

    const { knights } = await this.listKnights.execute({
      onlyHeroes: filters?.includes('heroes'),
    });

    return knights;
  }
}
