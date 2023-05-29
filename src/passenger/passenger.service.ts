import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passenger } from './passenger.entity';
import { CreatePassengerDTO } from './dto/passengerdto';
import { UpdatePassengerDTO } from './dto/passengerdto';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private readonly passengerRepository: Repository<Passenger>,
  ) {}

  async create(passengerDto: CreatePassengerDTO): Promise<Passenger> {
    // if (!passengerDto.passport.match(/^[A-Z0-9]{8}$/)) {
    //   throw new Error('Invalid passport format');
    // }
  
    const existingPassenger = await this.passengerRepository.findOne({ where: { passport: passengerDto.passport } });
    if (existingPassenger) {
      throw new Error('Passenger with this passport already exists');
    }
    const newPassenger = this.passengerRepository.create(passengerDto);
    await this.passengerRepository.save(newPassenger);
    return newPassenger;
  }

  async findAll(): Promise<Passenger[]> {
    return await this.passengerRepository.find();
  }

  async findOne(id: number): Promise<Passenger> {
    return await this.passengerRepository.findOne({ where: { id } });
  }

  async update(id: number, updatedPassengerDto: UpdatePassengerDTO): Promise<Passenger> {
    const passenger = await this.passengerRepository.findOne({ where: { id } });
    if (!passenger) {
      return null;
    }
    this.passengerRepository.merge(passenger, updatedPassengerDto);
    await this.passengerRepository.save(passenger);
    return passenger;
  }  

  async delete(id: number): Promise<boolean> {
    const result = await this.passengerRepository.delete(id);
    return result.affected > 0;
  }
}
