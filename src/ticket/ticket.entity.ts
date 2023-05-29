import { Flight } from 'src/flight/flight.entity';
import { Passenger } from 'src/passenger/passenger.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('tickets')
export class Ticket implements ITicket {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Flight, (flight) => flight.tickets)
  public flight: Flight;

  @ManyToOne(() => Passenger, (passenger) => passenger.tickets)
  public passenger: Passenger;

  @Column()
  public seatNumber: string;

  @Column()
  public price: number;

  constructor(id: number, flight: Flight, passengerName: Passenger, seatNumber: string, price: number) {
    this.id = id;
    this.flight = flight;
    this.passenger = passengerName;
    this.seatNumber = seatNumber;
    this.price = price;
  }
}

export interface ITicket {
  id: number;
  flight: Flight;
  passenger: Passenger;
  seatNumber: string;
  price: number;
}


  
  // export class Ticket implements ITicket {
  //   constructor(
  //     public id: number,
  //     public flightId: number,
  //     public passengerName: string,
  //     public seatNumber: string,
  //     public price: number
  //   ) {}
  // }
  