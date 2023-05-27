import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flight.entity';
import { Airline } from '../airline/airline.entity';
import { CreateFlightDTO } from './dto/flightdto';
import { UpdateFlightDTO } from './dto/flightdto';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
    @InjectRepository(Airline)
    private readonly airlineRepository: Repository<Airline>,
  ) {}

  async create(flightDto: CreateFlightDTO): Promise<Flight> {
    const airline = await this.airlineRepository.findOne({ where: { id: flightDto.airlineId }, relations: ['flights'] });
    if (!airline) {
      throw new Error('Airline not found');
    }
  
    const newFlight = this.flightRepository.create({ ...flightDto, airline });
    await this.flightRepository.save(newFlight);
    return newFlight;
  }

  async findAll(): Promise<Flight[]> {
    return await this.flightRepository.find({ relations: ['airline'] });
  }

  async findOne(id: number): Promise<Flight> {
  return await this.flightRepository.findOne({
    where: { id },
    relations: ['airline'],
  });
}

async update(id: number, updatedFlightDto: UpdateFlightDTO): Promise<Flight> {
  const flight = await this.flightRepository.findOne({
    where: { id },
  });

  if (!flight) {
    return null;
  }

  this.flightRepository.merge(flight, updatedFlightDto);
  await this.flightRepository.save(flight);
  return flight;
}


  async delete(id: number): Promise<boolean> {
    const result = await this.flightRepository.delete(id);
    return result.affected > 0;
  }
}
