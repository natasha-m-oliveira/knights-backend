import { Knight } from '../entities/knight';

export abstract class KnightsRepository {
  abstract create(knight: Knight): Promise<void>;
  abstract findByNickname(nickname: string): Promise<Knight>;
}
