import { KashierConfigDto } from "./dto/kashier-config.dto";
import { KashierOrderDto } from "./dto/kashier-order.dto";
import { KashierValidatableTransactionResponseDto } from "./dto/kashier-transaction-response.dto";
export declare class KashierNativeService {
    private initOptions;
    private static instance;
    private constructor();
    static getInstance(initOptions: KashierConfigDto): KashierNativeService;
    generateOrderUrl(orderDto: KashierOrderDto, optionals: object): string;
    isSuccessfulPayment(transactionResponseDto: KashierValidatableTransactionResponseDto): boolean;
    private generateOrderHash;
    private generateSignature;
}
//# sourceMappingURL=kashier-native.service.d.ts.map