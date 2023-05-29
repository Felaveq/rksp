"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const airline_modulel_1 = require("./airline/airline.modulel");
const datasource_module_1 = require("./datasource/datasource.module");
const flight_module_1 = require("./flight/flight.module");
const ticket_module_1 = require("./ticket/ticket.module");
const passenger_module_1 = require("./passenger/passenger.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [airline_modulel_1.AirlineModule, datasource_module_1.DatasourceModule, flight_module_1.FlightModule, ticket_module_1.TicketModule, passenger_module_1.PassengerModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: 5432,
                username: 'postgres',
                password: '123456',
                host: 'localhost',
                synchronize: true,
                logging: 'all',
                entities: ['dist/**/*.entity{.ts,.js}'],
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map