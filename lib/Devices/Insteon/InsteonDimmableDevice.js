"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsteonDimmableDevice = void 0;
const ISYDevice_1 = require("../ISYDevice");
const InsteonRelayDevice_1 = require("./InsteonRelayDevice");
class InsteonDimmableDevice extends (0, ISYDevice_1.ISYUpdateableLevelDevice)(InsteonRelayDevice_1.InsteonRelayDevice) {
    constructor(isy, node) {
        super(isy, node);
        this.isDimmable = true;
    }
    get brightnessLevel() {
        return this.level;
    }
    async updateBrightnessLevel(level) {
        return super.updateLevel(level);
    }
}
exports.InsteonDimmableDevice = InsteonDimmableDevice;
