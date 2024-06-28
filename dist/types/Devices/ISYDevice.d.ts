import { Family } from '../Families.js';
import { ISY } from '../ISY.js';
import { ISYNode } from '../ISYNode.js';
import { ISYScene } from '../ISYScene.js';
import { UnitOfMeasure } from '../UOM.js';
import { EndpointType, MutableEndpoint } from '@project-chip/matter.js/endpoint/type';
import { Endpoint } from '@project-chip/matter.js/endpoint';
import { SupportedBehaviors } from '@project-chip/matter.js/endpoint/properties';
import { ClusterBehavior } from '@project-chip/matter.js/behavior/cluster';
import 'winston';
export interface PropertyStatus {
    id: string | number;
    value: any;
    formatted: any;
    uom: UnitOfMeasure;
    prec: number;
    name: string;
}
export interface NodeInfo {
    family: Family;
    type?: string;
    enabled: any;
    deviceClass?: any;
    pnode: any;
    property?: PropertyStatus[] | PropertyStatus;
    flag?: any;
    nodeDefId?: string;
    address: any;
    name: string;
    parent?: any;
    startDelay: number;
    hint: string;
    endDelay: number;
    wattage: number;
    dcPeriod: number;
}
export declare class ISYDevice<T extends Family, Drivers extends string = string, Commands extends string = string> extends ISYNode {
    family: T;
    readonly typeCode: string;
    readonly deviceClass: any;
    readonly parentAddress: any;
    readonly category: number;
    readonly subCategory: number;
    readonly type: any;
    _parentDevice: ISYDevice<T>;
    readonly children: Array<ISYDevice<T>>;
    readonly scenes: ISYScene[];
    readonly formatted: any[Drivers];
    readonly uom: any[Drivers];
    readonly pending: any[Drivers];
    readonly local: any[Drivers];
    hidden: boolean;
    _enabled: any;
    productName: string;
    model: string;
    modelNumber: string;
    version: string;
    isDimmable: boolean;
    constructor(isy: ISY, node: NodeInfo);
    convertTo(value: any, UnitOfMeasure: number): any;
    convertFrom(value: any, UnitOfMeasure: number): any;
    addLink(isyScene: ISYScene): void;
    addChild(childDevice: ISYDevice<T>): void;
    get parentDevice(): ISYDevice<T>;
    readProperty(propertyName: Drivers): Promise<PropertyStatus>;
    readProperties(): Promise<PropertyStatus[]>;
    updateProperty(propertyName: string, value: string): Promise<any>;
    sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
    refresh(): Promise<any>;
    parseResult(node: {
        property: PropertyStatus | PropertyStatus[];
    }, device: this): void;
    applyStatus(device: this, prop: PropertyStatus): void;
    handleControlTrigger(controlName: string): boolean;
    handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
}
export type Constructor<T> = new (...args: any[]) => T;
export declare const ISYBinaryStateDevice: <K extends Family, T extends Constructor<ISYDevice<K>>>(Base: T) => {
    new (...args: any[]): {
        readonly state: Promise<boolean>;
        family: K;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<K, string, string>;
        readonly children: ISYDevice<K, string, string>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[Drivers];
        readonly uom: any[Drivers];
        readonly pending: any[Drivers];
        readonly local: any[Drivers];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        convertTo(value: any, UnitOfMeasure: number): any;
        convertFrom(value: any, UnitOfMeasure: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<K, string, string>): void;
        readonly parentDevice: ISYDevice<K, string, string>;
        readProperty(propertyName: string): Promise<PropertyStatus>;
        readProperties(): Promise<PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: PropertyStatus | PropertyStatus[];
        }, device: any): void;
        applyStatus(device: any, prop: PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: ((msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger);
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../ISYNode.js").NodeNotes>;
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol, listener?: Function): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): Array<string | symbol>;
    };
} & T;
export declare const ISYUpdateableBinaryStateDevice: <K extends Family, T extends Constructor<ISYDevice<K>>>(Base: T) => {
    new (...args: any[]): {
        readonly state: Promise<boolean>;
        updateState(state: boolean): Promise<any>;
        family: K;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<K, string, string>;
        readonly children: ISYDevice<K, string, string>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[Drivers];
        readonly uom: any[Drivers];
        readonly pending: any[Drivers];
        readonly local: any[Drivers];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        convertTo(value: any, UnitOfMeasure: number): any;
        convertFrom(value: any, UnitOfMeasure: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<K, string, string>): void;
        readonly parentDevice: ISYDevice<K, string, string>;
        readProperty(propertyName: string): Promise<PropertyStatus>;
        readProperties(): Promise<PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: PropertyStatus | PropertyStatus[];
        }, device: any): void;
        applyStatus(device: any, prop: PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: ((msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger);
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../ISYNode.js").NodeNotes>;
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol, listener?: Function): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): Array<string | symbol>;
    };
} & T;
export interface MapsToEndpointType<T extends EndpointType> {
    initialize(endpoint: Endpoint<T>): void;
}
type BehaviorList<T extends ClusterBehavior> = SupportedBehaviors & T;
export interface MapsToEndpoint<T extends ClusterBehavior> {
    initialize<K extends MutableEndpoint.With<EndpointType.Empty, BehaviorList<T>>>(endpoint: Endpoint<K>): void;
}
export declare const MatterEndpoint: <P extends MutableEndpoint, T extends Constructor<ISYDevice<any>>>(base: T, endpointType: P) => {
    new (...args: any[]): {
        baseBehavior: P;
        createEndpoint(): Endpoint<MutableEndpoint>;
        family: any;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<any, string, string>;
        readonly children: ISYDevice<any, string, string>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[Drivers];
        readonly uom: any[Drivers];
        readonly pending: any[Drivers];
        readonly local: any[Drivers];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        convertTo(value: any, UnitOfMeasure: number): any;
        convertFrom(value: any, UnitOfMeasure: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<any, string, string>): void;
        readonly parentDevice: ISYDevice<any, string, string>;
        readProperty(propertyName: string): Promise<PropertyStatus>;
        readProperties(): Promise<PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: PropertyStatus | PropertyStatus[];
        }, device: any): void;
        applyStatus(device: any, prop: PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: ((msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger);
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../ISYNode.js").NodeNotes>;
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol, listener?: Function): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): Array<string | symbol>;
    };
} & T;
export declare const ISYLevelDevice: <T extends Constructor<ISYDevice<any>>>(base: T) => {
    new (...args: any[]): {
        readonly level: number;
        family: any;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<any, string, string>;
        readonly children: ISYDevice<any, string, string>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[Drivers];
        readonly uom: any[Drivers];
        readonly pending: any[Drivers];
        readonly local: any[Drivers];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        convertTo(value: any, UnitOfMeasure: number): any;
        convertFrom(value: any, UnitOfMeasure: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<any, string, string>): void;
        readonly parentDevice: ISYDevice<any, string, string>;
        readProperty(propertyName: string): Promise<PropertyStatus>;
        readProperties(): Promise<PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: PropertyStatus | PropertyStatus[];
        }, device: any): void;
        applyStatus(device: any, prop: PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: ((msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger);
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../ISYNode.js").NodeNotes>;
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol, listener?: Function): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): Array<string | symbol>;
    };
} & T;
export declare const ISYUpdateableLevelDevice: <T extends Constructor<ISYDevice<any>>>(base: T) => {
    new (...args: any[]): {
        readonly level: number;
        updateLevel(level: number): Promise<any>;
        family: any;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<any, string, string>;
        readonly children: ISYDevice<any, string, string>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[Drivers];
        readonly uom: any[Drivers];
        readonly pending: any[Drivers];
        readonly local: any[Drivers];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        convertTo(value: any, UnitOfMeasure: number): any;
        convertFrom(value: any, UnitOfMeasure: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<any, string, string>): void;
        readonly parentDevice: ISYDevice<any, string, string>;
        readProperty(propertyName: string): Promise<PropertyStatus>;
        readProperties(): Promise<PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: (Record<string | symbol, string | number> | string | number)): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: PropertyStatus | PropertyStatus[];
        }, device: any): void;
        applyStatus(device: any, prop: PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        location: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: ((msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger);
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../ISYNode.js").NodeNotes>;
        [EventEmitter.captureRejectionSymbol]?(error: Error, event: string, ...args: any[]): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        listenerCount(eventName: string | symbol, listener?: Function): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): Array<string | symbol>;
    };
} & T;
export {};