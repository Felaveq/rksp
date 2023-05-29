import { Repository } from 'typeorm';
import { Airline } from './airline.entity';
import { CreateAirlineDTO } from './dto/airlinedto';
import { UpdateAirlineDTO } from './dto/airlinedto';
export declare class AirlineService {
    private readonly airlineRepository;
    constructor(airlineRepository: Repository<Airline>);
    create(airlineDto: CreateAirlineDTO): Promise<Airline>;
    findAll(): Promise<Airline[]>;
    findOne(id: number): Promise<Airline>;
    update(id: number, updatedAirlineDto: UpdateAirlineDTO): Promise<Airline>;
    delete(id: number): Promise<boolean>;
}
