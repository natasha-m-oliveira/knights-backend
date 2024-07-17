import { Injectable } from '@nestjs/common';
import { LegaciesRepository } from '@app/repositories/legacies-repository';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { KnightNotFound } from './errors/knight-not-found';
import { Legacy } from '@app/entities/legacy';

type DeleteKnightRequest = {
  id: string;
};

type DeleteKnightResponse = void;

@Injectable()
export class DeleteKnight {
  constructor(
    private knightsRepository: KnightsRepository,
    private legaciesRepository: LegaciesRepository,
  ) {}

  async execute(props: DeleteKnightRequest): Promise<DeleteKnightResponse> {
    const knight = await this.knightsRepository.findById(props.id);

    if (!knight) throw new KnightNotFound();

    const legacy = new Legacy({
      knight,
    });

    await this.knightsRepository.deleteById(props.id);
    await this.legaciesRepository.create(legacy);
  }
}
