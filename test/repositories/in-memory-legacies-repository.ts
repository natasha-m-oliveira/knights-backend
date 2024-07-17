import { Legacy } from '@app/entities/legacy';
import { LegaciesRepository } from '@app/repositories/legacies-repository';
import { randomUUID } from 'node:crypto';

export class InMemoryLegaciesRepository extends LegaciesRepository {
  public readonly legacies: Legacy[] = [];

  async create(legacy: Legacy): Promise<void> {
    Object.assign(legacy, {
      id: randomUUID(),
    });

    this.legacies.push(legacy);
  }
}
