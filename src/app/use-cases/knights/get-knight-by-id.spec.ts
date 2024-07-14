import { InMemoryKnightsRepository } from '../../../../test/repositories/in-memory-knights-repository';
import { Knight } from '../../entities/knight';
import { KnightNotFound } from './errors/knight-not-found';
import { GetKnightById } from './get-knight-by-id';

describe('Get Knight By Id', () => {
  let knightsRepository: InMemoryKnightsRepository;
  let getKnightById: GetKnightById;

  beforeEach(() => {
    knightsRepository = new InMemoryKnightsRepository();

    getKnightById = new GetKnightById(knightsRepository);
  });

  it('should be able to get knight by id', async () => {
    await knightsRepository.create(
      new Knight({
        name: 'Hulda Banks',
        nickname: 'hulda_banks',
        birthday: new Date('2006-08-14T09:50:06-03:00'),
        weapons: [],
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        keyAttribute: 'strength',
      }),
    );

    const { knight } = await getKnightById.execute({
      id: knightsRepository.knights[0].id,
    });

    expect(knight).toEqual(knightsRepository.knights[0]);
  });

  it('should not be able to get non-existent knight by id', async () => {
    await expect(
      getKnightById.execute({
        id: '2fcf920f-1d70-5783-bc79-248362d4c518',
      }),
    ).rejects.toThrow(KnightNotFound);
  });
});
