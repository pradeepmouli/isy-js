import { Commands, States } from '../ISYConstants.js';
import 'winston';
import { UnitOfMeasure } from '../Definitions/Global/UOM.js';
export const ISYBinaryStateDevice = (Base) => {
    return class extends Base {
        get state() {
            return Promise.resolve(this.local.ST > 0);
            //return this.readProperty('ST').then(p => p.value  > 0);
        }
        convertTo(value, uom, propertyName = null) {
            if (uom === UnitOfMeasure.Boolean) {
                return value > 0 ? true : false;
            }
            else
                super.convertTo(value, uom, propertyName);
        }
        convertFrom(value, uom, propertyName = null) {
            if (uom === UnitOfMeasure.Boolean) {
                if (value) {
                    return States.On;
                }
                else {
                    return States.Off;
                }
            }
            else
                super.convertFrom(value, uom, propertyName);
        }
    };
};
export const ISYUpdateableBinaryStateDevice = (Base) => {
    return class extends Base {
        get state() {
            return Promise.resolve(this.local.ST > 0);
            //return this.readProperty('ST').then(p => p.value  > 0);
        }
        set state(value) {
            this.updateState(value);
        }
        async On() {
            return this.updateState(true);
        }
        async Off() {
            return this.updateState(false);
        }
        async updateState(state) {
            if (this.local.ST > 0 !== state || this.pending.ST > 0 !== state) {
                this.pending.ST = state ? States.On : States.Off;
                return this.sendCommand(state ? 'DON' : 'DOF').then((p) => {
                    //this.local.ST = this.pending.ST;
                    this.pending.ST = null;
                });
            }
            return Promise.resolve();
        }
    };
};
export const ISYLevelDevice = (base) => class extends base {
    get level() {
        return this.local.ST;
    }
};
// tslint:disable-next-line: variable-name
export const ISYUpdateableLevelDevice = (base) => class extends base {
    get level() {
        return this.local.ST;
    }
    async updateLevel(level) {
        if (level != this.local.ST && level !== (this.pending.ST ?? this.local.ST)) {
            this.pending.ST = level;
            if (level > 0) {
                return this.sendCommand(Commands.On, this.convertTo(level, this.uom.ST)).then((p) => {
                    //this.local.ST = this.pending.ST; *Wait to receive propertu update from subscription
                    this.pending.ST = null;
                });
            }
            else {
                return this.sendCommand(Commands.Off).then((p) => {
                    //this.local.ST = this.pending.ST; *Wait to receive propertu update from subscription
                    this.pending.ST = null;
                });
            }
        }
        return Promise.resolve();
    }
};
