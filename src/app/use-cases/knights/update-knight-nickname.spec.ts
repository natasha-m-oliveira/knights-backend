import { InMemoryKnightsRepository } from '../../../../test/repositories/in-memory-knights-repository';
import { Knight } from '../../entities/knight';
import { KnightNotFound } from './errors/knight-not-found';
import { UpdateKnightNickname } from './update-knight-nickname';

describe('Update Knight Nickname', () => {
  let knightsRepository: InMemoryKnightsRepository;
  let updateKnightNickname: UpdateKnightNickname;

  beforeEach(() => {
    knightsRepository = new InMemoryKnightsRepository();

    updateKnightNickname = new UpdateKnightNickname(knightsRepository);
  });

  it('should be able to update knight nickname', async () => {
    await knightsRepository.create(
      new Knight({
        name: 'Patrick Pratt',
        nickname: 'patrick_pratt',
        birthday: new Date('2013-11-02T07:33:40-02:00'),
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

    const { knight } = await updateKnightNickname.execute({
      id: knightsRepository.knights[0].id,
      nickname: 'pratt',
    });

    expect(knight).toEqual(knightsRepository.knights[0]);
  });

  it('should not be able to update a non-existent knight nickname', async () => {
    await expect(
      updateKnightNickname.execute({
        id: '2fcf920f-1d70-5783-bc79-248362d4c518',
        nickname: 'klein',
      }),
    ).rejects.toThrow(KnightNotFound);
  });
});
