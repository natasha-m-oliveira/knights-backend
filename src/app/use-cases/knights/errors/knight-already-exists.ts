import { BadRequestException } from '@nestjs/common';

export class KnightAlreadyExists extends BadRequestException {
  constructor() {
    super('Knight already exists.');
  }
}
