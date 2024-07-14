import { Injectable } from '@nestjs/common';
import { KnightsRepository } from '../../repositories/knights-repository';
import { Knight } from '../../entities/knight';
import { KnightNotFound } from './errors/knight-not-found';

type GetKnightByIdRequest = {
  id: string;
};

type GetKnightByIdResponse = {
  knight: Knight;
};

@Injectable()
export class GetKnightById {
  constructor(private knightsRepository: KnightsRepository) {}

  async execute(props: GetKnightByIdRequest): Promise<GetKnightByIdResponse> {
    const knight = await this.knightsRepository.findById(props.id);

    if (!knight) throw new KnightNotFound();

    return { knight };
  }
}
