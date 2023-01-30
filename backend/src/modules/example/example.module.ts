import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../../entities/events/event.entity';
import { EventsService } from '../../entities/events/events.service';
import { ExampleController } from './example-controller.controller';

@Module({
  // imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventsService],
  controllers: [ExampleController],
})
export class ExampleModule { }
