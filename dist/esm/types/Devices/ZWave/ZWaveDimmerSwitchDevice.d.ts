import { ZWaveBaseDevice } from './ZWaveBaseDevice.js';
import 'winston';
declare const ZWaveDimmerSwitchDevice_base: {
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
        _parentDevice: import("../../ISYNode.js").ISYDeviceNode<any, import("../../Definitions/Global/Drivers.js").Drivers, string>;
        readonly children: import("../../ISYNode.js").ISYDeviceNode<any, import("../../Definitions/Global/Drivers.js").Drivers, string>[];
        readonly scenes: import("../../ISYScene.js").ISYScene[];
        hidden: boolean;
        _enabled: any;
        productName: string;
        model: string;
        modelNumber: string;
        version: string;
        isDimmable: boolean;
        convertTo(value: any, UnitOfMeasure: number, propertyName?: import("../../Definitions/Global/Drivers.js").Drivers): any;
        convertFrom(value: any, UnitOfMeasure: number, propertyName?: import("../../Definitions/Global/Drivers.js").Drivers): any;
        addLink(isyScene: import("../../ISYScene.js").ISYScene): void;
        addChild(childDevice: import("../../ISYNode.js").ISYDeviceNode<any, import("../../Definitions/Global/Drivers.js").Drivers, string>): void;
        readonly parentDevice: import("../../ISYNode.js").ISYDeviceNode<any, import("../../Definitions/Global/Drivers.js").Drivers, string>;
        readProperty(propertyName: import("../../Definitions/Global/Drivers.js").Drivers): Promise<import("../../Definitions/PropertyStatus.js").PropertyStatus>;
        readProperties(): Promise<import("../../Definitions/PropertyStatus.js").PropertyStatus[]>;
        updateProperty(propertyName: string, value: string): Promise<any>;
        sendCommand(command: string, parameters?: Record<string | symbol, string | number> | string | number): Promise<any>;
        refresh(): Promise<any>;
        parseResult(node: {
            property: import("../../Definitions/PropertyStatus.js").PropertyStatus | import("../../Definitions/PropertyStatus.js").PropertyStatus[];
        }): void;
        applyStatus(prop: import("../../Definitions/PropertyStatus.js").PropertyStatus): void;
        handleControlTrigger(controlName: string): boolean;
        handlePropertyChange(propertyName: any, value: any, formattedValue: string): boolean;
        readonly isy: import("../../ISY.js").ISY;
        readonly formatted: {
            ACCX?: any;
            ACCY?: any;
            ACCZ?: any;
            AIRFLOW?: any;
            AQI?: any;
            ALARM?: any;
            ANGLPOS?: any;
            ATMPRES?: any;
            ADRPST?: any;
            AWAKE?: any;
            BARPRES?: any;
            BATLVL?: any;
            BEEP?: any;
            BPDIA?: any;
            BPSYS?: any;
            BMI?: any;
            BONEM?: any;
            BRT?: any;
            CO?: any;
            CO2LVL?: any;
            CTL?: any;
            CLISPC?: any;
            CC?: any;
            CPW?: any;
            CLITEMP?: any;
            CV?: any;
            GV0?: any;
            GV1?: any;
            GV2?: any;
            GV3?: any;
            GV30?: any;
            GV4?: any;
            GV5?: any;
            GV6?: any;
            GV7?: any;
            GV8?: any;
            GV9?: any;
            GV10?: any;
            GV11?: any;
            GV12?: any;
            GV13?: any;
            GV14?: any;
            GV15?: any;
            GV16?: any;
            GV17?: any;
            GV18?: any;
            GV19?: any;
            GV20?: any;
            GV21?: any;
            GV22?: any;
            GV23?: any;
            GV24?: any;
            GV25?: any;
            GV26?: any;
            GV27?: any;
            GV28?: any;
            GV29?: any;
            DELAY?: any;
            DEWPT?: any;
            BUSY?: any;
            SECMD?: any;
            DIM?: any;
            DISTANC?: any;
            WATERTD?: any;
            DUR?: any;
            ELECCON?: any;
            ELECRES?: any;
            CLIEMD?: any;
            ERR?: any;
            ETO?: any;
            TEMPEXH?: any;
            FDDOWN?: any;
            FDSTOP?: any;
            FDUP?: any;
            CLIFRS?: any;
            CLIFS?: any;
            CLIFSO?: any;
            DFOF?: any;
            DFON?: any;
            CH20?: any;
            FREQ?: any;
            GPV?: any;
            GVOL?: any;
            GUST?: any;
            CLIHCS?: any;
            HEATIX?: any;
            CLISPH?: any;
            HAIL?: any;
            HR?: any;
            CLIHUM?: any;
            LUMIN?: any;
            METHANE?: any;
            MODE?: any;
            MOIST?: any;
            MOON?: any;
            MUSCLEM?: any;
            DOF?: any;
            DOF3?: any;
            DOF4?: any;
            DOF5?: any;
            DON?: any;
            DON3?: any;
            DON4?: any;
            DON5?: any;
            OL?: any;
            OZONE?: any;
            PM10?: any;
            PM25?: any;
            POP?: any;
            PPW?: any;
            PF?: any;
            PRECIP?: any;
            PULSCNT?: any;
            QUERY?: any;
            RADON?: any;
            RAINRT?: any;
            RELMOD?: any;
            RESET?: any;
            RESPR?: any;
            RFSS?: any;
            ROTATE?: any;
            CLISMD?: any;
            SEISINT?: any;
            SEISMAG?: any;
            SMOKED?: any;
            SOILH?: any;
            SOILR?: any;
            SOILS?: any;
            SOILT?: any;
            SOLRAD?: any;
            SVOL?: any;
            SPEED?: any;
            ST?: any;
            TANKCAP?: any;
            USRNUM?: any;
            CLIMD?: any;
            TIDELVL?: any;
            TIME?: any;
            TIMEREM?: any;
            TBW?: any;
            TPW?: any;
            UV?: any;
            UAC?: any;
            VOCLVL?: any;
            WATERF?: any;
            WATERP?: any;
            WATERT?: any;
            WVOL?: any;
            WEIGHT?: any;
            WINDCH?: any;
            WINDDIR?: any;
            WATERTB?: any;
            TEMPOUT?: any;
        };
        readonly uom: { [x in import("../../Definitions/Global/Drivers.js").Drivers]?: import("../../Definitions/Global/UOM.js").UnitOfMeasure; };
        readonly pending: import("../../ISYNode.js").DriverValues<import("../../Definitions/Global/Drivers.js").Drivers>;
        readonly local: import("../../ISYNode.js").DriverValues<import("../../Definitions/Global/Drivers.js").Drivers>;
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
        parentType: import("../../ISYConstants.js").NodeType;
        readonly elkId: string;
        nodeType: number;
        readonly baseDisplayName: string;
        propsInitialized: boolean;
        logger: (msg: any, level?: "error" | "warn" | "debug" | "info", ...meta: any[]) => import("winston").Logger;
        lastChanged: Date;
        enabled: boolean;
        baseName: any;
        on(event: "PropertyChanged" | "ControlTriggered", listener: ((propertyName: string, newValue: any, oldValue: any, formattedValue: string) => any) | ((controlName: string) => any)): any;
        emit(event: "PropertyChanged" | "ControlTriggered", propertyName?: string, newValue?: any, oldValue?: any, formattedValue?: string, controlName?: string): boolean;
        handleEvent(event: any): boolean;
        setDisplayName(template: string): string;
        refreshNotes(): Promise<void>;
        getNotes(): Promise<import("../../ISYNode.js").NodeNotes>;
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
} & typeof ZWaveBaseDevice;
export declare class ZWaveDimmerSwitchDevice extends ZWaveDimmerSwitchDevice_base {
    constructor(isy: any, deviceNode: any);
}
export {};
