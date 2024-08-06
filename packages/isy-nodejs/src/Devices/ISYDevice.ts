import { Family } from '../Definitions/Global/Families.js';
import { Commands, States } from '../ISYConstants.js';
import { EndpointType, MutableEndpoint } from '@project-chip/matter.js/endpoint/type';
import { Endpoint } from '@project-chip/matter.js/endpoint';
import { BridgedDeviceBasicInformationServer } from '@project-chip/matter.js/behaviors/bridged-device-basic-information';
import { SupportedBehaviors } from '@project-chip/matter.js/endpoint/properties';
import { ClusterBehavior } from '@project-chip/matter.js/behavior/cluster';
import 'winston'
import { ISYDeviceNode, type DriverValues, type ISYDevice } from '../ISYNode.js';
import { Constructor } from './Constructor.js';
import type { BasicInformationBehavior } from '@project-chip/matter.js/behaviors/basic-information';
import type { BridgedDeviceBasicInformationCluster } from '@project-chip/matter.js/cluster';
import { UnitOfMeasure } from '../Definitions/Global/UOM.js';
import { DriverType, type Driver, type DriverTypeWithLiteral } from '../Definitions/Global/Drivers.js';


export const ISYBinaryStateDevice = <K extends Family,D extends Driver.Literal, T extends Constructor<ISYDeviceNode<K,D|"ST",any>>>(Base: T) => {
	return class extends Base implements ISYBinaryStateDevice{
		get state(): Promise<boolean> {
			return Promise.resolve(this.local.ST > 0);
			//return this.readProperty('ST').then(p => p.value  > 0);
		}

		override convertTo(value: any, uom: UnitOfMeasure, propertyName: D = null) {
			if(uom === UnitOfMeasure.Boolean)
			{
				return value > 0 ? true : false;
			}
			else super.convertTo(value, uom,propertyName);
		}

		public override convertFrom(value: any, uom: number, propertyName: D = null) {
			if(uom === UnitOfMeasure.Boolean)
			{
				if(value)
				{
					return States.On;
				}
				else
				{
					return States.Off;
				}
			}
			else super.convertFrom(value, uom,propertyName);

		}
	};
};

export interface ISYBinaryStateDevice
{
  get state(): Promise<boolean>;

}



export const ISYUpdateableBinaryStateDevice = <K extends Family,D extends Driver.Literal,C extends string, T extends Constructor<ISYDevice<K,D,C | 'DON' | 'DOF'>>>(
	Base: T
) => {
	return class extends Base implements ISYDevice<K,D | DriverType.Status, C | 'DON' | 'DOF'> {

		declare local : DriverValues<D | DriverType.Status>
		declare formatted : DriverValues<D | DriverType.Status,string>
		declare pending : DriverValues<D | DriverType.Status>
		get state(): Promise<boolean> {
			return Promise.resolve(this.local.ST > 0);
			//return this.readProperty('ST').then(p => p.value  > 0);
		}

		set state(value: boolean) {
			this.updateState(value)
		}

		public async On(): Promise<any> {
			return this.updateState(true);
		}

		public async Off(): Promise<any> {
			return this.updateState(false);
		}

		public async updateState(state: boolean): Promise<any> {
			if (this.local.ST > 0 !== state || this.pending.ST > 0 !== state) {
				this.pending.ST = state ? States.On : States.Off;

				return this.sendCommand(state ? 'DON' : 'DOF').then((p) => {
					//this.local.ST = this.pending.ST;
					this.pending.ST = null;
				});
			}
			return Promise.resolve();
		}
	};
};


export interface MapsToEndpointType<T extends EndpointType>  {
	initialize(endpoint: Endpoint<T>): void;

}

type BehaviorList<T extends ClusterBehavior> = SupportedBehaviors & T;

export interface MapsToEndpoint<T extends ClusterBehavior>
{
	initialize<K extends MutableEndpoint.With<EndpointType.Empty,BehaviorList<T>>>(endpoint: Endpoint<K>): void;

}

export const ISYLevelDevice = <T extends Constructor<ISYDeviceNode<any,any,any>>>(base: T) =>
	class extends base {
		get level(): number {
			return this.local.ST;
		}
	};

// tslint:disable-next-line: variable-name

export const ISYUpdateableLevelDevice = <T extends Constructor<ISYDeviceNode<any,any,any>>>(base: T) =>
	class extends base {
		get level(): number {
			return this.local.ST;
		}

		public async updateLevel(level: number): Promise<any> {
			if (level != this.local.ST && level !== (this.pending.ST ?? this.local.ST)) {

				this.pending.ST = level;
				if (level > 0) {
					return this.sendCommand(
						Commands.On,
						this.convertTo(level, this.uom.ST)
					).then((p) => {
						//this.local.ST = this.pending.ST; *Wait to receive propertu update from subscription
						this.pending.ST = null;
					});
				} else {
					return this.sendCommand(Commands.Off).then((p) => {
						//this.local.ST = this.pending.ST; *Wait to receive propertu update from subscription
						this.pending.ST = null;
					});
				}
			}
			return Promise.resolve();
		}
	};