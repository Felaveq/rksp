import { Airline } from 'src/airline/airline.entity';
import { Flight } from 'src/flight/flight.entity';
import { Ticket } from 'src/ticket/ticket.entity';
import { Passenger } from 'src/passenger/passenger.entity';
export declare class DataSourceService {
    private airlines;
    getAirlines(): Airline[];
    addAirline(airline: Airline): void;
    private flights;
    getFlights(): Flight[];
    addFlight(flight: Flight): void;
    private tickets;
    getTickets(): Ticket[];
    addTicket(ticket: Ticket): void;
    private passenger;
    getPassengers(): Passenger[];
    addPassenger(passenger: Passenger): void;
}
