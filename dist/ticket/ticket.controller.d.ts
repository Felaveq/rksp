import { TicketService } from './ticket.service';
import { Ticket, ITicket } from './ticket.entity';
import { CreateTicketDTO } from './dto/ticketdto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    create(ticket: CreateTicketDTO): Promise<Ticket>;
    update(id: number, updatedTicket: ITicket): Promise<Ticket>;
    delete(id: number): Promise<boolean>;
}
