# kashier-gateway-nodejs
====

This is the payment gateway integration of  Kashier


Installation
------------

Install the latest version with:

```bash
$ npm i  kashier-gateway
```

Usage
-----------
- NestJs
    ```ts
    import { KashierService } from "kashier-gateway/nestjs";
    // like any other service
   // get your instance from DI
    kashierService.getPaymentUrl(ORDER_DTO , OPTIONALS ); // return string (url to pay)
    kashierService.isPaymentSuccess(TRANSITION_RESPONSE); // return boolean
     
    ```
  
- ExpressJs and Others
    ```ts
    import { KashierNativeService , KashierConfigDto } from "kashier-gateway";
    const config: KashierConfigDto = {
  
    };
      const kashierService =
   KashierNativeService.getInstance( config);
   kashierService.generateOrderUrl(ORDER_DTO , OPTIONALS ); // return string (url to pay)
  kashierService.isSuccessfulPayment(TRANSITION_RESPONSE); // return boolean
    ```
Note
----
If you need any non exists operation , you are welcome to order it . <br>
Contact me on : <br>
&nbsp;&nbsp;Email : [elboray.alaa1@gmail.com](mailto:elboray.alaa1@gmail.com) <br>
&nbsp;&nbsp;whatsapp : [+201063745208](https://wa.me/201063745208)

License
-------
MIT License.
