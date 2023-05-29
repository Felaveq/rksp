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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const flight_entity_1 = require("../flight/flight.entity");
const passenger_entity_1 = require("../passenger/passenger.entity");
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
    constructor(id, flight, passengerName, seatNumber, price) {
        this.id = id;
        this.flight = flight;
        this.passenger = passengerName;
        this.seatNumber = seatNumber;
        this.price = price;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flight_entity_1.Flight, (flight) => flight.tickets),
    __metadata("design:type", flight_entity_1.Flight)
], Ticket.prototype, "flight", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => passenger_entity_1.Passenger, (passenger) => passenger.tickets),
    __metadata("design:type", passenger_entity_1.Passenger)
], Ticket.prototype, "passenger", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ticket.prototype, "seatNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Ticket.prototype, "price", void 0);
Ticket = __decorate([
    (0, typeorm_1.Entity)('tickets'),
    __metadata("design:paramtypes", [Number, flight_entity_1.Flight, passenger_entity_1.Passenger, String, Number])
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.entity.js.map