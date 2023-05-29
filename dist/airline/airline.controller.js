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
exports.AirlineController = void 0;
const common_1 = require("@nestjs/common");
const airline_service_1 = require("./airline.service");
const swagger_1 = require("@nestjs/swagger");
const airlinedto_1 = require("./dto/airlinedto");
let AirlineController = class AirlineController {
    constructor(airlineService) {
        this.airlineService = airlineService;
    }
    async findAll() {
        return await this.airlineService.findAll();
    }
    async findOne(id) {
        return await this.airlineService.findOne(id);
    }
    async create(airline) {
        return await this.airlineService.create(airline);
    }
    async update(id, updatedAirline) {
        return await this.airlineService.update(id, updatedAirline);
    }
    async delete(id) {
        return await this.airlineService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AirlineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AirlineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new airline' }),
    (0, swagger_1.ApiBody)({ type: airlinedto_1.CreateAirlineDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AirlineController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AirlineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AirlineController.prototype, "delete", null);
AirlineController = __decorate([
    (0, common_1.Controller)('airlines'),
    __metadata("design:paramtypes", [airline_service_1.AirlineService])
], AirlineController);
exports.AirlineController = AirlineController;
//# sourceMappingURL=airline.controller.js.map