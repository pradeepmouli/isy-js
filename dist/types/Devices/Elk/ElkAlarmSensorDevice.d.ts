import { Family } from '../../Families.js';
import { ISY } from '../../ISY.js';
import { ISYDevice } from '../../ISYNode.js';
import { AlarmSensorPhysicalState, AlarmSensorLogicalState } from './ElkAlarmPanelDevice.js';
export declare class ElkAlarmSensorDevice extends ISYDevice<Family.Elk> {
    [x: string]: any;
    area: number;
    zone: string;
    deviceFriendlyName: string;
    deviceType: any;
    connectionType: string;
    batteryOperated: boolean;
    physicalState: AlarmSensorPhysicalState;
    logicalState: AlarmSensorLogicalState;
    voltage: number;
    constructor(isy: ISY, name: string, area: number, zone: string);
    sendCommand(command: string): Promise<any>;
    sendBypassToggleCommand(): Promise<any>;
    getPhysicalState(): AlarmSensorPhysicalState;
    isBypassed(): boolean;
    getLogicalState(): AlarmSensorLogicalState;
    getCurrentDoorWindowState(): boolean;
    getSensorStatus(): string;
    isPresent(): boolean;
    handleEvent(event: {
        control?: string;
        data?: any;
        node?: any;
        eventInfo?: any;
    }): boolean;
}
