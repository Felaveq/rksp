import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { CreatePassengerDTO } from './dto/passengerdto';
import { UpdatePassengerDTO } from './dto/passengerdto';

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  async create(@Body() passengerDto: CreatePassengerDTO) {
    return this.passengerService.create(passengerDto);
  }

  @Get()
  async findAll() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.passengerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedPassengerDto: UpdatePassengerDTO) {
    return this.passengerService.update(id, updatedPassengerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.passengerService.delete(id);
  }
}
