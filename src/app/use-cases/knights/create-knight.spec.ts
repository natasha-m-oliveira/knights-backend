import { InMemoryKnightsRepository } from '@test/repositories/in-memory-knights-repository';
import { CreateKnight } from './create-knight';
import { KnightAlreadyExists } from './errors/knight-already-exists';
import { Attribute, Weapon } from '@app/entities/weapon';

describe('Create Knight', () => {
  let knightsRepository: InMemoryKnightsRepository;
  let createKnight: CreateKnight;

  beforeEach(() => {
    knightsRepository = new InMemoryKnightsRepository();
    createKnight = new CreateKnight(knightsRepository);
  });

  it('should be able to create a new knight', async () => {
    const { knight } = await createKnight.execute({
      name: 'Ethan Fields',
      nickname: 'ethan_fields',
      birthday: new Date('2003-02-04T21:02:15-02:00'),
      weapons: [
        new Weapon({
          name: 'sword',
          mod: 3,
          attr: Attribute.strength,
          equipped: true,
        }),
      ],
      attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      keyAttribute: Attribute.strength,
    });

    expect(knight).toEqual(knightsRepository.knights[0]);
  });

  it('should not be able to create knight already exists', async () => {
    await createKnight.execute({
      name: 'Jessie King',
      nickname: 'jessie',
      birthday: new Date('2001-03-28T23:47:12-03:00'),
      weapons: [
        new Weapon({
          name: 'sword',
          mod: 3,
          attr: Attribute.strength,
          equipped: true,
        }),
      ],
      attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      keyAttribute: Attribute.strength,
    });

    await expect(
      createKnight.execute({
        name: 'Jessie Craig',
        nickname: 'jessie',
        birthday: new Date('2006-03-10T10:09:27-03:00'),
        weapons: [
          new Weapon({
            name: 'sword',
            mod: 3,
            attr: Attribute.strength,
            equipped: true,
          }),
        ],
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        keyAttribute: Attribute.strength,
      }),
    ).rejects.toThrow(KnightAlreadyExists);
  });
});
