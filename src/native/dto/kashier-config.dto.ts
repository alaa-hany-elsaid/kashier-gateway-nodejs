import {KashierPaymentMode} from "../enums/kashier-payement-mode";
import {KashierSupportedCurrency} from "../enums/kashier-supported-currency";

export  interface KashierConfigDto {
    merchantId: string;
    apiKey: string;
    mode?: KashierPaymentMode ;
    currency?: KashierSupportedCurrency;
}
