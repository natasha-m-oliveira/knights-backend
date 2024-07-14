import { Injectable } from '@nestjs/common';
import { Attributes, Knight } from '../../entities/knight';
import { Attribute, Weapon } from '../../entities/weapon';
import { KnightsRepository } from '../../repositories/knights-repository';
import { KnightAlreadyExists } from './errors/knight-already-exists';

type CreateKnightRequest = {
  name: string;
  nickname: string;
  birthday: Date;
  weapons: {
    name: string;
    mod: number;
    attr: Attribute;
    equipped: boolean;
  }[];
  attributes: Attributes;
  keyAttribute: Attribute;
};

type CreateKnightResponse = {
  knight: Knight;
};

@Injectable()
export class CreateKnight {
  constructor(private knightsRepository: KnightsRepository) {}

  async execute(props: CreateKnightRequest): Promise<CreateKnightResponse> {
    const knightAlreadyExists = await this.knightsRepository.findByNickname(
      props.nickname,
    );

    if (knightAlreadyExists) throw new KnightAlreadyExists();

    const weapons = props.weapons.map(
      (weapon) =>
        new Weapon({
          name: weapon.name,
          mod: weapon.mod,
          attr: weapon.attr,
          equipped: weapon.equipped,
        }),
    );

    const knight = new Knight({
      name: props.name,
      nickname: props.nickname,
      birthday: props.birthday,
      weapons: weapons,
      attributes: props.attributes,
      keyAttribute: props.keyAttribute,
    });

    await this.knightsRepository.create(knight);

    return { knight };
  }
}
