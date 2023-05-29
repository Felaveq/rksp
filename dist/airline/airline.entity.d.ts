import { Flight } from 'src/flight/flight.entity';
export declare class Airline implements IAirline {
    id: number;
    name: string;
    country: string;
    flights: Flight[];
    constructor(id: number, name: string, country: string);
}
export interface IAirline {
    id: number;
    name: string;
    country: string;
}
