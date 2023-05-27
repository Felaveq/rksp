import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { Airline, IAirline } from './airline.entity';
import { ApiBody, ApiOperation, ApiProperty } from '@nestjs/swagger';



class AirlineDto implements IAirline {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  country: string;
}


@Controller('airlines')
export class AirlineController {
  constructor(private readonly airlineService: AirlineService) {}

  @Get()
  async findAll(): Promise<Airline[]> {
    return await this.airlineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Airline> {
    return await this.airlineService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new airline' })
  @ApiBody({ type: AirlineDto })
  async create(@Body() airline: IAirline): Promise<Airline> {
    return await this.airlineService.create(airline);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedAirline: IAirline): Promise<Airline> {
    return await this.airlineService.update(id, updatedAirline);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.airlineService.delete(id);
  }
}

