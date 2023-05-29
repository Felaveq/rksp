export declare class CreateTicketDTO {
    flightId: number;
    passengerId: number;
    seatNumber: string;
    price: number;
}
export declare class UpdateTicketDTO {
    id: number;
    flightId?: number;
    passengerName?: string;
    seatNumber?: string;
    price?: number;
}
