import { Airline } from 'src/airline/airline.entity';
import { Ticket } from 'src/ticket/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity('flights')
export class Flight implements IFlight {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Airline, (airline) => airline.flights)
  public airline: Airline;

  @Column()
  public departureAirport: string;

  @Column()
  public arrivalAirport: string;

  @Column()
  public departureTime: Date;

  @Column()
  public arrivalTime: Date;

  @OneToMany(() => Ticket, (ticket) => ticket.flight)
  public tickets: Ticket[];

  constructor(
    id: number,
    airline: Airline,
    departureAirport: string,
    arrivalAirport: string,
    departureTime: Date,
    arrivalTime: Date
  ) {
    this.id = id;
    this.airline = airline;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
  }
  airlineId: number;
}
export interface IFlight {
    id: number;
    airlineId: number;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
  }
  