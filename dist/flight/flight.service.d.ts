import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { Airline } from '../airline/airline.entity';
import { CreateFlightDTO } from './dto/flightdto';
import { UpdateFlightDTO } from './dto/flightdto';
export declare class FlightService {
    private readonly flightRepository;
    private readonly airlineRepository;
    constructor(flightRepository: Repository<Flight>, airlineRepository: Repository<Airline>);
    create(flightDto: CreateFlightDTO): Promise<Flight>;
    findAll(): Promise<Flight[]>;
    findOne(id: number): Promise<Flight>;
    update(id: number, updatedFlightDto: UpdateFlightDTO): Promise<Flight>;
    delete(id: number): Promise<boolean>;
}
