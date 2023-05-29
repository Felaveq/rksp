import { Module } from '@nestjs/common';
import {Flight} from './flight.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from 'src/airline/airline.entity';
import { Ticket } from 'src/ticket/ticket.entity';

@Module({
  controllers: [FlightController],
  providers: [FlightService],
  imports: [DatasourceModule,TypeOrmModule.forFeature([Airline, Flight, Ticket]),],
})
export class FlightModule {}