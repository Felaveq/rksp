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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
const flight_entity_1 = require("../flight/flight.entity");
let TicketService = class TicketService {
    constructor(ticketRepository, flightRepository) {
        this.ticketRepository = ticketRepository;
        this.flightRepository = flightRepository;
    }
    async create(ticketDto) {
        const flight = await this.flightRepository.findOne({ where: { id: ticketDto.flightId } });
        if (!flight) {
            throw new Error('Flight not found');
        }
        const existingTicket = await this.ticketRepository.findOne({
            where: {
                seatNumber: ticketDto.seatNumber,
                flight: { id: ticketDto.flightId }
            }
        });
        if (existingTicket) {
            throw new Error('Seat is already taken');
        }
        if (ticketDto.price < 0) {
            throw new Error('Ticket price cannot be negative');
        }
        const newTicket = this.ticketRepository.create(Object.assign(Object.assign({}, ticketDto), { flight }));
        await this.ticketRepository.save(newTicket);
        return newTicket;
    }
    async findAll() {
        return await this.ticketRepository.find({ relations: ['flight'] });
    }
    async findOne(id) {
        return await this.ticketRepository.findOne({ where: { id }, relations: ['flight'] });
    }
    async update(id, updatedTicketDto) {
        const ticket = await this.ticketRepository.findOne({ where: { id } });
        if (!ticket) {
            return null;
        }
        this.ticketRepository.merge(ticket, updatedTicketDto);
        await this.ticketRepository.save(ticket);
        return ticket;
    }
    async delete(id) {
        const result = await this.ticketRepository.delete(id);
        return result.affected > 0;
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(1, (0, typeorm_1.InjectRepository)(flight_entity_1.Flight)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map