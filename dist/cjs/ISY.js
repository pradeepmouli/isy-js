"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISY = exports.Controls = exports.Utils = exports.ELKAlarmPanelDevice = exports.ElkAlarmSensorDevice = exports.NodeType = exports.ISYNode = exports.InsteonMotionSensorDevice = exports.InsteonRelayDevice = exports.InsteonDimmerSwitchDevice = exports.InsteonDoorWindowSensorDevice = exports.InsteonThermostatDevice = exports.InsteonLockDevice = exports.InsteonOnOffOutletDevice = exports.InsteonDimmerOutletDevice = exports.InsteonSmokeSensorDevice = exports.InsteonLeakSensorDevice = exports.InsteonFanMotorDevice = exports.InsteonFanDevice = exports.InsteonDimmableDevice = exports.InsteonKeypadButtonDevice = exports.InsteonKeypadRelayDevice = exports.InsteonKeypadDimmerDevice = exports.ISYDevice = exports.InsteonOutletDevice = exports.InsteonBaseDevice = exports.ISYVariable = exports.Props = exports.Categories = exports.VariableType = exports.Family = exports.States = exports.ISYScene = void 0;
const faye_websocket_1 = __importDefault(require("faye-websocket"));
const fs_1 = require("fs");
const xml2js_1 = require("xml2js");
const processors_js_1 = require("xml2js/lib/processors.js");
const xmldoc_1 = require("xmldoc");
const axios_1 = __importDefault(require("axios"));
const Categories_js_1 = require("./Categories.js");
Object.defineProperty(exports, "Categories", { enumerable: true, get: function () { return Categories_js_1.Categories; } });
const DeviceFactory_js_1 = require("./Devices/DeviceFactory.js");
const ElkAlarmPanelDevice_js_1 = require("./Devices/Elk/ElkAlarmPanelDevice.js");
Object.defineProperty(exports, "ELKAlarmPanelDevice", { enumerable: true, get: function () { return ElkAlarmPanelDevice_js_1.ELKAlarmPanelDevice; } });
const ElkAlarmSensorDevice_js_1 = require("./Devices/Elk/ElkAlarmSensorDevice.js");
Object.defineProperty(exports, "ElkAlarmSensorDevice", { enumerable: true, get: function () { return ElkAlarmSensorDevice_js_1.ElkAlarmSensorDevice; } });
const InsteonBaseDevice_js_1 = require("./Devices/Insteon/InsteonBaseDevice.js");
Object.defineProperty(exports, "InsteonBaseDevice", { enumerable: true, get: function () { return InsteonBaseDevice_js_1.InsteonBaseDevice; } });
const InsteonDevice_js_1 = require("./Devices/Insteon/InsteonDevice.js");
Object.defineProperty(exports, "InsteonOutletDevice", { enumerable: true, get: function () { return InsteonDevice_js_1.InsteonOutletDevice; } });
const InsteonDimmableDevice_js_1 = require("./Devices/Insteon/InsteonDimmableDevice.js");
Object.defineProperty(exports, "InsteonDimmableDevice", { enumerable: true, get: function () { return InsteonDimmableDevice_js_1.InsteonDimmableDevice; } });
const InsteonDimmerSwitchDevice_js_1 = require("./Devices/Insteon/InsteonDimmerSwitchDevice.js");
Object.defineProperty(exports, "InsteonDimmerSwitchDevice", { enumerable: true, get: function () { return InsteonDimmerSwitchDevice_js_1.InsteonDimmerSwitchDevice; } });
const InsteonDoorWindowSensorDevice_js_1 = require("./Devices/Insteon/InsteonDoorWindowSensorDevice.js");
Object.defineProperty(exports, "InsteonDoorWindowSensorDevice", { enumerable: true, get: function () { return InsteonDoorWindowSensorDevice_js_1.InsteonDoorWindowSensorDevice; } });
const InsteonFanDevice_js_1 = require("./Devices/Insteon/InsteonFanDevice.js");
Object.defineProperty(exports, "InsteonFanDevice", { enumerable: true, get: function () { return InsteonFanDevice_js_1.InsteonFanDevice; } });
Object.defineProperty(exports, "InsteonFanMotorDevice", { enumerable: true, get: function () { return InsteonFanDevice_js_1.InsteonFanMotorDevice; } });
const InsteonKeypadRelayDevice_js_1 = require("./Devices/Insteon/InsteonKeypadRelayDevice.js");
Object.defineProperty(exports, "InsteonKeypadRelayDevice", { enumerable: true, get: function () { return InsteonKeypadRelayDevice_js_1.InsteonKeypadRelayDevice; } });
const InsteonKeypadDimmerDevice_js_1 = require("./Devices/Insteon/InsteonKeypadDimmerDevice.js");
Object.defineProperty(exports, "InsteonKeypadDimmerDevice", { enumerable: true, get: function () { return InsteonKeypadDimmerDevice_js_1.InsteonKeypadDimmerDevice; } });
const InsteonLeakSensorDevice_js_1 = require("./Devices/Insteon/InsteonLeakSensorDevice.js");
Object.defineProperty(exports, "InsteonLeakSensorDevice", { enumerable: true, get: function () { return InsteonLeakSensorDevice_js_1.InsteonLeakSensorDevice; } });
const InsteonLockDevice_js_1 = require("./Devices/Insteon/InsteonLockDevice.js");
Object.defineProperty(exports, "InsteonLockDevice", { enumerable: true, get: function () { return InsteonLockDevice_js_1.InsteonLockDevice; } });
const InsteonMotionSensorDevice_js_1 = require("./Devices/Insteon/InsteonMotionSensorDevice.js");
Object.defineProperty(exports, "InsteonMotionSensorDevice", { enumerable: true, get: function () { return InsteonMotionSensorDevice_js_1.InsteonMotionSensorDevice; } });
const InsteonRelayDevice_js_1 = require("./Devices/Insteon/InsteonRelayDevice.js");
Object.defineProperty(exports, "InsteonRelayDevice", { enumerable: true, get: function () { return InsteonRelayDevice_js_1.InsteonRelayDevice; } });
const InsteonThermostatDevice_js_1 = require("./Devices/Insteon/InsteonThermostatDevice.js");
Object.defineProperty(exports, "InsteonThermostatDevice", { enumerable: true, get: function () { return InsteonThermostatDevice_js_1.InsteonThermostatDevice; } });
const ISYNode_js_1 = require("./ISYNode.js");
Object.defineProperty(exports, "ISYDevice", { enumerable: true, get: function () { return ISYNode_js_1.ISYDeviceNode; } });
const Families_js_1 = require("./Definitions/Families.js");
Object.defineProperty(exports, "Family", { enumerable: true, get: function () { return Families_js_1.Family; } });
const EventType_js_1 = require("./Events/EventType.js");
const ISYConstants_js_1 = require("./ISYConstants.js");
Object.defineProperty(exports, "NodeType", { enumerable: true, get: function () { return ISYConstants_js_1.NodeType; } });
Object.defineProperty(exports, "Props", { enumerable: true, get: function () { return ISYConstants_js_1.Props; } });
Object.defineProperty(exports, "States", { enumerable: true, get: function () { return ISYConstants_js_1.States; } });
Object.defineProperty(exports, "VariableType", { enumerable: true, get: function () { return ISYConstants_js_1.VariableType; } });
const ISYNode_js_2 = require("./ISYNode.js");
Object.defineProperty(exports, "ISYNode", { enumerable: true, get: function () { return ISYNode_js_2.ISYNode; } });
const ISYScene_js_1 = require("./ISYScene.js");
Object.defineProperty(exports, "ISYScene", { enumerable: true, get: function () { return ISYScene_js_1.ISYScene; } });
const ISYVariable_js_1 = require("./ISYVariable.js");
Object.defineProperty(exports, "ISYVariable", { enumerable: true, get: function () { return ISYVariable_js_1.ISYVariable; } });
const InsteonOnOffOutletDevice_js_1 = require("./Devices/Insteon/InsteonOnOffOutletDevice.js");
Object.defineProperty(exports, "InsteonOnOffOutletDevice", { enumerable: true, get: function () { return InsteonOnOffOutletDevice_js_1.InsteonOnOffOutletDevice; } });
const InsteonSmokeSensorDevice_js_1 = require("./Devices/Insteon/InsteonSmokeSensorDevice.js");
Object.defineProperty(exports, "InsteonSmokeSensorDevice", { enumerable: true, get: function () { return InsteonSmokeSensorDevice_js_1.InsteonSmokeSensorDevice; } });
const InsteonDimmerOutletDevice_js_1 = require("./Devices/Insteon/InsteonDimmerOutletDevice.js");
Object.defineProperty(exports, "InsteonDimmerOutletDevice", { enumerable: true, get: function () { return InsteonDimmerOutletDevice_js_1.InsteonDimmerOutletDevice; } });
const InsteonKeypadDevice_js_1 = require("./Devices/Insteon/InsteonKeypadDevice.js");
Object.defineProperty(exports, "InsteonKeypadButtonDevice", { enumerable: true, get: function () { return InsteonKeypadDevice_js_1.InsteonKeypadButtonDevice; } });
const events_1 = require("events");
const winston_1 = require("winston");
const Utils = __importStar(require("./Utils.js"));
exports.Utils = Utils;
const parser = new xml2js_1.Parser({
    explicitArray: false,
    mergeAttrs: true,
    attrValueProcessors: [processors_js_1.parseNumbers, processors_js_1.parseBooleans],
    valueProcessors: [processors_js_1.parseNumbers, processors_js_1.parseBooleans]
});
exports.Controls = {};
class ISY extends events_1.EventEmitter {
    deviceList = new Map();
    deviceMap = new Map();
    sceneList = new Map();
    folderMap = new Map();
    webSocket;
    zoneMap = new Map();
    protocol;
    host;
    port;
    get address() {
        return `${this.host}:${this.port}`;
    }
    id;
    vendorName = "Universal Devices, Inc.";
    productId = 5226;
    productName = "eisy";
    restlerOptions;
    credentials;
    variableList = new Map();
    nodesLoaded = false;
    wsprotocol = 'ws';
    elkEnabled;
    get isDebugEnabled() {
        return this.logger?.isDebugEnabled();
    }
    displayNameFormat;
    guardianTimer;
    elkAlarmPanel;
    logger;
    lastActivity;
    model;
    serverVersion;
    storagePath;
    configInfo;
    static instance;
    constructor(config, logger = new winston_1.Logger(), storagePath) {
        super();
        this.storagePath = storagePath ?? './';
        this.displayNameFormat = config.displayNameFormat ?? '${location ?? folder} ${spokenName ?? name}';
        this.host = config.host;
        this.port = config.port;
        this.credentials = {
            username: config.username,
            password: config.password
        };
        this.protocol = config.protocol;
        this.wsprotocol = 'ws';
        this.elkEnabled = config.elkEnabled ?? false;
        this.nodesLoaded = false;
        var fopts = (0, winston_1.format)((info) => { info.message = JSON.stringify(info.message); return info; })({ label: 'ISY' });
        this.logger = winston_1.loggers.add('isy', { transports: logger.transports, level: logger.level, format: winston_1.format.label({ label: 'ISY' }) });
        this.guardianTimer = null;
        if (this.elkEnabled) {
            this.elkAlarmPanel = new ElkAlarmPanelDevice_js_1.ELKAlarmPanelDevice(this, 1);
        }
        ISY.instance = this;
    }
    emit(event, node) {
        return super.emit(event, node);
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    async callISY(url) {
        url = `${this.protocol}://${this.address}/rest/${url}/`;
        this.logger.info(`Sending request: ${url}`);
        const xml = await axios_1.default.get(url, { auth: { username: this.credentials.username, password: this.credentials.password } });
        return await parser.parseStringPromise(xml.data).then((result) => {
            if (this.checkForFailure(result)) {
                // this.logger.info(`Error calling ISY: ${JSON.stringify(response)}`);
                throw new Error(`Error calling ISY: ${JSON.stringify(result)}`);
            }
            return result;
        }, (reason) => {
            throw new Error(`Error calling ISY: ${JSON.stringify(reason)}`);
        });
    }
    nodeChangedHandler(node, propertyName = null) {
        const that = this;
        if (this.nodesLoaded) {
            // this.logger.info(`Node: ${node.address} changed`);
            // if (this.changeCallback !== undefined && this.changeCallback !== null) {
            // t//his.changeCallback(that, node, propertyName);
            // }
        }
    }
    getElkAlarmPanel() {
        return this.elkAlarmPanel;
    }
    async loadNodes() {
        try {
            const result = await this.callISY('nodes');
            if (this.isDebugEnabled)
                (0, fs_1.writeFile)(this.storagePath + '/ISYNodesDump.json', JSON.stringify(result), this.logger.error);
            await this.readFolderNodes(result).catch(p => this.logger.error('Error Loading Folders', p));
            await this.readDeviceNodes(result).catch(p => this.logger.error('Error Loading Devices', p));
            await this.readSceneNodes(result).catch(p => this.logger.error('Error Loading Scenes', p));
            return result;
        }
        catch (e) {
            throw new Error(`Error loading nodes: ${e.message}`);
        }
    }
    async readFolderNodes(result) {
        this.logger.info('Loading Folder Nodes');
        if (result?.nodes?.folder) {
            for (const folder of result.nodes.folder) {
                this.logger.info(`Loading Folder Node: ${JSON.stringify(folder)}`);
                this.folderMap.set(folder.address, folder.name);
            }
        }
    }
    async readSceneNodes(result) {
        this.logger.info('Loading Scene Nodes');
        for (const scene of result.nodes?.group) {
            if (scene.name === 'ISY' || scene.name === 'Auto DR') {
                continue;
            } // Skip ISY & Auto DR Scenes
            const newScene = new ISYScene_js_1.ISYScene(this, scene);
            try {
                await newScene.refreshNotes();
            }
            catch (e) {
                this.logger.debug('No notes found.');
            }
            this.sceneList.set(newScene.address, newScene);
        }
    }
    async readDeviceNodes(obj) {
        this.logger.info('Loading Device Nodes');
        for (const device of obj.nodes.node) {
            this.logger.debug(`Loading Device Node: ${JSON.stringify(device)}`);
            if (!this.deviceMap.has(device.pnode)) {
                const address = device.address;
                this.deviceMap[device.pnode] = {
                    address
                };
            }
            else {
                this.deviceMap[device.pnode].push(device.address);
            }
            let newDevice = null;
            // let deviceTypeInfo = this.isyTypeToTypeName(device.type, device.address);
            // this.logger.info(JSON.stringify(deviceTypeInfo));
            const enabled = device.enabled ?? true;
            const d = DeviceFactory_js_1.DeviceFactory.getDeviceDetails(device);
            if (d.class) {
                newDevice = new d.class(this, device);
                newDevice.productName = d.name;
                newDevice.model = `(${d.modelNumber}) ${d.name} v.${d.version}`;
                newDevice.modelNumber = d.modelNumber;
                newDevice.version = d.version;
            }
            if (enabled) {
                if (newDevice === null) {
                    this.logger.warn(`Device type resolution failed for ${device.name} with type: ${device.type} and nodedef: ${device.nodeDefId}`);
                    newDevice = new ISYNode_js_1.ISYDeviceNode(this, device);
                }
                else if (newDevice !== null) {
                    if (d.unsupported) {
                        this.logger.warn('Device not currently supported: ' + JSON.stringify(device) + ' /n It has been mapped to: ' + d.class.name);
                    }
                    try {
                        await newDevice.refreshNotes();
                    }
                    catch (e) {
                        this.logger.debug('No notes found.');
                    }
                    // if (!newDevice.hidden) {
                    // }
                    // this.deviceList.push(newDevice);
                }
                else {
                }
                this.deviceList.set(newDevice.address, newDevice);
            }
            else {
                this.logger.info(`Ignoring disabled device: ${device.name}`);
            }
        }
        this.logger.info(`${this.deviceList.size} devices added.`);
    }
    loadElkNodes(result) {
        const document = new xmldoc_1.XmlDocument(result);
        const nodes = document
            .childNamed('areas')
            .childNamed('area')
            .childrenNamed('zone');
        for (let index = 0; index < nodes.length; index++) {
            const id = nodes[index].attr.id;
            const name = nodes[index].attr.name;
            const alarmDef = nodes[index].attr.alarmDef;
            const newDevice = new ElkAlarmSensorDevice_js_1.ElkAlarmSensorDevice(this, name, 1, id /*TODO: Handle CO Sensor vs. Door/Window Sensor */);
            this.zoneMap[newDevice.zone] = newDevice;
        }
    }
    loadElkInitialStatus(result) {
        const p = new xml2js_1.Parser({
            explicitArray: false,
            mergeAttrs: true
        });
        p.parseString(result, (err, res) => {
            if (err) {
                throw err;
            }
            for (const nodes of res.ae) {
                this.elkAlarmPanel.setFromAreaUpdate(nodes);
            }
            for (const nodes of res.ze) {
                const id = nodes.zone;
                const zoneDevice = this.zoneMap[id];
                if (zoneDevice !== null) {
                    zoneDevice.setFromZoneUpdate(nodes);
                    if (this.deviceList[zoneDevice.address] === null &&
                        zoneDevice.isPresent()) {
                        this.deviceList[zoneDevice.address] = zoneDevice;
                        // this.deviceIndex[zoneDevice.address] = zoneDevice;
                    }
                }
            }
        });
    }
    finishInitialize(success) {
        if (!this.nodesLoaded) {
            this.nodesLoaded = true;
            //initializeCompleted();
            if (success) {
                if (this.elkEnabled) {
                    this.deviceList[this.elkAlarmPanel.address] = this.elkAlarmPanel;
                }
                this.guardianTimer = setInterval(this.guardian.bind(this), 60000);
                this.initializeWebSocket();
            }
        }
    }
    guardian() {
        const timeNow = new Date();
        if (Number(timeNow) - Number(this.lastActivity) > 60000) {
            this.logger.info('Guardian: Detected no activity in more then 60 seconds. Reinitializing web sockets');
            this.initializeWebSocket();
        }
    }
    variableChangedHandler(variable) {
        this.logger.info(`Variable: ${variable.id} (${variable.type}) changed`);
    }
    checkForFailure(response) {
        return (response === null ||
            response instanceof Error ||
            response.RestResponse !== undefined && response.RestResponse.status !== 200);
    }
    async loadVariables(type) {
        const that = this;
        return this.callISY(`vars/definitions/${type}`).then((result) => that.createVariables(type, result))
            .then(() => that.callISY(`vars/get/${type}`)).then(that.setVariableValues.bind(that));
    }
    async loadConfig() {
        try {
            this.logger.info('Loading ISY Config');
            const configuration = (await this.callISY('config')).configuration;
            if (this.isDebugEnabled) {
                (0, fs_1.writeFile)(this.storagePath + '/ISYConfigDump.json', JSON.stringify(configuration), this.logger.error);
            }
            const controls = configuration.controls;
            this.model = configuration.deviceSpecs.model;
            this.serverVersion = configuration.app_version;
            this.vendorName = configuration.deviceSpecs.make;
            this.productId = configuration.product.id;
            this.productName = configuration.product.desc;
            this.id = configuration.root.id;
            // TODO: Check Installed Features
            // this.logger.info(result.configuration);
            if (controls !== undefined) {
                // this.logger.info(controls.control);
                // var arr = new Array(controls.control);
                for (const ctl of controls.control) {
                    // this.logger.info(ctl);
                    exports.Controls[ctl.name] = ctl;
                }
            }
            return configuration;
        }
        catch (e) {
            throw Error(`Error Loading Config: ${e.message}`);
        }
    }
    getVariableList() {
        return this.variableList;
    }
    getVariable(type, id) {
        const key = this.createVariableKey(type, id);
        if (this.variableList.has(key)) {
            return this.variableList[key];
        }
        return null;
    }
    createVariableKey(type, id) {
        return `${type}:${id}`;
    }
    createVariables(type, result) {
        for (const variable of result.CList.e) {
            const id = Number(variable.id);
            const name = variable.name;
            const newVariable = new ISYVariable_js_1.ISYVariable(this, id, name, type);
            this.variableList.set(this.createVariableKey(type, id), newVariable);
        }
    }
    setVariableValues(result) {
        for (const vals of result.vars.var) {
            const type = Number(vals.type);
            const id = Number(vals.id);
            const variable = this.getVariable(type, id);
            if (variable) {
                variable.init = vals.init;
                variable.value = vals.val;
                variable.lastChanged = new Date(vals.ts);
            }
        }
    }
    async refreshStatuses() {
        try {
            const that = this;
            const result = await that.callISY('status');
            if (that.isDebugEnabled) {
                (0, fs_1.writeFile)(that.storagePath + '/ISYStatusDump.json', JSON.stringify(result), this.logger.error);
            }
            this.logger.debug(result);
            for (const node of result.nodes.node) {
                this.logger.debug(node);
                let device = that.getDevice(node.id);
                if (device !== null && device !== undefined) {
                    let child = device.children.find(p => p.address === node.id);
                    if (child) {
                        //Case FanLinc where we treat the light as a child of the fan.
                        device = child;
                    }
                    if (Array.isArray(node.property)) {
                        for (let prop of node.property) {
                            device.local[prop.id] = device.convertFrom(prop.value, prop.uom);
                            device.formatted[prop.id] = prop.formatted;
                            device.uom[prop.id] = prop.uom;
                            device.logger(`Property ${exports.Controls[prop.id].label} (${prop.id}) initialized to: ${device.local[prop.id]} (${device.formatted[prop.id]})`);
                        }
                    }
                    else if (node.property) {
                        device.local[node.property.id] = device.convertFrom(node.property.value, node.property.uom);
                        device.formatted[node.property.id] = node.property.formatted;
                        device.uom[node.property.id] = node.property.uom;
                        device.logger(`Property ${exports.Controls[node.property.id].label} (${node.property.id}) initialized to: ${device.local[node.property.id]} (${device.formatted[node.property.id]})`);
                    }
                }
                ;
            }
        }
        catch (e) {
            throw new Error(`Error refreshing statuses: ${JSON.stringify(e.message)}`);
        }
    }
    async initialize() {
        const that = this;
        const options = {
            username: this.credentials.username,
            password: this.credentials.password
        };
        try {
            await this.loadConfig();
            await this.loadNodes();
            await this.loadVariables(ISYConstants_js_1.VariableType.Integer);
            await this.loadVariables(ISYConstants_js_1.VariableType.State);
            await this.refreshStatuses().then(() => {
                if (this.elkEnabled) {
                    // get(
                    // 	`${this.protocol}://${that.address}/rest/elk/get/topology`,
                    // 	options
                    // ).on('complete', (result: { message: string; }, response: any) => {
                    // 	if (that.checkForFailure(response)) {
                    // 		that.logger.info('Error loading from elk: ' + result.message);
                    // 		throw new Error(
                    // 			'Unable to contact the ELK to get the topology'
                    // 		);
                    // 	} else {
                    // 		that.loadElkNodes(result);
                    // 		get(
                    // 			`${that.protocol}://${that.address}/rest/elk/get/status`,
                    // 			options
                    // 		).on('complete', (result: { message: string; }, response: any) => {
                    // 			if (that.checkForFailure(response)) {
                    // 				that.logger.info(`Error:${result.message}`);
                    // 				throw new Error(
                    // 					'Unable to get the status from the elk'
                    // 				);
                    // 			} else {
                    // 				that.loadElkInitialStatus(result);
                    // 				that.finishInitialize(true, initializeCompleted);
                    // 			}
                    // 		});
                    // 	}
                    // });
                }
                else {
                    that.finishInitialize(true);
                }
            });
        }
        catch (e) {
            throw (e);
        }
        finally {
            if (this.nodesLoaded !== true) {
                that.finishInitialize(true);
            }
        }
        return Promise.resolve(true);
    }
    async handleInitializeError(step, reason) {
        this.logger.error(`Error initializing ISY (${step}): ${JSON.stringify(reason)}`);
        return Promise.reject(reason);
    }
    handleWebSocketMessage(event) {
        this.lastActivity = new Date();
        parser.parseString(event.data, (err, res) => {
            if (err) {
                throw err;
            }
            const evt = res.Event;
            if (evt === undefined || evt.control === undefined) {
                return;
            }
            let actionValue = 0;
            if (evt.action instanceof Object) {
                actionValue = evt.action._;
            }
            else if (evt.action instanceof Number || evt.action instanceof String) {
                actionValue = Number(evt.action);
            }
            const stringControl = Number(evt.control?.replace('_', ''));
            switch (stringControl) {
                case EventType_js_1.EventType.Elk:
                    if (actionValue === 2) {
                        this.elkAlarmPanel.handleEvent(event);
                    }
                    else if (actionValue === 3) {
                        const zeElement = evt.eventInfo.ze;
                        const zoneId = zeElement.zone;
                        const zoneDevice = this.zoneMap[zoneId];
                        if (zoneDevice !== null) {
                            if (zoneDevice.handleEvent(event)) {
                                this.nodeChangedHandler(zoneDevice);
                            }
                        }
                    }
                    break;
                case EventType_js_1.EventType.Trigger:
                    if (actionValue === 6) {
                        const varNode = evt.eventInfo.var;
                        const id = varNode.id;
                        const type = varNode.type;
                        this.getVariable(type, id)?.handleEvent(evt);
                    }
                    break;
                case EventType_js_1.EventType.Heartbeat:
                    this.logger.debug(`Received ${EventType_js_1.EventType[Number(stringControl)]} Signal from ISY: ${JSON.stringify(evt)}`);
                    break;
                default:
                    if (evt.node !== '' && evt.node !== undefined && evt.node !== null) {
                        //
                        const impactedDevice = this.getDevice(evt.node);
                        if (impactedDevice !== undefined && impactedDevice !== null) {
                            impactedDevice.handleEvent(evt);
                        }
                        else {
                            this.logger.warn(`${EventType_js_1.EventType[stringControl]} Event for Unidentified Device: ${JSON.stringify(evt)}`);
                        }
                    }
                    else {
                        if (stringControl === EventType_js_1.EventType.NodeChanged) {
                            this.logger.info(`Received Node Change Event: ${JSON.stringify(evt)}. These are currently unsupported.`);
                        }
                        this.logger.info(`Unhandled ${EventType_js_1.EventType[Number(stringControl)]} Event: ${JSON.stringify(evt)}`);
                    }
                    break;
            }
        });
    }
    initializeWebSocket() {
        const that = this;
        const auth = `Basic ${Buffer.from(`${this.credentials.username}:${this.credentials.password}`).toString('base64')}`;
        this.logger.info(`Connecting to: ${this.wsprotocol}://${this.address}/rest/subscribe`);
        this.webSocket = new faye_websocket_1.default.Client(`${this.wsprotocol}://${this.address}/rest/subscribe`, ['ISYSUB'], {
            headers: {
                Origin: 'com.universal-devices.websockets.isy',
                Authorization: auth
            },
            ping: 10
        });
        this.lastActivity = new Date();
        this.webSocket
            .on('message', (event) => {
            that.handleWebSocketMessage(event);
        })
            .on('error', (err, response) => {
            that.logger.info(`Websocket subscription error: ${JSON.stringify(err.message)}`);
            /// throw new Error('Error calling ISY' + err);
        })
            .on('fail', (data, response) => {
            that.logger.info(`Websocket subscription failure: ${data}`);
            throw new Error('Failed calling ISY');
        })
            .on('abort', () => {
            that.logger.info('Websocket subscription aborted.');
            throw new Error('Call to ISY was aborted');
        })
            .on('timeout', (ms) => {
            that.logger.info(`Websocket subscription timed out after ${ms} milliseconds.`);
            throw new Error('Timeout contacting ISY');
        });
    }
    getDevice(address, parentsOnly = false) {
        let s = this.deviceList.get(address);
        if (!parentsOnly) {
            if (s === null) {
                s = this.deviceList[`${address.substr(0, address.length - 1)} 1`];
            }
        }
        else {
            while (s.parentAddress !== undefined &&
                s.parentAddress !== s.address &&
                s.parentAddress !== null) {
                s = this.deviceList[s.parentAddress];
            }
        }
        return s;
    }
    getScene(address) {
        return this.sceneList.get(address);
    }
    async sendISYCommand(path) {
        // const uriToUse = `${this.protocol}://${this.address}/rest/${path}`;
        this.logger.info(`Sending command...${path}`);
        return this.callISY(path);
    }
    async sendNodeCommand(node, command, parameters) {
        let uriToUse = `nodes/${node.address}/cmd/${command}`;
        if (parameters !== null && parameters !== undefined) {
            if (typeof (parameters) == 'object') {
                var q = parameters;
                for (const paramName of Object.getOwnPropertyNames(q)) {
                    uriToUse += `/${paramName}/${q[paramName]}`;
                }
                //uriToUse += `/${q[((p : Record<string,number|number>) => `${p[]}/${p.paramValue}` ).join('/')}`;
            }
            else if (typeof (parameters) == 'number' || typeof (parameters) == 'string') {
                uriToUse += `/${parameters}`;
            }
        }
        this.logger.info(`${node.name}: sending ${command} command: ${uriToUse}`);
        return this.callISY(uriToUse);
    }
    async sendGetVariable(id, type, handleResult) {
        const uriToUse = `${this.protocol}://${this.address}/rest/vars/get/${type}/${id}`;
        this.logger.info(`Sending ISY command...${uriToUse}`);
        return this.callISY(uriToUse).then((p) => handleResult(p.val, p.init));
    }
    async sendSetVariable(id, type, value, handleResult) {
        const uriToUse = `/rest/vars/set/${type}/${id}/${value}`;
        this.logger.info(`Sending ISY command...${uriToUse}`);
        return this.callISY(uriToUse);
    }
}
exports.ISY = ISY;
