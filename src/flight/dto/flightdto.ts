export class CreateFlightDTO {
    airlineId: number;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
  }
  
  export class UpdateFlightDTO {
    id: number;
    airlineId?: number;
    departureAirport?: string;
    arrivalAirport?: string;
    departureTime?: Date;
    arrivalTime?: Date;
  }
  