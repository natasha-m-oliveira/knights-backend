import { Injectable } from '@nestjs/common';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { Knight } from '@app/entities/knight';
import { KnightNotFound } from './errors/knight-not-found';

type UpdateKnightNicknameRequest = {
  id: string;
  nickname: string;
};

type UpdateKnightNicknameResponse = {
  knight: Knight;
};

@Injectable()
export class UpdateKnightNickname {
  constructor(private knightsRepository: KnightsRepository) {}

  async execute(
    props: UpdateKnightNicknameRequest,
  ): Promise<UpdateKnightNicknameResponse> {
    const knight = await this.knightsRepository.findById(props.id);

    if (!knight) throw new KnightNotFound();

    knight.nickname = props.nickname;

    await this.knightsRepository.save(knight);

    return { knight };
  }
}
