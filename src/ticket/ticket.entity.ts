import { Flight } from 'src/flight/flight.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('tickets')
export class Ticket implements ITicket {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Flight, (flight) => flight.tickets)
  public flight: Flight;

  @Column()
  public passengerName: string;

  @Column()
  public seatNumber: string;

  @Column()
  public price: number;

  constructor(id: number, flight: Flight, passengerName: string, seatNumber: string, price: number) {
    this.id = id;
    this.flight = flight;
    this.passengerName = passengerName;
    this.seatNumber = seatNumber;
    this.price = price;
  }
}

export interface ITicket {
  id: number;
  flight: Flight;
  passengerName: string;
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
  