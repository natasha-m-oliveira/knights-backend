import { Knight } from '../../src/app/entities/knight';
import { KnightsRepository } from '../../src/app/repositories/knights-repository';

export class InMemoryKnightsRepository extends KnightsRepository {
  public readonly knights: Knight[] = [];

  async create(knight: Knight): Promise<void> {
    this.knights.push(knight);
  }

  async findByNickname(nickname: string): Promise<Knight> {
    const knight = this.knights.find((knight) => knight.nickname === nickname);

    return knight;
  }
}
