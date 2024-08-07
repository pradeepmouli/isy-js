import WebSocket from 'faye-websocket';
import { Categories } from './Categories.js';
import { ELKAlarmPanelDevice } from './Devices/Elk/ElkAlarmPanelDevice.js';
import { ElkAlarmSensorDevice } from "./Devices/Elk/ElkAlarmSensorDevice.js";
import { InsteonBaseDevice } from './Devices/Insteon/InsteonBaseDevice.js';
import { InsteonOutletDevice } from './Devices/Insteon/InsteonDevice.js';
import { InsteonDimmableDevice } from './Devices/Insteon/InsteonDimmableDevice.js';
import { InsteonDimmerSwitchDevice } from './Devices/Insteon/InsteonDimmerSwitchDevice.js';
import { InsteonDoorWindowSensorDevice } from './Devices/Insteon/InsteonDoorWindowSensorDevice.js';
import { InsteonFanDevice, InsteonFanMotorDevice } from './Devices/Insteon/InsteonFanDevice.js';
import { InsteonKeypadRelayDevice } from "./Devices/Insteon/InsteonKeypadRelayDevice.js";
import { InsteonKeypadDimmerDevice } from "./Devices/Insteon/InsteonKeypadDimmerDevice.js";
import { InsteonLeakSensorDevice } from './Devices/Insteon/InsteonLeakSensorDevice.js';
import { InsteonLockDevice } from './Devices/Insteon/InsteonLockDevice.js';
import { InsteonMotionSensorDevice } from './Devices/Insteon/InsteonMotionSensorDevice.js';
import { InsteonRelayDevice } from './Devices/Insteon/InsteonRelayDevice.js';
import { InsteonThermostatDevice } from './Devices/Insteon/InsteonThermostatDevice.js';
import { ISYDeviceNode } from './ISYNode.js';
import { Family } from './Definitions/Families.js';
import { NodeType, Props, States, VariableType } from './ISYConstants.js';
import { ISYNode } from './ISYNode.js';
import { ISYScene } from './ISYScene.js';
import { ISYVariable } from './ISYVariable.js';
import { InsteonOnOffOutletDevice } from './Devices/Insteon/InsteonOnOffOutletDevice.js';
import { InsteonSmokeSensorDevice } from './Devices/Insteon/InsteonSmokeSensorDevice.js';
import { InsteonDimmerOutletDevice } from './Devices/Insteon/InsteonDimmerOutletDevice.js';
import { InsteonKeypadButtonDevice } from './Devices/Insteon/InsteonKeypadDevice.js';
import { EventEmitter } from 'events';
import { Logger } from 'winston';
import type { NodeInfo } from './Definitions/NodeInfo.js';
import * as Utils from './Utils.js';
export { ISYScene, States, Family, VariableType, Categories, Props, ISYVariable, InsteonBaseDevice, InsteonOutletDevice, ISYDeviceNode as ISYDevice, InsteonKeypadDimmerDevice, InsteonKeypadRelayDevice, InsteonKeypadButtonDevice, InsteonDimmableDevice, InsteonFanDevice, InsteonFanMotorDevice, InsteonLeakSensorDevice, InsteonSmokeSensorDevice, InsteonDimmerOutletDevice, InsteonOnOffOutletDevice, InsteonLockDevice, InsteonThermostatDevice, InsteonDoorWindowSensorDevice, InsteonDimmerSwitchDevice, InsteonRelayDevice, InsteonMotionSensorDevice, ISYNode, NodeType, ElkAlarmSensorDevice, ELKAlarmPanelDevice, Utils };
export declare let Controls: {};
export declare class ISY extends EventEmitter {
    readonly deviceList: Map<string, ISYDeviceNode<any>>;
    readonly deviceMap: Map<string, string[]>;
    readonly sceneList: Map<string, ISYScene>;
    readonly folderMap: Map<string, string>;
    webSocket: WebSocket.Client;
    readonly zoneMap: Map<string, ElkAlarmSensorDevice>;
    readonly protocol: string;
    readonly host: string;
    readonly port: number;
    get address(): string;
    id: string;
    vendorName: string;
    productId: number;
    productName: string;
    readonly restlerOptions: any;
    readonly credentials: {
        username: string;
        password: string;
    };
    readonly variableList: Map<string, ISYVariable<VariableType>>;
    nodesLoaded: boolean;
    readonly wsprotocol: string;
    readonly elkEnabled: boolean;
    get isDebugEnabled(): boolean;
    readonly displayNameFormat: string;
    guardianTimer: any;
    elkAlarmPanel: ELKAlarmPanelDevice;
    logger: Logger;
    lastActivity: any;
    model: any;
    serverVersion: any;
    readonly storagePath: string;
    configInfo: any;
    static instance: ISY;
    constructor(config: {
        host: string;
        port: number;
        protocol: 'http' | 'https';
        username: string;
        password: string;
        displayNameFormat?: string;
        elkEnabled?: boolean;
    }, logger?: Logger, storagePath?: string);
    emit(event: 'InitializeCompleted' | 'NodeAdded' | 'NodeRemoved' | 'NodeChanged', node?: ISYNode): boolean;
    on(event: 'InitializeCompleted' | 'NodeAdded' | 'NodeRemoved' | 'NodeChanged', listener: (node?: ISYNode) => void): this;
    callISY(url: string): Promise<any>;
    nodeChangedHandler(node: ELKAlarmPanelDevice | ElkAlarmSensorDevice, propertyName?: any): void;
    getElkAlarmPanel(): ELKAlarmPanelDevice;
    loadNodes(): Promise<any>;
    readFolderNodes(result: {
        nodes: {
            folder: any;
        };
    }): Promise<void>;
    readSceneNodes(result: {
        nodes: {
            group: any;
        };
    }): Promise<void>;
    readDeviceNodes(obj: {
        nodes: {
            node: NodeInfo[];
        };
    }): Promise<void>;
    loadElkNodes(result: any): void;
    loadElkInitialStatus(result: any): void;
    finishInitialize(success: boolean): void;
    guardian(): void;
    variableChangedHandler(variable: {
        id: string;
        type: string;
    }): void;
    checkForFailure(response: any): boolean;
    loadVariables(type: VariableType): Promise<any>;
    loadConfig(): Promise<any>;
    getVariableList(): Map<string, ISYVariable<VariableType>>;
    getVariable<P extends VariableType>(type: P, id: number): ISYVariable<P>;
    createVariableKey(type: VariableType, id: number): string;
    createVariables(type: VariableType, result: any): void;
    setVariableValues(result: any): void;
    refreshStatuses(): Promise<void>;
    initialize(): Promise<any>;
    handleInitializeError(step: string, reason: any): Promise<any>;
    handleWebSocketMessage(event: {
        data: any;
    }): void;
    initializeWebSocket(): void;
    getDevice<T extends ISYDeviceNode<any> = ISYDeviceNode<any>>(address: string, parentsOnly?: boolean): T;
    getScene(address: string): ISYScene;
    sendISYCommand(path: string): Promise<any>;
    sendNodeCommand<P extends string | symbol>(node: ISYNode, command: string, parameters?: (Record<P, string | number> | string | number)): Promise<any>;
    sendGetVariable(id: any, type: any, handleResult: (arg0: number, arg1: number) => void): Promise<void>;
    sendSetVariable(id: any, type: any, value: any, handleResult: {
        (success: any): void;
        (arg0: boolean): void;
        (arg0: boolean): void;
    }): Promise<any>;
}
