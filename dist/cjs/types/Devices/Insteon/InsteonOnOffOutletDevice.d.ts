import type { NodeInfo } from '../../Definitions/NodeInfo.js';
import { ISY } from '../../ISY.js';
import { InsteonRelayDevice } from './InsteonRelayDevice.js';
import 'winston';
export declare class InsteonOnOffOutletDevice extends InsteonRelayDevice {
    outlet1: InsteonRelayDevice;
    outlet2: InsteonRelayDevice;
    constructor(isy: ISY, deviceNode: NodeInfo);
    addChild(childDevice: any): void;
}
