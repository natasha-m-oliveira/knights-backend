import { InMemoryKnightsRepository } from '@test/repositories/in-memory-knights-repository';
import { Knight } from '@app/entities/knight';
import { Attribute } from '@app/entities/weapon';
import { ListKnights } from './list-knights';

describe('List Knights', () => {
  let knightsRepository: InMemoryKnightsRepository;
  let listKnights: ListKnights;

  beforeEach(() => {
    knightsRepository = new InMemoryKnightsRepository();

    listKnights = new ListKnights(knightsRepository);
  });

  it('should be able to list knights', async () => {
    await knightsRepository.create(
      new Knight({
        name: 'Sophia McCormick',
        nickname: 'sophia_mccormick',
        birthday: new Date('2012-07-14T12:50:05-03:00'),
        weapons: [],
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
    );

    const { knights } = await listKnights.execute({});

    expect(knights.length).toEqual(1);
  });
});
