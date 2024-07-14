import { NotFoundException } from '@nestjs/common';

export class KnightNotFound extends NotFoundException {
  constructor() {
    super('Knight not found.');
  }
}
