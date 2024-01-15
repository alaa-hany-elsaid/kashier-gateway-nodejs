import {createHmac} from "node:crypto";
import {KashierConfigDto} from "./dto/kashier-config.dto";
import {KashierOrderDto} from "./dto/kashier-order.dto";
import {KashierSupportedCurrency} from "./enums/kashier-supported-currency";
import {KashierPaymentMode} from "./enums/kashier-payement-mode";
import {KashierValidatableTransactionResponseDto} from "./dto/kashier-transaction-response.dto";
import {KashierPaymentStatus} from "./enums/kashier-payment-status";

export class  KashierNativeService {
    private  static  instance: KashierNativeService;
    private constructor(private initOptions: KashierConfigDto) {
    }
    public  static  getInstance(initOptions: KashierConfigDto): KashierNativeService {
        if (!KashierNativeService.instance) {
            KashierNativeService.instance = new  KashierNativeService(initOptions);
        }
        return KashierNativeService.instance;
    }


    public generateOrderUrl(orderDto: KashierOrderDto , optionals:object): string {
        const orderDtoWithDefaults:object = {
            currency: this.initOptions.currency ?? KashierSupportedCurrency.EGP,
            mode: this.initOptions.mode ?? KashierPaymentMode.TEST,
            ...optionals,
            ...orderDto
        }
        const urlParts = [];
        urlParts.push(`${KASHIER_CHECKOUT_URL}/?merchantId=${this.initOptions.merchantId}&hash=${this.generateOrderHash(orderDto)}`)
        Object.keys(orderDtoWithDefaults).forEach((key) => {
                urlParts.push(`&${key}=${orderDtoWithDefaults[key]}`);
        });
        return urlParts.join('') ;
    }


    public isSuccessfulPayment(transactionResponseDto: KashierValidatableTransactionResponseDto): boolean {
        return (transactionResponseDto.paymentStatus === KashierPaymentStatus.SUCCESS)
            &&
            this.generateSignature(transactionResponseDto) === transactionResponseDto.signature;
    }




    private generateOrderHash(orderDto: KashierOrderDto): string {

       return  createHmac('sha256', this.initOptions.apiKey)
           .update(`/?payment=${this.initOptions.merchantId}.${orderDto.amount}.${this.initOptions.currency ??  (orderDto.currency ?? KashierSupportedCurrency.EGP)}${orderDto.customer?.reference ?  ('.' +  orderDto.customer?.reference ) : null}`)
           .digest('hex');
    }


    private  generateSignature(transactionResponseDto: KashierValidatableTransactionResponseDto): string {
        const plainParts = [];
        Object.keys(transactionResponseDto).forEach((key) => {
            if (key !== 'signature') {
                plainParts.push( `&${key}=${transactionResponseDto[key]}`  );
            }
        });
        return createHmac('sha256', this.initOptions.apiKey).update(plainParts.join('').substring(1)).digest('hex');
    }
}