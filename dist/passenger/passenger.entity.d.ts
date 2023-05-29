import { Ticket } from 'src/ticket/ticket.entity';
export declare class Passenger implements IPassenger {
    id: number;
    fullName: string;
    phoneNumber: string;
    passport: string;
    dateOfBirth: Date;
    tickets: Ticket[];
    constructor(id: number, fullName: string, phoneNumber: string, passport: string, dateOfBirth: Date);
}
export interface IPassenger {
    id: number;
    fullName: string;
    phoneNumber: string;
    passport: string;
    dateOfBirth: Date;
}
