import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CreateKnight } from '@app/use-cases/knights/create-knight';
import { CreateKnightBody } from '@infra/http/dtos/create-knight-body';
import { HttpMapperInterceptor } from '@infra/http/interceptors/http-mapper.interceptor';

@Controller()
export class CreateKnightController {
  constructor(private createKnight: CreateKnight) {}

  @Post()
  @UseInterceptors(HttpMapperInterceptor)
  async handle(@Body() body: CreateKnightBody) {
    const { knight } = await this.createKnight.execute(body);

    return knight;
  }
}
