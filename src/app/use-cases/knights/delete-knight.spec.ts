import { InMemoryKnightsRepository } from '@test/repositories/in-memory-knights-repository';
import { Knight } from '@app/entities/knight';
import { Attribute } from '@app/entities/weapon';
import { DeleteKnight } from './delete-knight';
import { KnightNotFound } from './errors/knight-not-found';

describe('Delete Knight', () => {
  let knightsRepository: InMemoryKnightsRepository;
  let deleteKnight: DeleteKnight;

  beforeEach(() => {
    knightsRepository = new InMemoryKnightsRepository();

    deleteKnight = new DeleteKnight(knightsRepository);
  });

  it('should be able to delete a knight', async () => {
    await knightsRepository.create(
      new Knight({
        name: 'Troy Salazar',
        nickname: 'troy_salazar',
        birthday: new Date('1989-09-02T22:29:56-03:00'),
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

    await deleteKnight.execute({
      id: knightsRepository.knights[0].id,
    });

    expect(knightsRepository.knights.length).toEqual(0);
  });

  it('should not be able to delete a non-existent knight', async () => {
    await expect(
      deleteKnight.execute({
        id: '2fcf920f-1d70-5783-bc79-248362d4c518',
      }),
    ).rejects.toThrow(KnightNotFound);
  });
});
