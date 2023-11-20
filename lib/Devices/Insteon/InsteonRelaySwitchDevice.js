"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsteonRelaySwitchDevice = void 0;
const InsteonDevice_1 = require("./InsteonDevice");
const InsteonRelayDevice_1 = require("./InsteonRelayDevice");
class InsteonRelaySwitchDevice extends (0, InsteonDevice_1.InsteonSwitchDevice)(InsteonRelayDevice_1.InsteonRelayDevice) {
    constructor(isy, deviceNode) {
        super(isy, deviceNode);
    }
}
exports.InsteonRelaySwitchDevice = InsteonRelaySwitchDevice;
