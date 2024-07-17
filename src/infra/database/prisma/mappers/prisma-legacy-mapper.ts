import { Legacy as PrismaLegacy } from '@prisma/client';
import { Legacy } from '@app/entities/legacy';
import { Attribute, Weapon } from '@app/entities/weapon';
import { Knight } from '@app/entities/knight';

export class PrismaLegacyMapper {
  static toPrisma(legacy: Legacy): PrismaLegacy {
    const knight = legacy.knight;

    const weapons = knight.weapons.map((weapon) => ({
      name: weapon.name,
      mod: weapon.mod,
      attr: weapon.attr,
      equipped: weapon.equipped,
    }));

    return {
      knightId: knight.id,
      name: knight.name,
      nickname: knight.nickname,
      birthday: knight.birthday,
      weapons: weapons,
      attributes: knight.attributes,
      keyAttribute: knight.keyAttribute,
      deletedAt: legacy.deletedAt,
    } as PrismaLegacy;
  }

  static toDomain(legacy: PrismaLegacy): Legacy {
    const weapons = legacy.weapons.map(
      (weapon) =>
        new Weapon({
          name: weapon.name,
          mod: weapon.mod,
          attr: Attribute[weapon.attr],
          equipped: weapon.equipped,
        }),
    );

    const knight = new Knight({
      id: legacy.knightId,
      name: legacy.name,
      nickname: legacy.nickname,
      birthday: legacy.birthday,
      weapons: weapons,
      attributes: legacy.attributes,
      keyAttribute: Attribute[legacy.keyAttribute],
    });

    return new Legacy({
      id: legacy.id,
      knight: knight,
      deletedAt: legacy.deletedAt,
    });
  }
}
