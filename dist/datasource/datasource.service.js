"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceService = void 0;
const common_1 = require("@nestjs/common");
let DataSourceService = class DataSourceService {
    constructor() {
        this.airlines = [];
        this.flights = [];
        this.tickets = [];
        this.passenger = [];
    }
    getAirlines() {
        return this.airlines;
    }
    addAirline(airline) {
        this.airlines.push(airline);
    }
    getFlights() {
        return this.flights;
    }
    addFlight(flight) {
        this.flights.push(flight);
    }
    getTickets() {
        return this.tickets;
    }
    addTicket(ticket) {
        this.tickets.push(ticket);
    }
    getPassengers() {
        return this.passenger;
    }
    addPassenger(passenger) {
        this.passenger.push(passenger);
    }
};
DataSourceService = __decorate([
    (0, common_1.Injectable)()
], DataSourceService);
exports.DataSourceService = DataSourceService;
//# sourceMappingURL=datasource.service.js.map