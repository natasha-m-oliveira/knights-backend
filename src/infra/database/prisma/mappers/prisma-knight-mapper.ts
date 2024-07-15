import { Knight as PrismaKnight } from '@prisma/client';
import { Knight } from '@app/entities/knight';
import { Attribute, Weapon } from '@app/entities/weapon';

export class PrismaKnightMapper {
  static toPrisma(knight: Knight): PrismaKnight {
    const weapons = knight.weapons.map((weapon) => ({
      name: weapon.name,
      mod: weapon.mod,
      attr: weapon.attr,
      equipped: weapon.equipped,
    }));

    return {
      name: knight.name,
      nickname: knight.nickname,
      birthday: knight.birthday,
      weapons: weapons,
      attributes: knight.attributes,
      keyAttribute: knight.keyAttribute,
    } as PrismaKnight;
  }

  static toDomain(knight: PrismaKnight): Knight {
    const weapons = knight.weapons.map(
      (weapon) =>
        new Weapon({
          name: weapon.name,
          mod: weapon.mod,
          attr: Attribute[weapon.attr],
          equipped: weapon.equipped,
        }),
    );

    return new Knight({
      id: knight.id,
      name: knight.name,
      nickname: knight.nickname,
      birthday: knight.birthday,
      weapons: weapons,
      attributes: knight.attributes,
      keyAttribute: Attribute[knight.keyAttribute],
    });
  }
}
