import { Module, DynamicModule } from '@nestjs/common';
import {KashierConfigDto} from "../native/dto/kashier-config.dto";

@Module({})
export class KashierModule {
    static register(options: KashierConfigDto) : DynamicModule {
        return {
            module: KashierModule,
            providers: [
                {
                    provide: 'KASHIER_CONFIG',
                    useValue: options,
                },

            ],
            exports: [],
        }
    }
}