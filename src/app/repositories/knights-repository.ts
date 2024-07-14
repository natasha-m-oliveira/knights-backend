import { Knight } from '../entities/knight';

export abstract class KnightsRepository {
  abstract create(knight: Knight): Promise<void>;
  abstract findByNickname(nickname: string): Promise<Knight>;
  abstract findById(id: string): Promise<Knight>;
  abstract save(knight: Knight): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}
