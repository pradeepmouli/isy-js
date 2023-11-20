import { InsteonDimmableDevice } from './InsteonDimmableDevice';
declare const InsteonKeypadDimmerDevice_base: {
    new (...args: any[]): {
        addChild(childDevice: ISYDevice<import("../../Families").Family.Insteon>): void;
        convertFrom(value: any, uom: number): any;
        convertTo(value: any, uom: number): any;
        sendBeep(level?: number): Promise<any>;
        family: import("../../Families").Family.Insteon;
        readonly typeCode: string;
        readonly deviceClass: any;
        readonly parentAddress: any;
        readonly category: number;
        readonly subCategory: number;
        readonly type: any;
        _parentDevice: import("../ISYDevice").ISYDevice<import("../../Families").Family.Insteon>;
        readonly children: import("../ISYDevice").ISYDevice<import("../../Families").Family.Insteon>[];
        readonly scenes: import("../../ISYScene").ISYScene[];
        readonly formatted: any;
        readonly uom: any;
        readonly pending: any;
        readonly local: any;
        hidden: boolean;
        location: string;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        addLink(isyScene: import("../../ISYScene").ISYScene): void;
        readonly parentDevice: import("../ISYDevice").ISYDevice<import("../../Families").Family.Insteon>;
        refreshProperty(propertyName: string): Promise<any>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        public: any;
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
        parentType: import("../../ISYConstants").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: (msg: any, level?: "ERROR" | "WARN" | "DEBUG" | "INFO", ...meta: any[]) => import("winston").Logger;
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
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
} & typeof InsteonDimmableDevice;
export declare class InsteonKeypadDimmerDevice extends InsteonKeypadDimmerDevice_base {
    constructor(isy: any, deviceNode: any);
}
export {};
