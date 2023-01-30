import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventsService {
  constructor(
    // @InjectRepository(Event)
    // private eventRepository: Repository<Event>,
  ) {}

  async findOne(
    id: string,
  ): Promise<any> {
      // return await this.eventRepository.findOne({
      //   where: [{ id }],
      //   order: { timestamp: 'DESC' },
      // });
  }
}
