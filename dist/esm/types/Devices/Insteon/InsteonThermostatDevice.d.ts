import { ISY } from '../../ISY.js';
import { NodeInfo } from '../../Definitions/NodeInfo.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
import 'winston';
export declare class InsteonThermostatDevice extends InsteonBaseDevice {
    constructor(isy: ISY, deviceNode: NodeInfo);
    get currentTemperature(): any;
    get coolSetPoint(): any;
    get heatSetPoint(): any;
    get mode(): any;
    get operatingMode(): any;
    get fanMode(): any;
    get humidity(): any;
    updateCoolSetPoint(value: string): Promise<any>;
    updateHeatSetPoint(value: string): Promise<any>;
    updateMode(value: string): Promise<any>;
}
