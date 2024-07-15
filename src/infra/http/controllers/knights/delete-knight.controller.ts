import { Controller, Delete, HttpCode, Param } from '@nestjs/common';
import { DeleteKnight } from '@app/use-cases/knights/delete-knight';

@Controller()
export class DeleteKnightController {
  constructor(private deleteKnight: DeleteKnight) {}

  @Delete(':id')
  @HttpCode(204)
  async handle(@Param('id') id: string) {
    await this.deleteKnight.execute({
      id,
    });
  }
}
