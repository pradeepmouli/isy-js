import { NodeDef, type AcceptCommandDef, DriverDef, SendCommandDef, type ParamDef } from "./NodeDef.js";
import { Family } from "../Definitions/Global/Families.js";
import type { Driver } from "../Definitions/Global/Drivers.js";
import { NLSCommandParameterRecord, NLSCommandRecord, NLSDriverRecord, NLSGenericRecord, type NLSRecordMap as NLSM, type NLSIndexMap as NLSI, type NLSRecordTypeMap } from "./NLS.js";
import { type EditorDefMap as EDM, type EditorDef, type RangeDef } from "./EditorDef.js";
import { UnitOfMeasure } from "../Definitions/Global/UOM.js";
export declare function buildNodeClassDefinitions<T extends Family>(nodeDefs: NodeDef[], family: T, NLSRecordMap: typeof NLSM, EditorDefMap: typeof EDM, NLSIndexMap: typeof NLSI): {
    [x: string]: NodeClassDefinition<T>;
};
export declare class NodeClassDefinition<T extends Family> {
    applyIndexDefs(NLSIndexMap: Map<Family, {
        [x: string]: {
            [y: number]: string;
        };
    }>): void;
    applyIndexMap(indexDef: {
        [x: string]: {
            [y: number]: string;
        };
    }): void;
    id: string;
    nlsId: string;
    drivers: {
        [x in Driver.Type]?: DriverDefinition;
    };
    commands: {
        [x: string]: CommandDefinition;
    };
    events: {
        [x: string]: EventDefinition;
    };
    family: T;
    label: string;
    get name(): string;
    toJSON(): {
        className: string;
        id: string;
        nlsId: string;
        drivers: {
            ACCX?: DriverDefinition;
            ACCY?: DriverDefinition;
            ACCZ?: DriverDefinition;
            AIRFLOW?: DriverDefinition;
            AQI?: DriverDefinition;
            ALARM?: DriverDefinition;
            ANGLPOS?: DriverDefinition;
            ATMPRES?: DriverDefinition;
            ADRPST?: DriverDefinition;
            AWAKE?: DriverDefinition;
            BARPRES?: DriverDefinition;
            BATLVL?: DriverDefinition;
            BEEP?: DriverDefinition;
            BPDIA?: DriverDefinition;
            BPSYS?: DriverDefinition;
            BMI?: DriverDefinition;
            BONEM?: DriverDefinition;
            BRT?: DriverDefinition;
            CO?: DriverDefinition;
            CO2LVL?: DriverDefinition;
            CTL?: DriverDefinition;
            CLISPC?: DriverDefinition;
            CC?: DriverDefinition;
            CPW?: DriverDefinition;
            CLITEMP?: DriverDefinition;
            CV?: DriverDefinition;
            GV0?: DriverDefinition;
            GV1?: DriverDefinition;
            GV2?: DriverDefinition;
            GV3?: DriverDefinition;
            GV30?: DriverDefinition;
            GV4?: DriverDefinition;
            GV5?: DriverDefinition;
            GV6?: DriverDefinition;
            GV7?: DriverDefinition;
            GV8?: DriverDefinition;
            GV9?: DriverDefinition;
            GV10?: DriverDefinition;
            GV11?: DriverDefinition;
            GV12?: DriverDefinition;
            GV13?: DriverDefinition;
            GV14?: DriverDefinition;
            GV15?: DriverDefinition;
            GV16?: DriverDefinition;
            GV17?: DriverDefinition;
            GV18?: DriverDefinition;
            GV19?: DriverDefinition;
            GV20?: DriverDefinition;
            GV21?: DriverDefinition;
            GV22?: DriverDefinition;
            GV23?: DriverDefinition;
            GV24?: DriverDefinition;
            GV25?: DriverDefinition;
            GV26?: DriverDefinition;
            GV27?: DriverDefinition;
            GV28?: DriverDefinition;
            GV29?: DriverDefinition;
            DELAY?: DriverDefinition;
            DEWPT?: DriverDefinition;
            BUSY?: DriverDefinition;
            SECMD?: DriverDefinition;
            DIM?: DriverDefinition;
            DISTANC?: DriverDefinition;
            WATERTD?: DriverDefinition;
            DUR?: DriverDefinition;
            ELECCON?: DriverDefinition;
            ELECRES?: DriverDefinition;
            CLIEMD?: DriverDefinition;
            ERR?: DriverDefinition;
            ETO?: DriverDefinition;
            TEMPEXH?: DriverDefinition;
            FDDOWN?: DriverDefinition;
            FDSTOP?: DriverDefinition;
            FDUP?: DriverDefinition;
            CLIFRS?: DriverDefinition;
            CLIFS?: DriverDefinition;
            CLIFSO?: DriverDefinition;
            DFOF?: DriverDefinition;
            DFON?: DriverDefinition;
            CH20?: DriverDefinition;
            FREQ?: DriverDefinition;
            GPV?: DriverDefinition;
            GVOL?: DriverDefinition;
            GUST?: DriverDefinition;
            CLIHCS?: DriverDefinition;
            HEATIX?: DriverDefinition;
            CLISPH?: DriverDefinition;
            HAIL?: DriverDefinition;
            HR?: DriverDefinition;
            CLIHUM?: DriverDefinition;
            LUMIN?: DriverDefinition;
            METHANE?: DriverDefinition;
            MODE?: DriverDefinition;
            MOIST?: DriverDefinition;
            MOON?: DriverDefinition;
            MUSCLEM?: DriverDefinition;
            DOF?: DriverDefinition;
            DOF3?: DriverDefinition;
            DOF4?: DriverDefinition;
            DOF5?: DriverDefinition;
            DON?: DriverDefinition;
            DON3?: DriverDefinition;
            DON4?: DriverDefinition;
            DON5?: DriverDefinition;
            OL?: DriverDefinition;
            OZONE?: DriverDefinition;
            PM10?: DriverDefinition;
            PM25?: DriverDefinition;
            POP?: DriverDefinition;
            PPW?: DriverDefinition;
            PF?: DriverDefinition;
            PRECIP?: DriverDefinition;
            PULSCNT?: DriverDefinition;
            QUERY?: DriverDefinition;
            RADON?: DriverDefinition;
            RAINRT?: DriverDefinition;
            RELMOD?: DriverDefinition;
            RESET?: DriverDefinition;
            RESPR?: DriverDefinition;
            RFSS?: DriverDefinition;
            ROTATE?: DriverDefinition;
            CLISMD?: DriverDefinition;
            SEISINT?: DriverDefinition;
            SEISMAG?: DriverDefinition;
            SMOKED?: DriverDefinition;
            SOILH?: DriverDefinition;
            SOILR?: DriverDefinition;
            SOILS?: DriverDefinition;
            SOILT?: DriverDefinition;
            SOLRAD?: DriverDefinition;
            SVOL?: DriverDefinition;
            SPEED?: DriverDefinition;
            ST?: DriverDefinition;
            TANKCAP?: DriverDefinition;
            USRNUM?: DriverDefinition;
            CLIMD?: DriverDefinition;
            TIDELVL?: DriverDefinition;
            TIME?: DriverDefinition;
            TIMEREM?: DriverDefinition;
            TBW?: DriverDefinition;
            TPW?: DriverDefinition;
            UV?: DriverDefinition;
            UAC?: DriverDefinition;
            VOCLVL?: DriverDefinition;
            WATERF?: DriverDefinition;
            WATERP?: DriverDefinition;
            WATERT?: DriverDefinition;
            WVOL?: DriverDefinition;
            WEIGHT?: DriverDefinition;
            WINDCH?: DriverDefinition;
            WINDDIR?: DriverDefinition;
            WATERTB?: DriverDefinition;
            TEMPOUT?: DriverDefinition;
        };
        commands: {
            [x: string]: CommandDefinition;
        };
        events: {
            [x: string]: EventDefinition;
        };
        family: T;
        label: string;
        name: string;
    };
    constructor(nodeDef: NodeDef, family: T);
    applyEditorDefs(EditorDefMap: typeof EDM): void;
    applyNLS(NLSRecordMap: typeof NLSM): void;
    applyNLSMap(nlsm: {
        [y: string]: NLSRecordTypeMap;
    }): void;
    private applyNLSRecords;
}
export type DataTypeDefinition = {
    uom: number;
    enum: false;
    min: number;
    max: number;
    step?: number;
    precision?: number;
} | {
    uom: number;
    enum: true;
    indexId: string;
    values: {
        [x: number]: string;
    };
};
export declare abstract class NodeMemberDefinition<TId extends string> {
    #private;
    label: string;
    hidden: boolean;
    id: TId;
    editorId: string;
    dataType: {
        [x in keyof typeof UnitOfMeasure]?: DataTypeDefinition;
    };
    classDef: NodeClassDefinition<any>;
    constructor(classDef: NodeClassDefinition<any>, def?: DriverDef | ParamDef);
    parseEditorId(e: string): RangeDef;
    get name(): string;
    primaryDataType(): {
        uom: number;
        enum: false;
        min: number;
        max: number;
        step?: number;
        precision?: number;
    } | {
        uom: number;
        enum: true;
        indexId: string;
        values: {
            [x: number]: string;
        };
    };
    applyEditorDef(e: EditorDef): void;
    applyIndexDef(e: {
        [x: string]: {
            [y: number]: string;
        };
    }): void;
    toJSON(): {
        label: string;
        hidden: boolean;
        id: TId;
        editorId: string;
        dataType: {
            readonly [x: number]: DataTypeDefinition;
            readonly Unknown?: DataTypeDefinition;
            readonly Ampere?: DataTypeDefinition;
            readonly Boolean?: DataTypeDefinition;
            readonly BtuPerHour?: DataTypeDefinition;
            readonly Celsius?: DataTypeDefinition;
            readonly Centimeter?: DataTypeDefinition;
            readonly CubicFeet?: DataTypeDefinition;
            readonly CubicFeetPerMinute?: DataTypeDefinition;
            readonly CubicMeter?: DataTypeDefinition;
            readonly Day?: DataTypeDefinition;
            readonly Days?: DataTypeDefinition;
            readonly DeadboltStatus?: DataTypeDefinition;
            readonly Decibel?: DataTypeDefinition;
            readonly DecibelA?: DataTypeDefinition;
            readonly Degree?: DataTypeDefinition;
            readonly DoorLockAlarm?: DataTypeDefinition;
            readonly EuropeanMacroseismic?: DataTypeDefinition;
            readonly Fahrenheit?: DataTypeDefinition;
            readonly Feet?: DataTypeDefinition;
            readonly Hour?: DataTypeDefinition;
            readonly Hours?: DataTypeDefinition;
            readonly AbsoluteHumidity?: DataTypeDefinition;
            readonly RelativeHumidity?: DataTypeDefinition;
            readonly InchesOfMercury?: DataTypeDefinition;
            readonly InchesPerHour?: DataTypeDefinition;
            readonly Index?: DataTypeDefinition;
            readonly Kelvin?: DataTypeDefinition;
            readonly Keyword?: DataTypeDefinition;
            readonly Kilogram?: DataTypeDefinition;
            readonly Kilovolt?: DataTypeDefinition;
            readonly Kilowatt?: DataTypeDefinition;
            readonly Kilopascal?: DataTypeDefinition;
            readonly KilometersPerHour?: DataTypeDefinition;
            readonly KilowattsPerHour?: DataTypeDefinition;
            readonly Liedu?: DataTypeDefinition;
            readonly Liter?: DataTypeDefinition;
            readonly Lux?: DataTypeDefinition;
            readonly Mercalli?: DataTypeDefinition;
            readonly Meter?: DataTypeDefinition;
            readonly CubicMetersPerHour?: DataTypeDefinition;
            readonly MPS?: DataTypeDefinition;
            readonly Milliamp?: DataTypeDefinition;
            readonly Millisecond?: DataTypeDefinition;
            readonly Millivolt?: DataTypeDefinition;
            readonly Minute?: DataTypeDefinition;
            readonly DurationInMinutes?: DataTypeDefinition;
            readonly MillimetersPerHour?: DataTypeDefinition;
            readonly Month?: DataTypeDefinition;
            readonly MilesPerHour?: DataTypeDefinition;
            readonly MetersPerSecond?: DataTypeDefinition;
            readonly Ohm?: DataTypeDefinition;
            readonly Percent?: DataTypeDefinition;
            readonly Pound?: DataTypeDefinition;
            readonly PowerFactor?: DataTypeDefinition;
            readonly PartsPerMillion?: DataTypeDefinition;
            readonly PulseCount?: DataTypeDefinition;
            readonly RawValue?: DataTypeDefinition;
            readonly Second?: DataTypeDefinition;
            readonly DurationInSeconds?: DataTypeDefinition;
            readonly SiemensPerMeter?: DataTypeDefinition;
            readonly BodyWaveMagnitudeScale?: DataTypeDefinition;
            readonly RichterScale?: DataTypeDefinition;
            readonly MomentMagnitudeScale?: DataTypeDefinition;
            readonly SurfaceWaveMagnitudeScale?: DataTypeDefinition;
            readonly Shindo?: DataTypeDefinition;
            readonly SML?: DataTypeDefinition;
            readonly ThermostatHeatCoolState?: DataTypeDefinition;
            readonly ThermostatMode?: DataTypeDefinition;
            readonly ThermostatFanMode?: DataTypeDefinition;
            readonly USGallon?: DataTypeDefinition;
            readonly UserNumber?: DataTypeDefinition;
            readonly UVIndex?: DataTypeDefinition;
            readonly Volt?: DataTypeDefinition;
            readonly Watt?: DataTypeDefinition;
            readonly WattsPerSquareMeter?: DataTypeDefinition;
            readonly Weekday?: DataTypeDefinition;
            readonly WindDirectionInDegrees?: DataTypeDefinition;
            readonly Year?: DataTypeDefinition;
            readonly OffOn?: DataTypeDefinition;
            readonly OpenClose?: DataTypeDefinition;
            readonly ThermostatFanRunState?: DataTypeDefinition;
            readonly ThermostatFanModeOverride?: DataTypeDefinition;
            readonly Millimeter?: DataTypeDefinition;
            readonly Kilometer?: DataTypeDefinition;
            readonly SecureMode?: DataTypeDefinition;
            readonly OhmMeter?: DataTypeDefinition;
            readonly KiloOhm?: DataTypeDefinition;
            readonly CubicMeterPerCubicMeter?: DataTypeDefinition;
            readonly WaterActivity?: DataTypeDefinition;
            readonly RotationsPerMinute?: DataTypeDefinition;
            readonly Hertz?: DataTypeDefinition;
            readonly AnglePositionDegreesNorthPole?: DataTypeDefinition;
            readonly AnglePositionDegreesSouthPole?: DataTypeDefinition;
            readonly PowerManagementAlarm?: DataTypeDefinition;
            readonly ApplianceAlarm?: DataTypeDefinition;
            readonly HomeHealthAlarm?: DataTypeDefinition;
            readonly VOCLevel?: DataTypeDefinition;
            readonly BarrierStatus?: DataTypeDefinition;
            readonly InsteonThermostatMode?: DataTypeDefinition;
            readonly InsteonThermostatFanMode?: DataTypeDefinition;
            readonly LevelFrom0To255?: DataTypeDefinition;
            readonly DegreeX2?: DataTypeDefinition;
            readonly KilowattSecond?: DataTypeDefinition;
            readonly Dollar?: DataTypeDefinition;
            readonly Cent?: DataTypeDefinition;
            readonly Inch?: DataTypeDefinition;
            readonly MillimetersPerDay?: DataTypeDefinition;
            convertTo?: DataTypeDefinition;
            convertFrom?: DataTypeDefinition;
        };
        name: string;
    };
}
export declare class DriverDefinition extends NodeMemberDefinition<Driver.Type> {
    constructor(def: DriverDef, classDef: NodeClassDefinition<any>);
    applyNLSRecord(nls: NLSGenericRecord | NLSDriverRecord): void;
    createClassProperty(): void;
}
export declare class CommandDefinition extends NodeMemberDefinition<string> {
    optional: boolean;
    parameters?: {
        [x: string]: ParameterDefinition;
    };
    initialValue?: Driver.Type;
    get name(): string;
    constructor(def: AcceptCommandDef, classDef: NodeClassDefinition<any>);
    applyNLSRecord(nls: NLSGenericRecord | NLSCommandRecord | NLSCommandParameterRecord): void;
    applyEditorDef(e: EditorDef): void;
    applyIndexDef(e: {
        [x: string]: {
            [y: number]: string;
        };
    }): void;
    toJSON(): {
        label: string;
        hidden: boolean;
        id: string;
        editorId: string;
        dataType: {
            readonly [x: number]: DataTypeDefinition;
            readonly Unknown?: DataTypeDefinition;
            readonly Ampere?: DataTypeDefinition;
            readonly Boolean?: DataTypeDefinition;
            readonly BtuPerHour?: DataTypeDefinition;
            readonly Celsius?: DataTypeDefinition;
            readonly Centimeter?: DataTypeDefinition;
            readonly CubicFeet?: DataTypeDefinition;
            readonly CubicFeetPerMinute?: DataTypeDefinition;
            readonly CubicMeter?: DataTypeDefinition;
            readonly Day?: DataTypeDefinition;
            readonly Days?: DataTypeDefinition;
            readonly DeadboltStatus?: DataTypeDefinition;
            readonly Decibel?: DataTypeDefinition;
            readonly DecibelA?: DataTypeDefinition;
            readonly Degree?: DataTypeDefinition;
            readonly DoorLockAlarm?: DataTypeDefinition;
            readonly EuropeanMacroseismic?: DataTypeDefinition;
            readonly Fahrenheit?: DataTypeDefinition;
            readonly Feet?: DataTypeDefinition;
            readonly Hour?: DataTypeDefinition;
            readonly Hours?: DataTypeDefinition;
            readonly AbsoluteHumidity?: DataTypeDefinition;
            readonly RelativeHumidity?: DataTypeDefinition;
            readonly InchesOfMercury?: DataTypeDefinition;
            readonly InchesPerHour?: DataTypeDefinition;
            readonly Index?: DataTypeDefinition;
            readonly Kelvin?: DataTypeDefinition;
            readonly Keyword?: DataTypeDefinition;
            readonly Kilogram?: DataTypeDefinition;
            readonly Kilovolt?: DataTypeDefinition;
            readonly Kilowatt?: DataTypeDefinition;
            readonly Kilopascal?: DataTypeDefinition;
            readonly KilometersPerHour?: DataTypeDefinition;
            readonly KilowattsPerHour?: DataTypeDefinition;
            readonly Liedu?: DataTypeDefinition;
            readonly Liter?: DataTypeDefinition;
            readonly Lux?: DataTypeDefinition;
            readonly Mercalli?: DataTypeDefinition;
            readonly Meter?: DataTypeDefinition;
            readonly CubicMetersPerHour?: DataTypeDefinition;
            readonly MPS?: DataTypeDefinition;
            readonly Milliamp?: DataTypeDefinition;
            readonly Millisecond?: DataTypeDefinition;
            readonly Millivolt?: DataTypeDefinition;
            readonly Minute?: DataTypeDefinition;
            readonly DurationInMinutes?: DataTypeDefinition;
            readonly MillimetersPerHour?: DataTypeDefinition;
            readonly Month?: DataTypeDefinition;
            readonly MilesPerHour?: DataTypeDefinition;
            readonly MetersPerSecond?: DataTypeDefinition;
            readonly Ohm?: DataTypeDefinition;
            readonly Percent?: DataTypeDefinition;
            readonly Pound?: DataTypeDefinition;
            readonly PowerFactor?: DataTypeDefinition;
            readonly PartsPerMillion?: DataTypeDefinition;
            readonly PulseCount?: DataTypeDefinition;
            readonly RawValue?: DataTypeDefinition;
            readonly Second?: DataTypeDefinition;
            readonly DurationInSeconds?: DataTypeDefinition;
            readonly SiemensPerMeter?: DataTypeDefinition;
            readonly BodyWaveMagnitudeScale?: DataTypeDefinition;
            readonly RichterScale?: DataTypeDefinition;
            readonly MomentMagnitudeScale?: DataTypeDefinition;
            readonly SurfaceWaveMagnitudeScale?: DataTypeDefinition;
            readonly Shindo?: DataTypeDefinition;
            readonly SML?: DataTypeDefinition;
            readonly ThermostatHeatCoolState?: DataTypeDefinition;
            readonly ThermostatMode?: DataTypeDefinition;
            readonly ThermostatFanMode?: DataTypeDefinition;
            readonly USGallon?: DataTypeDefinition;
            readonly UserNumber?: DataTypeDefinition;
            readonly UVIndex?: DataTypeDefinition;
            readonly Volt?: DataTypeDefinition;
            readonly Watt?: DataTypeDefinition;
            readonly WattsPerSquareMeter?: DataTypeDefinition;
            readonly Weekday?: DataTypeDefinition;
            readonly WindDirectionInDegrees?: DataTypeDefinition;
            readonly Year?: DataTypeDefinition;
            readonly OffOn?: DataTypeDefinition;
            readonly OpenClose?: DataTypeDefinition;
            readonly ThermostatFanRunState?: DataTypeDefinition;
            readonly ThermostatFanModeOverride?: DataTypeDefinition;
            readonly Millimeter?: DataTypeDefinition;
            readonly Kilometer?: DataTypeDefinition;
            readonly SecureMode?: DataTypeDefinition;
            readonly OhmMeter?: DataTypeDefinition;
            readonly KiloOhm?: DataTypeDefinition;
            readonly CubicMeterPerCubicMeter?: DataTypeDefinition;
            readonly WaterActivity?: DataTypeDefinition;
            readonly RotationsPerMinute?: DataTypeDefinition;
            readonly Hertz?: DataTypeDefinition;
            readonly AnglePositionDegreesNorthPole?: DataTypeDefinition;
            readonly AnglePositionDegreesSouthPole?: DataTypeDefinition;
            readonly PowerManagementAlarm?: DataTypeDefinition;
            readonly ApplianceAlarm?: DataTypeDefinition;
            readonly HomeHealthAlarm?: DataTypeDefinition;
            readonly VOCLevel?: DataTypeDefinition;
            readonly BarrierStatus?: DataTypeDefinition;
            readonly InsteonThermostatMode?: DataTypeDefinition;
            readonly InsteonThermostatFanMode?: DataTypeDefinition;
            readonly LevelFrom0To255?: DataTypeDefinition;
            readonly DegreeX2?: DataTypeDefinition;
            readonly KilowattSecond?: DataTypeDefinition;
            readonly Dollar?: DataTypeDefinition;
            readonly Cent?: DataTypeDefinition;
            readonly Inch?: DataTypeDefinition;
            readonly MillimetersPerDay?: DataTypeDefinition;
            convertTo?: DataTypeDefinition;
            convertFrom?: DataTypeDefinition;
        };
        name: string;
        optional: boolean;
        parameters: {
            [x: string]: ParameterDefinition;
        };
        initialValue: import("../Definitions/Global/Drivers.js").DriverType;
    };
}
export declare class ParameterDefinition extends NodeMemberDefinition<string> {
    initialValue: Driver.Type;
    optional: boolean;
    constructor(def: ParamDef, classDef: NodeClassDefinition<any>);
    applyNLSRecord(nls: NLSCommandParameterRecord | NLSGenericRecord): void;
}
export declare class EventDefinition extends NodeMemberDefinition<string> {
    constructor(def: SendCommandDef, classDef: NodeClassDefinition<any>);
    applyNLSRecord(nls: NLSCommandRecord | NLSGenericRecord): void;
    toJSON(): {
        label: string;
        hidden: boolean;
        id: string;
        editorId: string;
        dataType: {
            readonly [x: number]: DataTypeDefinition;
            readonly Unknown?: DataTypeDefinition;
            readonly Ampere?: DataTypeDefinition;
            readonly Boolean?: DataTypeDefinition;
            readonly BtuPerHour?: DataTypeDefinition;
            readonly Celsius?: DataTypeDefinition;
            readonly Centimeter?: DataTypeDefinition;
            readonly CubicFeet?: DataTypeDefinition;
            readonly CubicFeetPerMinute?: DataTypeDefinition;
            readonly CubicMeter?: DataTypeDefinition;
            readonly Day?: DataTypeDefinition;
            readonly Days?: DataTypeDefinition;
            readonly DeadboltStatus?: DataTypeDefinition;
            readonly Decibel?: DataTypeDefinition;
            readonly DecibelA?: DataTypeDefinition;
            readonly Degree?: DataTypeDefinition;
            readonly DoorLockAlarm?: DataTypeDefinition;
            readonly EuropeanMacroseismic?: DataTypeDefinition;
            readonly Fahrenheit?: DataTypeDefinition;
            readonly Feet?: DataTypeDefinition;
            readonly Hour?: DataTypeDefinition;
            readonly Hours?: DataTypeDefinition;
            readonly AbsoluteHumidity?: DataTypeDefinition;
            readonly RelativeHumidity?: DataTypeDefinition;
            readonly InchesOfMercury?: DataTypeDefinition;
            readonly InchesPerHour?: DataTypeDefinition;
            readonly Index?: DataTypeDefinition;
            readonly Kelvin?: DataTypeDefinition;
            readonly Keyword?: DataTypeDefinition;
            readonly Kilogram?: DataTypeDefinition;
            readonly Kilovolt?: DataTypeDefinition;
            readonly Kilowatt?: DataTypeDefinition;
            readonly Kilopascal?: DataTypeDefinition;
            readonly KilometersPerHour?: DataTypeDefinition;
            readonly KilowattsPerHour?: DataTypeDefinition;
            readonly Liedu?: DataTypeDefinition;
            readonly Liter?: DataTypeDefinition;
            readonly Lux?: DataTypeDefinition;
            readonly Mercalli?: DataTypeDefinition;
            readonly Meter?: DataTypeDefinition;
            readonly CubicMetersPerHour?: DataTypeDefinition;
            readonly MPS?: DataTypeDefinition;
            readonly Milliamp?: DataTypeDefinition;
            readonly Millisecond?: DataTypeDefinition;
            readonly Millivolt?: DataTypeDefinition;
            readonly Minute?: DataTypeDefinition;
            readonly DurationInMinutes?: DataTypeDefinition;
            readonly MillimetersPerHour?: DataTypeDefinition;
            readonly Month?: DataTypeDefinition;
            readonly MilesPerHour?: DataTypeDefinition;
            readonly MetersPerSecond?: DataTypeDefinition;
            readonly Ohm?: DataTypeDefinition;
            readonly Percent?: DataTypeDefinition;
            readonly Pound?: DataTypeDefinition;
            readonly PowerFactor?: DataTypeDefinition;
            readonly PartsPerMillion?: DataTypeDefinition;
            readonly PulseCount?: DataTypeDefinition;
            readonly RawValue?: DataTypeDefinition;
            readonly Second?: DataTypeDefinition;
            readonly DurationInSeconds?: DataTypeDefinition;
            readonly SiemensPerMeter?: DataTypeDefinition;
            readonly BodyWaveMagnitudeScale?: DataTypeDefinition;
            readonly RichterScale?: DataTypeDefinition;
            readonly MomentMagnitudeScale?: DataTypeDefinition;
            readonly SurfaceWaveMagnitudeScale?: DataTypeDefinition;
            readonly Shindo?: DataTypeDefinition;
            readonly SML?: DataTypeDefinition;
            readonly ThermostatHeatCoolState?: DataTypeDefinition;
            readonly ThermostatMode?: DataTypeDefinition;
            readonly ThermostatFanMode?: DataTypeDefinition;
            readonly USGallon?: DataTypeDefinition;
            readonly UserNumber?: DataTypeDefinition;
            readonly UVIndex?: DataTypeDefinition;
            readonly Volt?: DataTypeDefinition;
            readonly Watt?: DataTypeDefinition;
            readonly WattsPerSquareMeter?: DataTypeDefinition;
            readonly Weekday?: DataTypeDefinition;
            readonly WindDirectionInDegrees?: DataTypeDefinition;
            readonly Year?: DataTypeDefinition;
            readonly OffOn?: DataTypeDefinition;
            readonly OpenClose?: DataTypeDefinition;
            readonly ThermostatFanRunState?: DataTypeDefinition;
            readonly ThermostatFanModeOverride?: DataTypeDefinition;
            readonly Millimeter?: DataTypeDefinition;
            readonly Kilometer?: DataTypeDefinition;
            readonly SecureMode?: DataTypeDefinition;
            readonly OhmMeter?: DataTypeDefinition;
            readonly KiloOhm?: DataTypeDefinition;
            readonly CubicMeterPerCubicMeter?: DataTypeDefinition;
            readonly WaterActivity?: DataTypeDefinition;
            readonly RotationsPerMinute?: DataTypeDefinition;
            readonly Hertz?: DataTypeDefinition;
            readonly AnglePositionDegreesNorthPole?: DataTypeDefinition;
            readonly AnglePositionDegreesSouthPole?: DataTypeDefinition;
            readonly PowerManagementAlarm?: DataTypeDefinition;
            readonly ApplianceAlarm?: DataTypeDefinition;
            readonly HomeHealthAlarm?: DataTypeDefinition;
            readonly VOCLevel?: DataTypeDefinition;
            readonly BarrierStatus?: DataTypeDefinition;
            readonly InsteonThermostatMode?: DataTypeDefinition;
            readonly InsteonThermostatFanMode?: DataTypeDefinition;
            readonly LevelFrom0To255?: DataTypeDefinition;
            readonly DegreeX2?: DataTypeDefinition;
            readonly KilowattSecond?: DataTypeDefinition;
            readonly Dollar?: DataTypeDefinition;
            readonly Cent?: DataTypeDefinition;
            readonly Inch?: DataTypeDefinition;
            readonly MillimetersPerDay?: DataTypeDefinition;
            convertTo?: DataTypeDefinition;
            convertFrom?: DataTypeDefinition;
        };
        name: string;
    };
}
//# sourceMappingURL=ClassDefinition.d.ts.map