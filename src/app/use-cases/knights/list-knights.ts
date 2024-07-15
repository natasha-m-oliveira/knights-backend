import { Injectable } from '@nestjs/common';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { Knight } from '@app/entities/knight';

type ListKnightsRequest = {
  onlyHeroes?: boolean;
};

type ListKnightsResponse = {
  knights: Knight[];
};

@Injectable()
export class ListKnights {
  constructor(private knightsRepository: KnightsRepository) {}

  async execute(props: ListKnightsRequest): Promise<ListKnightsResponse> {
    const knights = await this.knightsRepository.list({
      onlyHeroes: props.onlyHeroes,
    });

    return { knights };
  }
}
