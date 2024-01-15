import { KashierNativeService } from "../native/kashier-native.service";
import { KashierConfigDto } from "../native/dto/kashier-config.dto";
import { KashierOrderDto } from "../native/dto/kashier-order.dto";
import { KashierValidatableTransactionResponseDto } from "../native/dto/kashier-transaction-response.dto";
export declare class KashierService {
    private kashierConfigDto;
    constructor(kashierConfigDto: KashierConfigDto);
    getNativeServiceProvider(): KashierNativeService;
    getPaymentUrl(orderDto: KashierOrderDto, optionals: object): string;
    isSuccessfulPayment(transactionResponseDto: KashierValidatableTransactionResponseDto): boolean;
    getKashierConfig(): KashierConfigDto;
    getMerchantId(): string;
    getApiKey(): string;
}
//# sourceMappingURL=kashier.service.d.ts.map