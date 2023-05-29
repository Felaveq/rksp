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
exports.Flight = void 0;
const airline_entity_1 = require("../airline/airline.entity");
const ticket_entity_1 = require("../ticket/ticket.entity");
const typeorm_1 = require("typeorm");
let Flight = class Flight {
    constructor(id, airline, departureAirport, arrivalAirport, departureTime, arrivalTime) {
        this.id = id;
        this.airline = airline;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Flight.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => airline_entity_1.Airline, (airline) => airline.flights),
    __metadata("design:type", airline_entity_1.Airline)
], Flight.prototype, "airline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "departureAirport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flight.prototype, "arrivalAirport", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Flight.prototype, "departureTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Flight.prototype, "arrivalTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.id),
    __metadata("design:type", Array)
], Flight.prototype, "tickets", void 0);
Flight = __decorate([
    (0, typeorm_1.Entity)('flights'),
    __metadata("design:paramtypes", [Number, airline_entity_1.Airline, String, String, Date,
        Date])
], Flight);
exports.Flight = Flight;
//# sourceMappingURL=flight.entity.js.map