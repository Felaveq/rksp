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
exports.PassengerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const passenger_entity_1 = require("./passenger.entity");
let PassengerService = class PassengerService {
    constructor(passengerRepository) {
        this.passengerRepository = passengerRepository;
    }
    async create(passengerDto) {
        const existingPassenger = await this.passengerRepository.findOne({ where: { passport: passengerDto.passport } });
        if (existingPassenger) {
            throw new Error('Passenger with this passport already exists');
        }
        const newPassenger = this.passengerRepository.create(passengerDto);
        await this.passengerRepository.save(newPassenger);
        return newPassenger;
    }
    async findAll() {
        return await this.passengerRepository.find();
    }
    async findOne(id) {
        return await this.passengerRepository.findOne({ where: { id } });
    }
    async update(id, updatedPassengerDto) {
        const passenger = await this.passengerRepository.findOne({ where: { id } });
        if (!passenger) {
            return null;
        }
        this.passengerRepository.merge(passenger, updatedPassengerDto);
        await this.passengerRepository.save(passenger);
        return passenger;
    }
    async delete(id) {
        const result = await this.passengerRepository.delete(id);
        return result.affected > 0;
    }
};
PassengerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(passenger_entity_1.Passenger)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PassengerService);
exports.PassengerService = PassengerService;
//# sourceMappingURL=passenger.service.js.map