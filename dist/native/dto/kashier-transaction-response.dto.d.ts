import { KashierSupportedCurrency } from "../enums/kashier-supported-currency";
export interface KashierValidatableTransactionResponseDto {
    paymentStatus: string;
    cardDataToken: string;
    merchantOrderId: string;
    maskedCard: string;
    transactionId: string;
    orderId: string;
    currency: KashierSupportedCurrency;
    cardBrand: string;
    signature: string;
}
//# sourceMappingURL=kashier-transaction-response.dto.d.ts.map