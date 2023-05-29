import { AirlineService } from './airline.service';
import { Airline, IAirline } from './airline.entity';
export declare class AirlineController {
    private readonly airlineService;
    constructor(airlineService: AirlineService);
    findAll(): Promise<Airline[]>;
    findOne(id: number): Promise<Airline>;
    create(airline: IAirline): Promise<Airline>;
    update(id: number, updatedAirline: IAirline): Promise<Airline>;
    delete(id: number): Promise<boolean>;
}
