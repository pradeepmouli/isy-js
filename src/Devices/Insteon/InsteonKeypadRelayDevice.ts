import { KeypadDevice } from './InsteonDevice';
import { InsteonRelayDevice } from './InsteonRelayDevice';
import 'winston';
export class InsteonKeypadRelayDevice extends KeypadDevice(InsteonRelayDevice) {
	constructor (isy: any, deviceNode: any) {
		super(isy, deviceNode);
	}
}
