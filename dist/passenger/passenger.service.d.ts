import { Repository } from 'typeorm';
import { Passenger } from './passenger.entity';
import { CreatePassengerDTO } from './dto/passengerdto';
import { UpdatePassengerDTO } from './dto/passengerdto';
export declare class PassengerService {
    private readonly passengerRepository;
    constructor(passengerRepository: Repository<Passenger>);
    create(passengerDto: CreatePassengerDTO): Promise<Passenger>;
    findAll(): Promise<Passenger[]>;
    findOne(id: number): Promise<Passenger>;
    update(id: number, updatedPassengerDto: UpdatePassengerDTO): Promise<Passenger>;
    delete(id: number): Promise<boolean>;
}
