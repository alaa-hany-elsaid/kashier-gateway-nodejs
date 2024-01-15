"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KashierNativeService = void 0;
const node_crypto_1 = require("node:crypto");
const kashier_supported_currency_1 = require("./enums/kashier-supported-currency");
const kashier_payement_mode_1 = require("./enums/kashier-payement-mode");
const kashier_payment_status_1 = require("./enums/kashier-payment-status");
class KashierNativeService {
    constructor(initOptions) {
        this.initOptions = initOptions;
    }
    static getInstance(initOptions) {
        if (!KashierNativeService.instance) {
            KashierNativeService.instance = new KashierNativeService(initOptions);
        }
        return KashierNativeService.instance;
    }
    generateOrderUrl(orderDto, optionals) {
        var _a, _b;
        const orderDtoWithDefaults = Object.assign(Object.assign({ currency: (_a = this.initOptions.currency) !== null && _a !== void 0 ? _a : kashier_supported_currency_1.KashierSupportedCurrency.EGP, mode: (_b = this.initOptions.mode) !== null && _b !== void 0 ? _b : kashier_payement_mode_1.KashierPaymentMode.TEST }, optionals), orderDto);
        const urlParts = [];
        urlParts.push(`${KASHIER_CHECKOUT_URL}/?merchantId=${this.initOptions.merchantId}&hash=${this.generateOrderHash(orderDto)}`);
        Object.keys(orderDtoWithDefaults).forEach((key) => {
            urlParts.push(`&${key}=${orderDtoWithDefaults[key]}`);
        });
        return urlParts.join('');
    }
    isSuccessfulPayment(transactionResponseDto) {
        return (transactionResponseDto.paymentStatus === kashier_payment_status_1.KashierPaymentStatus.SUCCESS)
            &&
                this.generateSignature(transactionResponseDto) === transactionResponseDto.signature;
    }
    generateOrderHash(orderDto) {
        var _a, _b, _c, _d;
        return (0, node_crypto_1.createHmac)('sha256', this.initOptions.apiKey)
            .update(`/?payment=${this.initOptions.merchantId}.${orderDto.amount}.${(_a = this.initOptions.currency) !== null && _a !== void 0 ? _a : ((_b = orderDto.currency) !== null && _b !== void 0 ? _b : kashier_supported_currency_1.KashierSupportedCurrency.EGP)}${((_c = orderDto.customer) === null || _c === void 0 ? void 0 : _c.reference) ? ('.' + ((_d = orderDto.customer) === null || _d === void 0 ? void 0 : _d.reference)) : null}`)
            .digest('hex');
    }
    generateSignature(transactionResponseDto) {
        const plainParts = [];
        Object.keys(transactionResponseDto).forEach((key) => {
            if (key !== 'signature') {
                plainParts.push(`&${key}=${transactionResponseDto[key]}`);
            }
        });
        return (0, node_crypto_1.createHmac)('sha256', this.initOptions.apiKey).update(plainParts.join('').substring(1)).digest('hex');
    }
}
exports.KashierNativeService = KashierNativeService;
//# sourceMappingURL=kashier-native.service.js.map