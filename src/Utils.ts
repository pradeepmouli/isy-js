import { get } from 'restler-base';
import axios, { AxiosRequestConfig } from 'axios';


import * as log4js from '@log4js-node/log4js-api';
import { Logger}from 'winston'

import { Categories } from './Categories';
import { EventEmitter } from 'events';
import { Axios } from 'axios';



//import { get } from 'http';

export function byteToPct(value) {
	return Math.round((value * 100) / 255);
}

export function pctToByte(value) {
	return Math.round((value * 255) / 100);
}

export function byteToDegree(value) {
	return Math.fround(value / 2);
}

let lastrequest = Promise.resolve();

export async function getAsync(url: string, options: AxiosRequestConfig): Promise<any> {
	
	const p = new Promise<any>((resolve, reject) => {
	
	 console.log('Calling: ' + url);
		
		get(url, options)
			.on('complete', (result: any) => {
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

	try
	{
		await lastrequest;
	}
	finally
	{
		return p;
	}
}

export enum Family {
	Insteon = 1,
	UPB = 7
}

export interface LoggerLike extends Partial<log4js.Logger> {
	prefix?: string;
	(msg: any): void;
	//default(msg: any): void;

}



export interface PropertyChangedEventEmitter extends EventEmitter
{
	on(event:'PropertyChanged', listener: (propertyName : string, newValue: any, oldValue: any, formattedValue: string) => void) : this;

}



export function parseTypeCode(typeCode: string) : {category: Categories, deviceCode: number, firmwareVersion: number, minorVersion: number }
{
	try {
		const s = typeCode.split('.');

		let output = { category: Number(s[0]), deviceCode: Number(s[1]), firmwareVersion: Number(Number(s[2]).toString(16)), minorVersion: Number(Number(s[3]).toString(16)) };

		return output;
	} catch (err) {
		return null;
	}
}

export function getCategory(device: { type: string; }) {
	try {
		const s = device.type.split('.');
		return Number(s[0]);
	} catch (err) {
		return Categories.Unknown;
	}
}
export function getSubcategory(device: { type: string; }) {
	try {
		const s = device.type.split('.');
		return Number(s[1]);
	} catch (err) {
		return Categories.Unknown;
	}
}
