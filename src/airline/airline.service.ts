import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airline } from './airline.entity';
import { CreateAirlineDTO } from './dto/airlinedto';
import { UpdateAirlineDTO } from './dto/airlinedto';

@Injectable()
export class AirlineService {
  constructor(
    @InjectRepository(Airline)
    private readonly airlineRepository: Repository<Airline>,
  ) {}

  async create(airlineDto: CreateAirlineDTO): Promise<Airline> {
    const newAirline = this.airlineRepository.create(airlineDto);
    await this.airlineRepository.save(newAirline);
    return newAirline;
  }

  async findAll(): Promise<Airline[]> {
    return await this.airlineRepository.find();
  }

  async findOne(id: number): Promise<Airline> {
    return await this.airlineRepository.findOne({ where: { id } });
  }
  
  async update(id: number, updatedAirlineDto: UpdateAirlineDTO): Promise<Airline> {
    const airline = await this.airlineRepository.findOne({ where: { id } });
    if (!airline) {
      return null;
    }
    this.airlineRepository.merge(airline, updatedAirlineDto);
    await this.airlineRepository.save(airline);
    return airline;
  }  

  async delete(id: number): Promise<boolean> {
    const result = await this.airlineRepository.delete(id);
    return result.affected > 0;
  }
}
