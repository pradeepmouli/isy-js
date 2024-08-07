import { ISYBinaryStateDevice } from '../ISYDevice.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
import 'winston';
export class InsteonSmokeSensorDevice extends ISYBinaryStateDevice(InsteonBaseDevice) {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
    }
    get smokeDetected() {
        return this.state;
    }
}
