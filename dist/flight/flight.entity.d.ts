import { Airline } from 'src/airline/airline.entity';
import { Ticket } from 'src/ticket/ticket.entity';
export declare class Flight implements IFlight {
    id: number;
    airline: Airline;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
    tickets: Ticket[];
    constructor(id: number, airline: Airline, departureAirport: string, arrivalAirport: string, departureTime: Date, arrivalTime: Date);
    airlineId: number;
}
export interface IFlight {
    id: number;
    airlineId: number;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
}
