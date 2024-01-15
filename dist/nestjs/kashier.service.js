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
exports.KashierService = void 0;
const common_1 = require("@nestjs/common");
const kashier_native_service_1 = require("../native/kashier-native.service");
let KashierService = class KashierService {
    constructor(kashierConfigDto) {
        this.kashierConfigDto = kashierConfigDto;
    }
    getNativeServiceProvider() {
        return kashier_native_service_1.KashierNativeService.getInstance(this.kashierConfigDto);
    }
    getPaymentUrl(orderDto, optionals) {
        return this.getNativeServiceProvider().generateOrderUrl(orderDto, optionals);
    }
    isSuccessfulPayment(transactionResponseDto) {
        return this.getNativeServiceProvider().isSuccessfulPayment(transactionResponseDto);
    }
    getKashierConfig() {
        return this.kashierConfigDto;
    }
    getMerchantId() {
        return this.kashierConfigDto.merchantId;
    }
    getApiKey() {
        return this.kashierConfigDto.apiKey;
    }
};
exports.KashierService = KashierService;
exports.KashierService = KashierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KASHIER_CONFIG')),
    __metadata("design:paramtypes", [Object])
], KashierService);
//# sourceMappingURL=kashier.service.js.map