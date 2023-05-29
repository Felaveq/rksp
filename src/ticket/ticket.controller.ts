import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket, ITicket } from './ticket.entity';
import { ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { CreateTicketDTO } from './dto/ticketdto';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get()
  async findAll(): Promise<Ticket[]> {
    return await this.ticketService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Ticket> {
    return await this.ticketService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new ticket' })
  @ApiBody({ type: CreateTicketDTO })
  async create(@Body() ticket: CreateTicketDTO): Promise<Ticket> {
    return await this.ticketService.create(ticket);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedTicket: ITicket): Promise<Ticket> {
    return await this.ticketService.update(id, updatedTicket);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.ticketService.delete(id);
  }
}

