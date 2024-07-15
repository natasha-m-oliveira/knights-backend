import {
  Body,
  Controller,
  Param,
  Patch,
  UseInterceptors,
} from '@nestjs/common';
import { UpdateKnightNickname } from '@app/use-cases/knights/update-knight-nickname';
import { HttpMapperInterceptor } from '@infra/http/interceptors/http-mapper.interceptor';
import { UpdateKnightNicknameBody } from '@infra/http/dtos/update-knight-nickname-body';

@Controller()
export class UpdateKnightNicknameController {
  constructor(private updateKnightNickname: UpdateKnightNickname) {}

  @Patch(':id')
  @UseInterceptors(HttpMapperInterceptor)
  async handle(
    @Param('id') id: string,
    @Body() body: UpdateKnightNicknameBody,
  ) {
    const { knight } = await this.updateKnightNickname.execute({
      id,
      nickname: body.nickname,
    });

    return knight;
  }
}
