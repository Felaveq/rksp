import { Flight } from 'src/flight/flight.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('airlines')
export class Airline implements IAirline {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public country: string;

  @OneToMany(() => Flight, (flight) => flight.airline)
  public flights: Flight[];

  constructor(id: number, name: string, country: string) {
    this.id = id;
    this.name = name;
    this.country = country;
  }
}



export interface IAirline {
    id: number;
    name: string;
    country: string;
  }

