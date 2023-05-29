import { PassengerService } from './passenger.service';
import { CreatePassengerDTO } from './dto/passengerdto';
import { UpdatePassengerDTO } from './dto/passengerdto';
export declare class PassengerController {
    private readonly passengerService;
    constructor(passengerService: PassengerService);
    create(passengerDto: CreatePassengerDTO): Promise<import("./passenger.entity").Passenger>;
    findAll(): Promise<import("./passenger.entity").Passenger[]>;
    findOne(id: number): Promise<import("./passenger.entity").Passenger>;
    update(id: number, updatedPassengerDto: UpdatePassengerDTO): Promise<import("./passenger.entity").Passenger>;
    delete(id: number): Promise<boolean>;
}
