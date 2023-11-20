"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsteonLeakSensorDevice = void 0;
const ISYDevice_1 = require("../ISYDevice");
const InsteonBaseDevice_1 = require("./InsteonBaseDevice");
class InsteonLeakSensorDevice extends (0, ISYDevice_1.ISYBinaryStateDevice)(InsteonBaseDevice_1.InsteonBaseDevice) {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
    }
    get leakDetected() {
        return this.state;
    }
}
exports.InsteonLeakSensorDevice = InsteonLeakSensorDevice;
