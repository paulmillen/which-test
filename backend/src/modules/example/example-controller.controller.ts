import { Controller, Get, Param } from '@nestjs/common';
import { Event, EventsService } from '../../entities/events';

@Controller('api/:id')
export class ExampleController {
  constructor(private readonly eventsService: EventsService) { }

  @Get('events')
  async getLatestByDate(
    @Param() params
  ): Promise<Event['payload'][]> {
    return await this.eventsService.findOne(
      params.id
    );
  }
}
