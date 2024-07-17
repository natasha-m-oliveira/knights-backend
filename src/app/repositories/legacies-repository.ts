import { Legacy } from '../entities/legacy';

export abstract class LegaciesRepository {
  abstract create(legacy: Legacy): Promise<void>;
}
