"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubcategory = exports.getCategory = exports.parseTypeCode = exports.Family = exports.getAsync = exports.byteToDegree = exports.pctToByte = exports.byteToPct = void 0;
const restler_base_1 = require("restler-base");
const Categories_1 = require("./Categories");
//import { get } from 'http';
function byteToPct(value) {
    return Math.round((value * 100) / 255);
}
exports.byteToPct = byteToPct;
function pctToByte(value) {
    return Math.round((value * 255) / 100);
}
exports.pctToByte = pctToByte;
function byteToDegree(value) {
    return Math.fround(value / 2);
}
exports.byteToDegree = byteToDegree;
let lastrequest = Promise.resolve();
async function getAsync(url, options) {
    const p = new Promise((resolve, reject) => {
        console.log('Calling: ' + url);
        (0, restler_base_1.get)(url, options)
            .on('complete', (result) => {
            resolve(result);
        })
            .on('error', (err, response) => {
            reject(err);
        })
            .on('fail', (data, response) => {
            reject(data);
        })
            .on('abort', () => {
            reject();
        })
            .on('timeout', (ms) => {
            reject(ms);
        });
    });
    try {
        await lastrequest;
    }
    finally {
        return p;
    }
}
exports.getAsync = getAsync;
var Family;
(function (Family) {
    Family[Family["Insteon"] = 1] = "Insteon";
    Family[Family["UPB"] = 7] = "UPB";
})(Family || (exports.Family = Family = {}));
function parseTypeCode(typeCode) {
    try {
        const s = typeCode.split('.');
        let output = { category: Number(s[0]), deviceCode: Number(s[1]), firmwareVersion: Number(Number(s[2]).toString(16)), minorVersion: Number(Number(s[3]).toString(16)) };
        return output;
    }
    catch (err) {
        return null;
    }
}
exports.parseTypeCode = parseTypeCode;
function getCategory(device) {
    try {
        const s = device.type.split('.');
        return Number(s[0]);
    }
    catch (err) {
        return Categories_1.Categories.Unknown;
    }
}
exports.getCategory = getCategory;
function getSubcategory(device) {
    try {
        const s = device.type.split('.');
        return Number(s[1]);
    }
    catch (err) {
        return Categories_1.Categories.Unknown;
    }
}
exports.getSubcategory = getSubcategory;
