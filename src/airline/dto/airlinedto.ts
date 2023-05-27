export class CreateAirlineDTO {
  name: string;
  country: string;
}

export class UpdateAirlineDTO {
  id: number;
  name?: string;
  country?: string;
}
