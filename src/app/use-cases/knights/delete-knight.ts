import { Injectable } from '@nestjs/common';
import { KnightsRepository } from '../../repositories/knights-repository';
import { KnightNotFound } from './errors/knight-not-found';

type DeleteKnightRequest = {
  id: string;
};

type DeleteKnightResponse = void;

@Injectable()
export class DeleteKnight {
  constructor(private knightsRepository: KnightsRepository) {}

  async execute(props: DeleteKnightRequest): Promise<DeleteKnightResponse> {
    const knight = await this.knightsRepository.findById(props.id);

    if (!knight) throw new KnightNotFound();

    await this.knightsRepository.deleteById(props.id);
  }
}
