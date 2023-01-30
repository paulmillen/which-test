import { resetAllWhenMocks, when } from 'jest-when';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { EventsService } from './events.service';

const repository = new Repository<Event>({} as any, {} as any);
const eventsService = new EventsService(repository);

describe(EventsService, () => {
  beforeEach(() => {
    jest.resetAllMocks();
    resetAllWhenMocks();
  });

  describe('findByDateOrLatestFor', () => {
    it('calls the repository correctly', async () => {
      const id = '03f3306d-a4a3-4179-ab88-81af66df8b7c';

      when(jest.spyOn(repository, 'findOne'))
        .calledWith({
          where: [{ id }],
          order: { timestamp: 'DESC' },
        })
        .mockResolvedValue([]);

      const response = await eventsService.findOne(id);

      expect(response).toEqual([]);
    });
  });
});
