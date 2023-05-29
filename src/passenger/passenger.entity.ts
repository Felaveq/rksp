import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from 'src/ticket/ticket.entity';

@Entity('passengers')
export class Passenger implements IPassenger {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public fullName: string;

  @Column()
  public phoneNumber: string;

  @Column()
  public passport: string;

  @Column()
  public dateOfBirth: Date;

  @OneToMany(() => Ticket, (ticket) => ticket.passenger)
  public tickets: Ticket[];

  constructor(id: number, fullName: string, phoneNumber: string, passport: string, dateOfBirth: Date) {
    this.id = id;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.passport = passport;
    this.dateOfBirth = dateOfBirth;
  }
}

export interface IPassenger {
    id: number;
    fullName: string;
    phoneNumber: string;
    passport: string;
    dateOfBirth: Date;
}
