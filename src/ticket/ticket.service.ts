import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { Flight } from '../flight/flight.entity';
import { CreateTicketDTO } from './dto/ticketdto';
import { UpdateTicketDTO } from './dto/ticketdto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async create(ticketDto: CreateTicketDTO): Promise<Ticket> {
    const flight = await this.flightRepository.findOne({ where: { id: ticketDto.flightId } });

    if (!flight) {
      throw new Error('Flight not found');
    }

    const newTicket = this.ticketRepository.create({ ...ticketDto, flight });
    await this.ticketRepository.save(newTicket);
    return newTicket;
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find({ relations: ['flight'] });
  }

  async findOne(id: number): Promise<Ticket> {
    return await this.ticketRepository.findOne({ where: { id }, relations: ['flight'] });
  }

async update(id: number, updatedTicketDto: UpdateTicketDTO): Promise<Ticket> {
  const ticket = await this.ticketRepository.findOne({ where: { id } });

  if (!ticket) {
    return null;
  }

  this.ticketRepository.merge(ticket, updatedTicketDto);
  await this.ticketRepository.save(ticket);
  return ticket;
}


  async delete(id: number): Promise<boolean> {
    const result = await this.ticketRepository.delete(id);
    return result.affected > 0;
  }
}
