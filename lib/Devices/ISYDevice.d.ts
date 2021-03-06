import { Family } from '../Families';
import { ISY } from '../ISY';
import { ISYNode } from '../ISYNode';
import { ISYScene } from '../ISYScene';
export declare class ISYDevice<T extends Family> extends ISYNode {
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
    readonly formatted: any[string];
    readonly uom: any[string];
    readonly pending: any[string];
    hidden: boolean;
    location: string;
    constructor(isy: ISY, node: {
        family: any;
        type?: string;
        enabled: any;
        deviceClass?: any;
        pnode?: any;
        property?: any;
        flag?: any;
        nodeDefId?: string;
        address?: any;
        name?: string;
        parent?: any;
        ELK_ID?: string;
    });
    convertTo(value: any, uom: number): any;
    convertFrom(value: any, uom: number): any;
    addLink(isyScene: ISYScene): void;
    addChild(childDevice: ISYDevice<T>): void;
    get parentDevice(): ISYDevice<T>;
    refreshProperty(propertyName: string): Promise<any>;
    updateProperty(propertyName: string, value: string): Promise<any>;
    sendCommand(command: any, ...parameters: any[]): Promise<any>;
    refresh(): Promise<any>;
    handleControlTrigger(controlName: any): boolean;
    handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
}
export declare type Constructor<T> = new (...args: any[]) => T;
export declare const ISYBinaryStateDevice: <K extends Family, T extends Constructor<ISYDevice<K>>>(Base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        readonly state: boolean;
        family: K;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<K>;
        readonly children: ISYDevice<K>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[string];
        readonly uom: any[string];
        readonly pending: any[string];
        hidden: boolean;
        location: string;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<K>): void;
        readonly parentDevice: ISYDevice<K>;
        refreshProperty(propertyName: string): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handleControlTrigger(controlName: any): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<any>;
        addListener(event: string | symbol, listener: (...args: any[]) => void): any;
        once(event: string | symbol, listener: (...args: any[]) => void): any;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): any;
        off(event: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        eventNames(): (string | symbol)[];
        listenerCount(type: string | symbol): number;
    };
} & T;
export declare const ISYUpdateableBinaryStateDevice: <K extends Family, T extends Constructor<ISYDevice<K>>>(Base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        readonly state: boolean;
        updateState(state: boolean): Promise<any>;
        family: K;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<K>;
        readonly children: ISYDevice<K>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[string];
        readonly uom: any[string];
        readonly pending: any[string];
        hidden: boolean;
        location: string;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<K>): void;
        readonly parentDevice: ISYDevice<K>;
        refreshProperty(propertyName: string): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handleControlTrigger(controlName: any): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<any>;
        addListener(event: string | symbol, listener: (...args: any[]) => void): any;
        once(event: string | symbol, listener: (...args: any[]) => void): any;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): any;
        off(event: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        eventNames(): (string | symbol)[];
        listenerCount(type: string | symbol): number;
    };
} & T;
export declare const ISYLevelDevice: <T extends Constructor<ISYDevice<any>>>(base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        readonly level: number;
        family: any;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<any>;
        readonly children: ISYDevice<any>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[string];
        readonly uom: any[string];
        readonly pending: any[string];
        hidden: boolean;
        location: string;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<any>): void;
        readonly parentDevice: ISYDevice<any>;
        refreshProperty(propertyName: string): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handleControlTrigger(controlName: any): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<any>;
        addListener(event: string | symbol, listener: (...args: any[]) => void): any;
        once(event: string | symbol, listener: (...args: any[]) => void): any;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): any;
        off(event: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        eventNames(): (string | symbol)[];
        listenerCount(type: string | symbol): number;
    };
} & T;
export declare const ISYUpdateableLevelDevice: <T extends Constructor<ISYDevice<any>>>(base: T) => {
    new (...args: any[]): {
        [x: string]: any;
        readonly level: number;
        updateLevel(level: number): Promise<any>;
        family: any;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: ISYDevice<any>;
        readonly children: ISYDevice<any>[];
        readonly scenes: ISYScene[];
        readonly formatted: any[string];
        readonly uom: any[string];
        readonly pending: any[string];
        hidden: boolean;
        location: string;
        convertTo(value: any, uom: number): any;
        convertFrom(value: any, uom: number): any;
        addLink(isyScene: ISYScene): void;
        addChild(childDevice: ISYDevice<any>): void;
        readonly parentDevice: ISYDevice<any>;
        refreshProperty(propertyName: string): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: any, ...parameters: any[]): Promise<any>;
        refresh(): Promise<any>;
        handleControlTrigger(controlName: any): boolean;
        handlePropertyChange(propertyName: string, value: any, formattedValue: string): boolean;
        readonly isy: ISY;
        readonly flag: any;
        readonly nodeDefId: string;
        readonly address: string;
        name: string;
        displayName: string;
        spokenName: string;
        isLoad: boolean;
        folder: string;
        parent: any;
        parentType: import("../ISYConstants").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: (msg: any) => void;
        lastChanged: Date;
        enabled: boolean;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<any>;
        addListener(event: string | symbol, listener: (...args: any[]) => void): any;
        once(event: string | symbol, listener: (...args: any[]) => void): any;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): any;
        off(event: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        eventNames(): (string | symbol)[];
        listenerCount(type: string | symbol): number;
    };
} & T;
