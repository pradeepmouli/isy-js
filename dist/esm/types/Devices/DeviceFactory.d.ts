import { ISYDevice } from '../ISY.js';
import { NodeInfo } from '../Definitions/NodeInfo.js';
export declare class DeviceFactory {
    static getDeviceDetails(node: NodeInfo): {
        name: string;
        modelNumber?: string;
        version?: string;
        class?: typeof ISYDevice;
        unsupported?: true;
    };
}
