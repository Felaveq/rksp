import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Flight } from '../flight/flight.entity';
import { CreateTicketDTO } from './dto/ticketdto';
import { UpdateTicketDTO } from './dto/ticketdto';
export declare class TicketService {
    private readonly ticketRepository;
    private readonly flightRepository;
    constructor(ticketRepository: Repository<Ticket>, flightRepository: Repository<Flight>);
    create(ticketDto: CreateTicketDTO): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    update(id: number, updatedTicketDto: UpdateTicketDTO): Promise<Ticket>;
    delete(id: number): Promise<boolean>;
}
