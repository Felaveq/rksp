import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateTicketDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  flightId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  passengerId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  seatNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
  
export class UpdateTicketDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  flightId?: number;

  @IsString()
  passengerName?: string;

  @IsString()
  seatNumber?: string;

  @IsNumber()
  price?: number;
}
  