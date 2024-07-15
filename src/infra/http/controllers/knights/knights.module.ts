import { Module } from '@nestjs/common';
import { CreateKnightController } from './create-knight.controller';
import { CreateKnight } from '@app/use-cases/knights/create-knight';
import { GetKnightByIdController } from './get-knight-by-id.controller';
import { GetKnightById } from '@app/use-cases/knights/get-knight-by-id';
import { ListKnightsController } from './list-knights.controller';
import { ListKnights } from '@app/use-cases/knights/list-knights';
import { UpdateKnightNicknameController } from './update-knight-nickname.controller';
import { UpdateKnightNickname } from '@app/use-cases/knights/update-knight-nickname';
import { DeleteKnightController } from './delete-knight.controller';
import { DeleteKnight } from '@app/use-cases/knights/delete-knight';

@Module({
  controllers: [
    CreateKnightController,
    GetKnightByIdController,
    ListKnightsController,
    UpdateKnightNicknameController,
    DeleteKnightController,
  ],
  providers: [
    CreateKnight,
    GetKnightById,
    ListKnights,
    UpdateKnightNickname,
    DeleteKnight,
  ],
})
export class KnightsModule {}
