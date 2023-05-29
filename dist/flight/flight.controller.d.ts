import { FlightService } from './flight.service';
import { Flight, IFlight } from './flight.entity';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    findAll(): Promise<Flight[]>;
    findOne(id: number): Promise<Flight>;
    create(flight: IFlight): Promise<Flight>;
    update(id: number, updatedFlight: IFlight): Promise<Flight>;
    delete(id: number): Promise<boolean>;
}
