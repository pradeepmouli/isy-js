"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISYNode = void 0;
const events_1 = require("events");
const Families_1 = require("./Families");
const ISY_1 = require("./ISY");
class ISYNode extends events_1.EventEmitter {
    constructor(isy, node) {
        var _a, _b;
        super();
        this.folder = '';
        this.isy = isy;
        this.nodeType = 0;
        this.flag = node.flag;
        this.nodeDefId = node.nodeDefId;
        this.address = String(node.address);
        this.name = node.name;
        this.family = (_a = node.family) !== null && _a !== void 0 ? _a : Families_1.Family.Insteon;
        this.parent = node.parent;
        this.parentType = Number((_b = this.parent) === null || _b === void 0 ? void 0 : _b.type);
        this.enabled = node.enabled;
        this.elkId = node.ELK_ID;
        this.propsInitialized = false;
        const s = this.name.split('.');
        //if (s.length > 1)
        //s.shift();
        this.baseDisplayName = s.join(' ').replace(/([A-Z])/g, ' $1').replace('  ', ' ').replace('  ', ' ').trim();
        if (this.parentType === ISY_1.NodeType.Folder) {
            this.folder = isy.folderMap.get(this.parent._);
            isy.logger.info(`${this.name} this node is in folder ${this.folder}`);
            this.logger = (level = 'DEBUG', msg, ...meta) => {
                isy.logger.log(level, `${this.folder} ${this.name} (${this.address}): ${msg}`);
                return isy.logger;
            };
            this.displayName = `${this.folder} ${this.baseName}`;
        }
        else {
            this.displayName = this.baseDisplayName;
            this.logger = (msg, level = 'DEBUG', ...meta) => {
                isy.logger.log(level, `$${this.name} (${this.address}): ${msg}`);
                return isy.logger;
            };
        }
        this.logger(this.nodeDefId);
        this.lastChanged = new Date();
    }
    handlePropertyChange(propertyName, value, formattedValue) {
        this.lastChanged = new Date();
        return true;
    }
    handleControlTrigger(controlName) {
        //this.lastChanged = new Date();
        return true;
    }
    on(event, listener) {
        super.on(event, listener);
        return this;
    }
    emit(event, propertyName, newValue, oldValue, formattedValue, controlName) {
        if ('PropertyChanged')
            return super.emit(event, propertyName, newValue, oldValue, formattedValue);
        else if ('ControlTriggered')
            return super.emit(event, controlName);
    }
    handleEvent(event) {
        let actionValue = null;
        if (event.action instanceof Object) {
            actionValue = event.action._;
        }
        else if (event.action instanceof Number || event.action instanceof String) {
            actionValue = Number(event.action);
        }
        if (event.control in this) {
            // property not command
            const formatted = 'fmtAct' in event ? event.fmtAct : actionValue;
            return this.handlePropertyChange(event.control, actionValue, formatted);
        }
        else if (event.control === '_3') {
            this.logger(`Received Node Change Event: ${JSON.stringify(event)}. These are currently unsupported.`);
        }
        else {
            // this.logger(event.control);
            const e = event.control;
            const dispName = ISY_1.Controls[e];
            if (dispName !== undefined && dispName !== null) {
                this.logger(`Command ${dispName.label} (${e}) triggered.`);
            }
            else {
                this.logger(`Command ${e} triggered.`);
            }
            let controlName = e;
            this.handleControlTrigger(controlName);
            return true;
        }
    }
    setDisplayName(template) {
        var _a, _b, _c, _d;
        // tslint:disable-next-line: only-arrow-functions
        if (!ISYNode._displayNameFunction) {
            // template = template.replace("{", "{this."};
            const regex = /(?<op1>\w+) \?\? (?<op2>\w+)/g;
            this.logger(`Display name format: ${template}`);
            let newttemp = template.replace(regex, 'this.$<op1> === null || this.$<op1> === undefined || this.$<op1> === \'\' ? this.$<op2> : this.$<op1>');
            this.logger(`Template format updated to: ${newttemp}`);
            const s = { location: (_a = this.location) !== null && _a !== void 0 ? _a : '', folder: (_b = this.folder) !== null && _b !== void 0 ? _b : '', spokenName: (_c = this.spokenName) !== null && _c !== void 0 ? _c : this.name, name: (_d = this.name) !== null && _d !== void 0 ? _d : '' };
            newttemp = newttemp.replace('this.name', 'this.baseDisplayName');
            ISYNode._displayNameFunction = new Function(`return \`${newttemp}\`.trim();`);
        }
        return ISYNode._displayNameFunction.call(this);
    }
    async refreshNotes() {
        var _a, _b, _c, _d, _e;
        const that = this;
        try {
            const result = await this.getNotes();
            if (result !== null && result !== undefined) {
                that.location = (_b = (_a = result.location) !== null && _a !== void 0 ? _a : this.folder) !== null && _b !== void 0 ? _b : '';
                that.spokenName = (_d = (_c = result.spoken) !== null && _c !== void 0 ? _c : this.folder) !== null && _d !== void 0 ? _d : '';
                // if(result.spoken)
            }
            else {
                that.logger('No notes found.');
            }
            that.displayName = that.setDisplayName.bind(that)(that.isy.displayNameFormat);
            that.displayName = (_e = that.displayName) !== null && _e !== void 0 ? _e : this.baseDisplayName;
            that.logger(`The friendly name updated to: ${that.displayName}`);
        }
        catch (e) {
            that.logger(e);
        }
    }
    async getNotes() {
        try {
            const result = await this.isy.callISY(`nodes/${this.address}/notes`);
            if (result !== null && result !== undefined) {
                return result.NodeProperties;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    }
}
exports.ISYNode = ISYNode;
