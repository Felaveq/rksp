"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_entity_1 = require("./flight.entity");
const airline_entity_1 = require("../airline/airline.entity");
let FlightService = class FlightService {
    constructor(flightRepository, airlineRepository) {
        this.flightRepository = flightRepository;
        this.airlineRepository = airlineRepository;
    }
    async create(flightDto) {
        const airline = await this.airlineRepository.findOne({ where: { id: flightDto.airlineId }, relations: ['flights'] });
        if (!airline) {
            throw new Error('Airline not found');
        }
        if (flightDto.departureTime >= flightDto.arrivalTime) {
            throw new Error('Departure time must be earlier than arrival time');
        }
        const existingFlight = await this.flightRepository.findOne({ where: { departureAirport: flightDto.departureAirport, arrivalAirport: flightDto.arrivalAirport, departureTime: flightDto.departureTime } });
        if (existingFlight) {
            throw new Error('Flight with the same departure and arrival airports and departure time already exists');
        }
        const newFlight = this.flightRepository.create(Object.assign(Object.assign({}, flightDto), { airline }));
        await this.flightRepository.save(newFlight);
        return newFlight;
    }
    async findAll() {
        return await this.flightRepository.find({ relations: ['airline'] });
    }
    async findOne(id) {
        return await this.flightRepository.findOne({
            where: { id },
            relations: ['airline'],
        });
    }
    async update(id, updatedFlightDto) {
        const flight = await this.flightRepository.findOne({
            where: { id },
        });
        if (!flight) {
            return null;
        }
        this.flightRepository.merge(flight, updatedFlightDto);
        await this.flightRepository.save(flight);
        return flight;
    }
    async delete(id) {
        const result = await this.flightRepository.delete(id);
        return result.affected > 0;
    }
};
FlightService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_entity_1.Flight)),
    __param(1, (0, typeorm_1.InjectRepository)(airline_entity_1.Airline)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map