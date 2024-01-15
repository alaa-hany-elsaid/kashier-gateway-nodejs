import { Injectable, Inject } from '@nestjs/common';
import {KashierNativeService} from "../native/kashier-native.service";
import {KashierConfigDto} from "../native/dto/kashier-config.dto";
import {KashierOrderDto} from "../native/dto/kashier-order.dto";
import {KashierValidatableTransactionResponseDto} from "../native/dto/kashier-transaction-response.dto";
import {KashierPaymentMode} from "../native/enums/kashier-payement-mode";
import {KashierSupportedCurrency} from "../native/enums/kashier-supported-currency";


@Injectable()
export class KashierService {

    constructor(
        @Inject('KASHIER_CONFIG')
        private kashierConfigDto: KashierConfigDto
    )
    {
    }

    getNativeServiceProvider(): KashierNativeService {
        return KashierNativeService.getInstance(this.kashierConfigDto);
    }

    getPaymentUrl(orderDto: KashierOrderDto, optionals: object): string {
        return this.getNativeServiceProvider().generateOrderUrl(orderDto, optionals);
    }

    isSuccessfulPayment(transactionResponseDto: KashierValidatableTransactionResponseDto): boolean {
        return this.getNativeServiceProvider().isSuccessfulPayment(transactionResponseDto);
    }

    getKashierConfig(): KashierConfigDto {
        return this.kashierConfigDto;
    }

    getMerchantId(): string {
        return this.kashierConfigDto.merchantId;
    }

    getApiKey(): string {
        return this.kashierConfigDto.apiKey;
    }

}