import { ISY } from '../../ISY';
import { Props } from '../../ISYConstants';
import { InsteonBaseDevice } from './InsteonBaseDevice';

export class InsteonThermostatDevice extends InsteonBaseDevice {
	constructor (isy: ISY, deviceNode: { family: any; type?: string; enabled: any; deviceClass?: any; pnode?: any; property?: any; flag?: any; nodeDefId?: string; address?: string; name?: string; parent?: any; ELK_ID?: string; }) {
		super(isy, deviceNode);
	}
	get currentTemperature() {
		return this.local.ST;
	}
	get coolSetPoint() {
		return this.local[Props.Climate.CoolSetPoint];
	}
	get heatSetPoint() {
		return this.local[Props.Climate.HeatSetPoint];
	}
	get mode() {
		return this.local[Props.Climate.Mode];
	}
	get operatingMode() {
		return this.local[Props.Climate.OperatingMode];
	}
	get fanMode() {
		return this.local[Props.Climate.FanMode];
	}
	get humidity() {
		return this.local[Props.Climate.Humidity];
	}
	public async updateCoolSetPoint(value: string) {
		return this.updateProperty(Props.Climate.CoolSetPoint, value);
	}
	public async updateHeatSetPoint(value: string) {
		return this.updateProperty(Props.Climate.HeatSetPoint, value);
	}
	public async updateMode(value: string) {
		return this.updateProperty(Props.Climate.Mode, value);
	}
}
