import { Family } from '../../Definitions/Global/Families.js';
import { ISY, ISYNode } from '../../ISY.js';
import { States } from '../../ISYConstants.js';
import { ISYUpdateableBinaryStateDevice, ISYUpdateableLevelDevice } from '../ISYDevice.js';
import { ISYDeviceNode } from '../../ISYNode.js';
import { InsteonBaseDevice } from './InsteonBaseDevice.js';
import { InsteonDimmableDevice } from './InsteonDimmableDevice.js';
import 'winston';
import type { NodeInfo } from '../../Model/NodeInfo.js';
import {Insteon} from './index.js';

export class InsteonFanMotorDevice extends ISYUpdateableLevelDevice(ISYUpdateableBinaryStateDevice(InsteonBaseDevice)) {
	constructor (isy: ISY, deviceNode: NodeInfo) {
		super(isy, deviceNode);
		this.hidden = true;
	}

	get isOn() {
		return this.state;
	}
	get fanSpeed() {
		return this.level;
	}

	public async updateFanSpeed(level: number) {
		return this.updateLevel(level);
	}
	public async updateIsOn(isOn: boolean) {
		if (!isOn) {
			return this.updateLevel(States.Level.Min);
		} else {
			return this.updateLevel(States.Level.Max);
		}
	}

}

export class InsteonFanDevice extends InsteonBaseDevice {
	public light?: InsteonDimmableDevice;
	public motor: InsteonFanMotorDevice;
	constructor(isy: ISY, deviceNode: NodeInfo) {
		super(isy, deviceNode);
		this.light = new InsteonDimmableDevice(isy, deviceNode);
		this.light.on('PropertyChanged', ((a: any, b: any, c: any, d: string) => { this.emit('PropertyChanged', `light.${a}`, b, c, d); }).bind(this));
		this.addChild(this.light);
	}

	public override handleEvent(event: { control?: string; data?: any; node?: any; }): boolean {
		this.logger(JSON.stringify(event));
		const child = this.children.find((p) => p.address === event.node);
		if (child !== undefined) {
			return child.handleEvent(event);
		}
		return false;
	}

	public override addChild(childDevice) {
		super.addChild(childDevice);
		if (childDevice instanceof InsteonFanMotorDevice) {
			this.logger('Fan Motor Found');
			this.motor = childDevice as InsteonFanMotorDevice;
			this.motor.on('PropertyChanged', ((a: any, b: any, c: any, d: string) => { this.emit('PropertyChanged', `motor.${a}`, b, c, d); }).bind(this));
		}
	}

	public async updateFanSpeed(level: number) {
		return this.motor.updateLevel(level);
	}
	public async updatFanIsOn(isOn: boolean) {
		if (!this.motor.isOn) {
			this.motor.updateLevel(States.Level.Min);
		} else {
			this.motor.updateLevel(States.Fan.High);
		}
	}

}