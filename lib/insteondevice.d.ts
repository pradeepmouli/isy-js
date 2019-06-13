/// <reference types="node" />
import { ISY } from './isy';
import { ISYDevice } from './isydevice';
export declare class InsteonBaseDevice extends ISYDevice {
    productName: string;
    deviceType: any;
    batteryOperated: boolean;
    connectionType: any;
    deviceFriendlyName: string;
    childDevices: any;
    isDimmable: boolean;
    constructor(isy: ISY, node: any, productInfo: any);
    convertFrom(value: any, uom: number): any;
    convertTo(value: any, uom: number): any;
    sendBeep(level?: number): Promise<any>;
}
interface InsteonBaseDeviceConstructor {
    new (isy: ISY, node: any, productInfo: any): InsteonBaseDevice;
}
export declare const InsteonLampDevice: (InsteonBaseDevice: InsteonBaseDeviceConstructor) => {
    new (isy: any, node: any, productInfo: any): {
        [x: string]: any;
        readonly brightnessLevel: number;
        updateBrightnessLevel(level: any, resultHandler: any): void;
        productName: string;
        deviceType: any;
        batteryOperated: boolean;
        connectionType: any;
        deviceFriendlyName: string;
        childDevices: any;
        isDimmable: boolean;
        convertFrom(value: any, uom: number): any;
        convertTo(value: any, uom: number): any;
        sendBeep(level?: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
};
export declare const InsteonSwitchDevice: (InsteonBaseDevice: InsteonBaseDeviceConstructor) => {
    new (isy: any, node: any, productInfo: any): {
        [x: string]: any;
        readonly brightnessLevel: number;
        updateBrightnessLevel(level: any, resultHandler: any): void;
        productName: string;
        deviceType: any;
        batteryOperated: boolean;
        connectionType: any;
        deviceFriendlyName: string;
        childDevices: any;
        isDimmable: boolean;
        convertFrom(value: any, uom: number): any;
        convertTo(value: any, uom: number): any;
        sendBeep(level?: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
};
declare const InsteonRelayDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonRelayDevice extends InsteonRelayDevice_base {
    constructor(isy: ISY, node: any, productInfo: any);
    readonly isOn: boolean;
    updateIsOn(isOn: boolean): Promise<any>;
}
declare const InsteonDimmableDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly level: number;
        updateLevel(level: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonRelayDevice;
export declare class InsteonDimmableDevice extends InsteonDimmableDevice_base {
    constructor(isy: any, node: any, productInfo: any);
    readonly brightnessLevel: number;
    updateBrightnessLevel(level: any): Promise<{}>;
}
declare const InsteonRelaySwitchDevice_base: {
    new (isy: any, node: any, productInfo: any): {
        [x: string]: any;
        readonly brightnessLevel: number;
        updateBrightnessLevel(level: any, resultHandler: any): void;
        productName: string;
        deviceType: any;
        batteryOperated: boolean;
        connectionType: any;
        deviceFriendlyName: string;
        childDevices: any;
        isDimmable: boolean;
        convertFrom(value: any, uom: number): any;
        convertTo(value: any, uom: number): any;
        sendBeep(level?: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
};
export declare class InsteonRelaySwitchDevice extends InsteonRelaySwitchDevice_base {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
export declare class InsteonOnOffOutletDevice extends InsteonRelayDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
export declare class InsteonDimmerOutletDevice extends InsteonDimmableDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
export declare class InsteonDimmerSwitchDevice extends InsteonDimmableDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
export declare class InsteonKeypadDevice extends InsteonRelayDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
export declare class InsteonDimmerKeypadDevice extends InsteonDimmableDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
declare const InsteonLockDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonLockDevice extends InsteonLockDevice_base {
    constructor(isy: any, deviceNode: any, productInfo: any);
    sendLockCommand(lockState: any, resultHandler: any): void;
    readonly isLocked: boolean;
    getCurrentLockState(): boolean;
    getCurrentNonSecureLockState(): boolean;
    getCurrentSecureLockState(): boolean;
    sendNonSecureLockCommand(lockState: any): Promise<any>;
    sendSecureLockCommand(lockState: any): Promise<any>;
}
declare const InsteonDoorWindowSensorDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonDoorWindowSensorDevice extends InsteonDoorWindowSensorDevice_base {
    constructor(isy: any, deviceNode: any, productInfo: any);
    readonly isOpen: boolean;
}
declare const InsteonLeakSensorDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonLeakSensorDevice extends InsteonLeakSensorDevice_base {
    constructor(isy: any, deviceNode: any, productInfo: any);
    readonly leakDetected: boolean;
}
declare const InsteonCOSensorDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonCOSensorDevice extends InsteonCOSensorDevice_base {
    constructor(isy: any, deviceNode: any, productInfo: any);
    readonly monoxideDetected: boolean;
}
export declare class InsteonMotionSensorDevice extends InsteonBaseDevice {
    _isMotionDetected: boolean;
    constructor(isy: any, deviceNode: any, productInfo: any);
    handleEvent(event: any): boolean;
    readonly isMotionDetected: boolean;
}
export declare class InsteonThermostatDevice extends InsteonBaseDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
    readonly currentTemperature: any;
    readonly coolSetPoint: any;
    readonly heatSetPoint: any;
    readonly mode: any;
    readonly operatingMode: any;
    readonly fanMode: any;
    readonly humidity: any;
    updateCoolSetPoint(value: any): Promise<any>;
    updateHeatSetPoint(value: any): Promise<any>;
    updateMode(value: any): Promise<any>;
}
export declare class InsteonOutletDevice extends InsteonRelayDevice {
    constructor(isy: any, deviceNode: any, productInfo: any);
}
declare const InsteonFanDevice_base: {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly level: number;
        updateLevel(level: number): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        ST: number;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice;
        readonly scenes: import("./isyscene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: import("./isyscene").ISYScene): void;
        readonly parentDevice: ISYDevice;
        updateProperty(propertyName: any, value: any): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handlePropertyChange(propertyName: any, value: any, formattedValue: any): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        family: any;
        parent: any;
        readonly elkId: string;
        nodeType: number;
        propertyChanged: import("events").EventEmitter;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        handleEvent(event: any): boolean;
        onPropertyChanged(propertyName: any, callback: any): void;
    };
} & typeof InsteonBaseDevice;
export declare class InsteonFanDevice extends InsteonFanDevice_base {
    constructor(isy: any, deviceNode: any, productInfo: any);
    readonly isOn: boolean;
    readonly fanSpeed: number;
    updateFanSpeed(level: any): Promise<any>;
    updateIsOn(isOn: any): Promise<void>;
}
export {};
