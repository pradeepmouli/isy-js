"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISYUpdateableLevelDevice = exports.ISYLevelDevice = exports.ISYUpdateableBinaryStateDevice = exports.ISYBinaryStateDevice = exports.ISYDevice = void 0;
const util_1 = require("util");
const ISY_1 = require("../ISY");
const ISYConstants_1 = require("../ISYConstants");
const ISYNode_1 = require("../ISYNode");
class ISYDevice extends ISYNode_1.ISYNode {
    typeCode;
    deviceClass;
    parentAddress;
    category;
    subCategory;
    type;
    _parentDevice;
    children = [];
    scenes = [];
    formatted = {};
    uom = {};
    pending = {};
    local = {};
    hidden = false;
    _enabled;
    productName;
    model;
    modelNumber;
    version;
    isDimmable;
    constructor(isy, node) {
        super(isy, node);
        this.family = node.family;
        this.nodeType = 1;
        this.type = node.type;
        this._enabled = node.enabled;
        this.deviceClass = node.deviceClass;
        this.parentAddress = node.pnode;
        const s = this.type.split('.');
        this.category = Number(s[0]);
        this.subCategory = Number(s[1]);
        // console.log(nodeDetail);
        if (this.parentAddress !== this.address &&
            this.parentAddress !== undefined) {
            this._parentDevice = isy.getDevice(this.parentAddress);
            if (!(0, util_1.isNullOrUndefined)(this._parentDevice)) {
                this._parentDevice.addChild(this);
            }
        }
        if (Array.isArray(node.property)) {
            for (const prop of node.property) {
                this.local[prop.id] = this.convertFrom(prop.value, prop.uom);
                this.formatted[prop.id] = prop.formatted;
                this.uom[prop.id] = prop.uom;
                this.logger(`Property ${ISY_1.Controls[prop.id].label} (${prop.id}) initialized to: ${this[prop.id]} (${this.formatted[prop.id]})`);
            }
        }
        else if (node.property) {
            this.local[node.property.id] = this.convertFrom(node.property.value, node.property.uom);
            this.formatted[node.property.id] = node.property.formatted;
            this.uom[node.property.id] = node.property.uom;
            this.logger(`Property ${ISY_1.Controls[node.property.id].label} (${node.property.id}) initialized to: ${this[node.property.id]} (${this.formatted[node.property.id]})`);
        }
    }
    convertTo(value, uom) {
        return value;
    }
    convertFrom(value, uom) {
        return value;
    }
    addLink(isyScene) {
        this.scenes.push(isyScene);
    }
    addChild(childDevice) {
        this.children.push(childDevice);
    }
    get parentDevice() {
        if (this._parentDevice === undefined) {
            if (this.parentAddress !== this.address &&
                this.parentAddress !== null &&
                this.parentAddress !== undefined) {
                this._parentDevice = this.isy.getDevice(this.parentAddress);
                if (this._parentDevice !== null) {
                    this._parentDevice.addChild(this);
                }
            }
            this._parentDevice = null;
        }
        return this._parentDevice;
    }
    async refreshProperty(propertyName) {
        return this.isy.callISY(`nodes/${this.address}/status/${propertyName}`);
    }
    async updateProperty(propertyName, value) {
        const val = this.convertTo(Number(value), Number(this.uom[propertyName]));
        this.logger(`Updating property ${ISY_1.Controls[propertyName].label}. incoming value: ${value} outgoing value: ${val}`);
        this.pending[propertyName] = value;
        return this.isy
            .sendISYCommand(`nodes/${this.address}/set/${propertyName}/${val}`)
            .then((p) => {
            this.local[propertyName] = value;
            this.pending[propertyName] = null;
        });
    }
    public;
    async sendCommand(command, ...parameters) {
        return this.isy.sendNodeCommand(this, command, ...parameters);
    }
    async refresh() {
        const device = this;
        const result = await this.isy.callISY(`nodes/${this.address}/status`);
        const node = result.node;
        // this.logger(node);
        if (Array.isArray(node.property)) {
            for (const prop of node.property) {
                device.local[prop.id] = prop.value;
                device.formatted[prop.id] = prop.formatted;
                device.uom[prop.id] = prop.uom;
                device.logger(`Property ${ISY_1.Controls[prop.id].label} (${prop.id}) refreshed to: ${device[prop.id]} (${device.formatted[prop.id]})`);
            }
        }
        else if (node.property) {
            device.local[node.property.id] = node.property.value;
            device.formatted[node.property.id] = node.property.formatted;
            device.uom[node.property.id] = node.property.uom;
            device.logger(`Property ${ISY_1.Controls[node.property.id].label} (${node.property.id}) refreshed to: ${device[node.property.id]} (${device.formatted[node.property.id]})`);
        }
        return result;
    }
    handleControlTrigger(controlName) {
        return this.emit('ControlTriggered', controlName);
    }
    handlePropertyChange(propertyName, value, formattedValue) {
        let changed = false;
        const priorVal = this[propertyName];
        try {
            const val = this.convertFrom(value, this.uom[propertyName]);
            if (this.local[propertyName] !== val) {
                this.logger(`Property ${ISY_1.Controls[propertyName].label} (${propertyName}) updated to: ${val} (${formattedValue})`);
                this.local[propertyName] = val;
                this.formatted[propertyName] = formattedValue;
                this.lastChanged = new Date();
                changed = true;
            }
            else {
                this.logger(`Update event triggered, property ${ISY_1.Controls[propertyName].label} (${propertyName}) is unchanged.`);
            }
            if (changed) {
                this.emit('PropertyChanged', propertyName, val, priorVal, formattedValue);
                this.scenes.forEach((element) => {
                    this.logger(`Recalulating ${element.name}`);
                    element.recalculateState();
                });
            }
        }
        finally {
            return changed;
        }
    }
}
exports.ISYDevice = ISYDevice;
const ISYBinaryStateDevice = (Base) => {
    return class extends Base {
        get state() {
            return this.refreshProperty('ST').then(p => p > 0);
        }
    };
};
exports.ISYBinaryStateDevice = ISYBinaryStateDevice;
const ISYUpdateableBinaryStateDevice = (Base) => {
    return class extends Base {
        get state() {
            return this.refreshProperty('ST').then(p => p > 0);
        }
        async updateState(state) {
            if (state !== await this.state || this.pending.ST > 0 !== await this.state) {
                this.pending.ST = state ? ISYConstants_1.States.On : ISYConstants_1.States.Off;
                return this.sendCommand(state ? ISYConstants_1.Commands.On : ISYConstants_1.Commands.Off).then((p) => {
                    //this.local.ST = this.pending.ST;
                    this.pending.ST = null;
                });
            }
            return Promise.resolve();
        }
    };
};
exports.ISYUpdateableBinaryStateDevice = ISYUpdateableBinaryStateDevice;
const ISYLevelDevice = (base) => class extends base {
    get level() {
        return this.local.ST;
    }
};
exports.ISYLevelDevice = ISYLevelDevice;
// tslint:disable-next-line: variable-name
const ISYUpdateableLevelDevice = (base) => class extends base {
    get level() {
        return this.local.ST;
    }
    async updateLevel(level) {
        if (level != this.local.ST && level !== (this.pending.ST ?? this.local.ST)) {
            this.pending.ST = level;
            if (level > 0) {
                return this.sendCommand(ISYConstants_1.Commands.On, this.convertTo(level, this.uom.ST)).then((p) => {
                    //this.local.ST = this.pending.ST; *Wait to receive propertu update from subscription
                    this.pending.ST = null;
                });
            }
            else {
                return this.sendCommand(ISYConstants_1.Commands.Off).then((p) => {
                    //this.local.ST = this.pending.ST; *Wait to receive propertu update from subscription
                    this.pending.ST = null;
                });
            }
        }
        return Promise.resolve();
    }
};
exports.ISYUpdateableLevelDevice = ISYUpdateableLevelDevice;
