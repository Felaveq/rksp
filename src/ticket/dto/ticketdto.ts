export class CreateTicketDTO {
    flightId: number;
    passengerName: string;
    seatNumber: string;
    price: number;
  }
  
  export class UpdateTicketDTO {
    id: number;
    flightId?: number;
    passengerName?: string;
    seatNumber?: string;
    price?: number;
  }
  