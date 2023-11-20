import { Family, Insteon } from '../../Families';
import { ISY } from '../../ISY';
import { byteToDegree, byteToPct, pctToByte } from '../../Utils';
import { ISYDevice } from '../ISYDevice';

// import { InsteonNLS } from './insteonfam'
export class InsteonBaseDevice extends ISYDevice<Family.Insteon> {
	constructor(isy: ISY, deviceNode: { family: any; type?: string; enabled: any; deviceClass?: any; pnode?: any; property?: any; flag?: any; nodeDefId?: string; address?: string; name?: string; parent?: any; ELK_ID?: string; }) {

		super(isy, deviceNode);
		this.family = Family.Insteon;
		//// this.productName = InsteonNLS.getDeviceDescription(String.fromCharCode(category,device,version));
		//his.childDevices = {};
	}
	public convertFrom(value: any, uom: number): any {
		switch (uom) {
			case 101:
				return byteToDegree(value);
			case 100:
				return byteToPct(value);
			case 17:
				return value / 10;
			default:
				return super.convertFrom(value, uom);
		}
	}
	public convertTo(value: any, uom: number): any {
		const nuom = super.convertTo(value, uom);
		switch (uom) {
			case 101:
				return nuom * 2;
			case 100:
				return pctToByte(nuom);
			case 17:
				return Math.round(value * 10);
			default:
				return nuom;
		}
	}
	public async sendBeep(level: number = 100): Promise<any> {
		return this.sendCommand(this, 'BEEP');
	}
}
