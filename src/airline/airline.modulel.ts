import { Module } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { AirlineController } from './airline.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from './airline.entity';
import { Flight } from 'src/flight/flight.entity';
import { Ticket } from 'src/ticket/ticket.entity';

@Module({
  controllers: [AirlineController],
  providers: [AirlineService],
  imports: [DatasourceModule,TypeOrmModule.forFeature([Airline, Flight, Ticket]),],
})
export class AirlineModule {}


  