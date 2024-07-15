import { Knight } from '../entities/knight';

export abstract class KnightsRepository {
  abstract create(knight: Knight): Promise<void>;
  abstract findByNickname(nickname: string): Promise<Knight | null>;
  abstract findById(id: string): Promise<Knight | null>;
  abstract list(filter: { onlyHeroes?: boolean }): Promise<Knight[]>;
  abstract save(knight: Knight): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}
