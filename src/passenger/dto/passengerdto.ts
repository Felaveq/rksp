import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';
import { UsePipes, ValidationPipe } from "@nestjs/common";

@UsePipes(new ValidationPipe({ transform: true }))
export class CreatePassengerDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fullName: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    passport: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    @Transform(({ value }) => new Date(value))
    dateOfBirth: Date;
  }
  export class UpdatePassengerDTO {
    readonly fullName?: string;
    readonly phoneNumber?: string;
    readonly passportNumber?: string;
    readonly dateOfBirth?: Date;
  }
  