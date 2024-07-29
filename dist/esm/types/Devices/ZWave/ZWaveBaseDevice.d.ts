import { Family } from '../../Definitions/Global/Families.js';
import { ISY } from '../../ISY.js';
import { NodeInfo } from '../../Definitions/NodeInfo.js';
import { ISYNodeDevice } from '../../ISYNode.js';
import 'winston';
import type { Driver } from '../../Definitions/Global/Drivers.js';
export declare class ZWaveBaseDevice<D extends Driver.Literal = 'ST', C extends string = 'QUERY'> extends ISYNodeDevice<Family.ZWave, D, C> {
    getNodeDef(): Promise<any>;
    constructor(isy: ISY, deviceNode: NodeInfo);
    convertFrom(value: any, uom: number): any;
    convertTo(value: any, uom: number): any;
    sendBeep(level?: number): Promise<any>;
}
