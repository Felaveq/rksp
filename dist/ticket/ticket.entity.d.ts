import { Flight } from 'src/flight/flight.entity';
import { Passenger } from 'src/passenger/passenger.entity';
export declare class Ticket implements ITicket {
    id: number;
    flight: Flight;
    passenger: Passenger;
    seatNumber: string;
    price: number;
    constructor(id: number, flight: Flight, passengerName: Passenger, seatNumber: string, price: number);
}
export interface ITicket {
    id: number;
    flight: Flight;
    passenger: Passenger;
    seatNumber: string;
    price: number;
}
