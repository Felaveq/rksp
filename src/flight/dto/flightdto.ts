import { UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

@UsePipes(new ValidationPipe({ transform: true }))
export class CreateFlightDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  airlineId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  departureAirport: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  arrivalAirport: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  departureTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  arrivalTime: Date;
}
  
export class UpdateFlightDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  airlineId?: number;

  @IsString()
  departureAirport?: string;

  @IsString()
  arrivalAirport?: string;

  @IsDate()
  departureTime?: Date;

  @IsDate()
  arrivalTime?: Date;
}
  