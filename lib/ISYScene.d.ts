import { ISYDevice } from './ISY';
import { ISYNode } from './ISYNode';
export declare class ISYScene extends ISYNode {
    type: string;
    connectionType: string;
    batteryOperated: boolean;
    deviceType: any;
    deviceFriendlyName: string;
    childDevices: ISYDevice<any>[];
    isDimmable: boolean;
    typeCode: string;
    constructor(isy: any, scene: any);
    get isOn(): boolean;
    get brightnessLevel(): number;
    recalculateState(): boolean;
    markAsChanged(): void;
    updateIsOn(lightState: any): Promise<any>;
    updateBrightnessLevel(level: any): Promise<any>;
    getAreAllLightsInSpecifiedState(state: any): boolean;
}