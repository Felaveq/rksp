import { Injectable } from '@nestjs/common';
import { Airline } from 'src/airline/airline.entity';
import { Flight } from 'src/flight/flight.entity';
import { Ticket } from 'src/ticket/ticket.entity';
import { Passenger } from 'src/passenger/passenger.entity';

@Injectable()
export class DataSourceService {
  private airlines: Airline[] = [];

  getAirlines(): Airline[] {
    return this.airlines;   
  }
  addAirline(airline: Airline): void {
    this.airlines.push(airline);
  }
  private flights: Flight[] = [];
  getFlights(): Flight[] {
    return this.flights;
  }
  addFlight(flight: Flight): void {
    this.flights.push(flight);
  }
  private tickets: Ticket[] = [];
  getTickets(): Ticket[] {
    return this.tickets;
  }
  addTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
    }
  private passenger: Passenger[] = [];
  getPassengers(): Passenger[] {
    return this.passenger;
  }
  addPassenger(passenger: Passenger): void {
    this.passenger.push(passenger);
    }
}
