export declare class CreateFlightDTO {
    id: number;
    airlineId: number;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
}
export declare class UpdateFlightDTO {
    id: number;
    airlineId?: number;
    departureAirport?: string;
    arrivalAirport?: string;
    departureTime?: Date;
    arrivalTime?: Date;
}
