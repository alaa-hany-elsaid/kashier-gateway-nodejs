"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KashierModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KashierModule = void 0;
const common_1 = require("@nestjs/common");
let KashierModule = KashierModule_1 = class KashierModule {
    static register(options) {
        return {
            module: KashierModule_1,
            providers: [
                {
                    provide: 'KASHIER_CONFIG',
                    useValue: options,
                },
            ],
            exports: [],
        };
    }
};
exports.KashierModule = KashierModule;
exports.KashierModule = KashierModule = KashierModule_1 = __decorate([
    (0, common_1.Module)({})
], KashierModule);
//# sourceMappingURL=kashier.module.js.map