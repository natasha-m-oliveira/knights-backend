import { Knight } from '@app/entities/knight';
import { KnightsRepository } from '@app/repositories/knights-repository';
import { randomUUID } from 'node:crypto';

export class InMemoryKnightsRepository extends KnightsRepository {
  public readonly knights: Knight[] = [];

  async create(knight: Knight): Promise<void> {
    Object.assign(knight, {
      id: randomUUID(),
    });

    this.knights.push(knight);
  }

  async findByNickname(nickname: string): Promise<Knight | null> {
    const knight = this.knights.find((knight) => knight.nickname === nickname);

    if (!knight) return null;

    return knight;
  }

  async findById(id: string): Promise<Knight | null> {
    const knight = this.knights.find((knight) => knight.id === id);

    if (!knight) return null;

    return knight;
  }

  async list(filter: { onlyHeroes?: boolean }): Promise<Knight[]> {
    if (!filter.onlyHeroes) return this.knights;

    const now = new Date();
    const minAge18Birthday = new Date(
      now.getFullYear() - 18,
      now.getMonth(),
      now.getDate(),
    );

    return this.knights.filter((knight) => knight.birthday <= minAge18Birthday);
  }

  async save(knight: Knight): Promise<void> {
    const index = this.knights.findIndex(({ id }) => id === knight.id);

    this.knights.splice(index, 1, knight);
  }

  async deleteById(id: string): Promise<void> {
    const index = this.knights.findIndex((knight) => knight.id === id);

    this.knights.splice(index, 1);
  }
}
