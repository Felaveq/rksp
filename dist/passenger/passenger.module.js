"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerModule = void 0;
const common_1 = require("@nestjs/common");
const flight_entity_1 = require("../flight/flight.entity");
const datasource_module_1 = require("../datasource/datasource.module");
const typeorm_1 = require("@nestjs/typeorm");
const airline_entity_1 = require("../airline/airline.entity");
const ticket_entity_1 = require("../ticket/ticket.entity");
const passenger_controller_1 = require("./passenger.controller");
const passenger_service_1 = require("./passenger.service");
const passenger_entity_1 = require("./passenger.entity");
let PassengerModule = class PassengerModule {
};
PassengerModule = __decorate([
    (0, common_1.Module)({
        controllers: [passenger_controller_1.PassengerController],
        providers: [passenger_service_1.PassengerService],
        imports: [datasource_module_1.DatasourceModule, typeorm_1.TypeOrmModule.forFeature([airline_entity_1.Airline, flight_entity_1.Flight, ticket_entity_1.Ticket, passenger_entity_1.Passenger]),],
    })
], PassengerModule);
exports.PassengerModule = PassengerModule;
//# sourceMappingURL=passenger.module.js.map