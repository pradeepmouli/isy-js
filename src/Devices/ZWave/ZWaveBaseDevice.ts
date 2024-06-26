import { Family, Insteon } from '../../Families';
import { ISY } from '../../ISY';
import { byteToDegree, byteToPct, pctToByte } from '../../Utils';
import { ISYDevice, NodeInfo } from '../ISYDevice';

// import { InsteonNLS } from './insteonfam'
export class ZWaveBaseDevice extends ISYDevice<Family.ZWave> {

	public async getNodeDef()
	{
		return this.isy.callISY(`zmatter/zwave/node/${this.address}/def/get?full=true`)
	}

	constructor(isy: ISY, deviceNode: NodeInfo) {

		super(isy, deviceNode);
		this.family = Family.ZWave;

		//// this.productName = InsteonNLS.getDeviceDescription(String.fromCharCode(category,device,version));

	}
	public override convertFrom(value: any, uom: number): any {
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
	public override convertTo(value: any, uom: number): any {
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
		return this.sendCommand('BEEP');
	}
}
