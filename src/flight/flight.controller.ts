import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FlightService } from './flight.service';
import { Flight, IFlight } from './flight.entity';
import { ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { CreateFlightDTO } from './dto/flightdto';


@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  async findAll(): Promise<Flight[]> {
    return await this.flightService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Flight> {
    return await this.flightService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new flight' })
  @ApiBody({ type: CreateFlightDTO })
  @Post()
  async create(@Body() flight: IFlight): Promise<Flight> {
    return await this.flightService.create(flight);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedFlight: IFlight): Promise<Flight> {
    return await this.flightService.update(id, updatedFlight);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.flightService.delete(id);
  }
}
