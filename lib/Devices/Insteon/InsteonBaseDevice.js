"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsteonBaseDevice = void 0;
const Families_1 = require("../../Families");
const Utils_1 = require("../../Utils");
const ISYDevice_1 = require("../ISYDevice");
// import { InsteonNLS } from './insteonfam'
class InsteonBaseDevice extends ISYDevice_1.ISYDevice {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
        this.family = Families_1.Family.Insteon;
        //// this.productName = InsteonNLS.getDeviceDescription(String.fromCharCode(category,device,version));
        //his.childDevices = {};
    }
    convertFrom(value, uom) {
        switch (uom) {
            case 101:
                return (0, Utils_1.byteToDegree)(value);
            case 100:
                return (0, Utils_1.byteToPct)(value);
            case 17:
                return value / 10;
            default:
                return super.convertFrom(value, uom);
        }
    }
    convertTo(value, uom) {
        const nuom = super.convertTo(value, uom);
        switch (uom) {
            case 101:
                return nuom * 2;
            case 100:
                return (0, Utils_1.pctToByte)(nuom);
            case 17:
                return Math.round(value * 10);
            default:
                return nuom;
        }
    }
    async sendBeep(level = 100) {
        return this.sendCommand(this, 'BEEP');
    }
}
exports.InsteonBaseDevice = InsteonBaseDevice;
