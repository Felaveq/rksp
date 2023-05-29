"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirlineModule = void 0;
const common_1 = require("@nestjs/common");
const airline_service_1 = require("./airline.service");
const airline_controller_1 = require("./airline.controller");
const datasource_module_1 = require("../datasource/datasource.module");
const typeorm_1 = require("@nestjs/typeorm");
const airline_entity_1 = require("./airline.entity");
const flight_entity_1 = require("../flight/flight.entity");
const ticket_entity_1 = require("../ticket/ticket.entity");
let AirlineModule = class AirlineModule {
};
AirlineModule = __decorate([
    (0, common_1.Module)({
        controllers: [airline_controller_1.AirlineController],
        providers: [airline_service_1.AirlineService],
        imports: [datasource_module_1.DatasourceModule, typeorm_1.TypeOrmModule.forFeature([airline_entity_1.Airline, flight_entity_1.Flight, ticket_entity_1.Ticket]),],
    })
], AirlineModule);
exports.AirlineModule = AirlineModule;
//# sourceMappingURL=airline.modulel.js.map