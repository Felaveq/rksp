import { Module } from '@nestjs/common';
import {Ticket} from './ticket.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from 'src/airline/airline.entity';
import { Flight } from 'src/flight/flight.entity';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports: [DatasourceModule,TypeOrmModule.forFeature([Airline, Flight, Ticket]),],
})
export class TicketModule {}