import { Endpoint } from '@project-chip/matter.js/endpoint';
import { BridgedDeviceBasicInformationServer } from '@project-chip/matter.js/behaviors/bridged-device-basic-information';
import { ISY, InsteonRelayDevice } from '../ISY.js';
import { OnOffLightRequirements } from '@project-chip/matter.js/devices/OnOffLightDevice';
export const MatterEndpoint = (base, endpointType) => {
    return class extends base {
        endpointType = endpointType;
        createEndpoint() {
            var p = this.endpointType.with(BridgedDeviceBasicInformationServer);
            const id = this.address.replaceAll(' ', '_').replaceAll('.', ' ');
            return new Endpoint(p, { id: id, address: this.address, bridgedDeviceBasicInformation: {
                    nodeLabel: this.displayName.rightWithToken(32, ' '),
                    productName: this.productName.rightWithToken(32, ' '),
                    productLabel: this.model.leftWithToken(64, ' '),
                    serialNumber: id,
                    reachable: this.enabled,
                } });
        }
    };
};
export const ISYClusterBehavior = (base, t) => {
    return class extends base {
        device;
        initialize(_options) {
            super.initialize(_options);
            var address = this.agent.endpoint.stateOf(BridgedDeviceBasicInformationServer).uniqueId;
            this.device = ISY.instance.getDevice(address);
            if (this.device) {
                this.device.on("PropertyChanged", (propertyName, newValue, _oldValue, formattedValue) => this.handlePropertyChange(propertyName, newValue, _oldValue, formattedValue));
            }
        }
        handlePropertyChange(propertyName, value, newValue, formattedValue) {
        }
    };
};
//@ts-ignore
const ISYAOnOffBehavior = ISYClusterBehavior(OnOffLightRequirements.OnOffServer, InsteonRelayDevice.prototype);
export class ISYOnOffBehavior extends ISYClusterBehavior(OnOffLightRequirements.OnOffServer, InsteonRelayDevice.prototype) {
    async on() {
        await super.on();
        return super.device.updateIsOn(true);
    }
    async off() {
        await super.off();
        return this.device.updateIsOn(false);
    }
    async toggle() {
        return await this.device.updateIsOn(!this.device.isOn);
    }
    handlePropertyChange(propertyName, value, newValue, formattedValue) {
        this.state.onOff = newValue > 0;
        this.events.onOff$Changed.emit(newValue, value, this.context);
    }
}
export class BridgedISYNodeInformationServer extends BridgedDeviceBasicInformationServer {
    initialize() {
        return super.initialize();
    }
}
