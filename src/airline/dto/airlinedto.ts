import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateAirlineDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;
}

export class UpdateAirlineDTO {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  name?: string;

  @IsString()
  country?: string;
}
