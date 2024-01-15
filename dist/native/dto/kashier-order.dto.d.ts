import { KashierSupportedCurrency } from "../enums/kashier-supported-currency";
import { KashierPaymentMethod } from "../enums/kashier-payment-method";
export interface KashierCustomer {
    reference: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}
export interface KashierOrderDto {
    amount: number;
    currency?: KashierSupportedCurrency;
    orderId: string;
    allowedMethods?: KashierPaymentMethod[];
    merchantRedirectUrl: string;
    customer?: KashierCustomer;
}
//# sourceMappingURL=kashier-order.dto.d.ts.map