import { Module } from '@nestjs/common';
import { Flight } from 'src/flight/flight.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from 'src/airline/airline.entity';
import { Ticket } from 'src/ticket/ticket.entity';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';
import { Passenger } from './passenger.entity';

@Module({
  controllers: [PassengerController],
  providers: [PassengerService],
  imports: [DatasourceModule,TypeOrmModule.forFeature([Airline, Flight, Ticket,Passenger]),],
})
export class PassengerModule {}