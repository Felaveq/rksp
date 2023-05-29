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
exports.Airline = void 0;
const flight_entity_1 = require("../flight/flight.entity");
const typeorm_1 = require("typeorm");
let Airline = class Airline {
    constructor(id, name, country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Airline.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Airline.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Airline.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => flight_entity_1.Flight, (flight) => flight.airline),
    __metadata("design:type", Array)
], Airline.prototype, "flights", void 0);
Airline = __decorate([
    (0, typeorm_1.Entity)('airlines'),
    __metadata("design:paramtypes", [Number, String, String])
], Airline);
exports.Airline = Airline;
//# sourceMappingURL=airline.entity.js.map