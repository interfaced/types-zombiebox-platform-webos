import AbstractInfo from 'zombiebox/zb/device/abstract-info';
import { Resolution } from 'zombiebox/zb/device/resolutions';

export default class Info extends AbstractInfo {
	constructor(requestService: ServiceRequester);
	protected _requestService: ServiceRequester;
	protected _systemInformation: SystemInformation;
	type(): string;
	manufacturer(): string;
	serialNumber(): void;
	model(): string;
	version(): string;
	softwareVersion(): string;
	hardwareVersion(): string;
	getPanelResolution(): Resolution;
	getOSDResolution(): Resolution;
	init(): Promise<any>;
	getMajorVersionNumber(): number;
	getSystemInformation(): SystemInformation;
	protected _getLocale(): string;
}

export type SystemInformation = {
	udid: (string | undefined);
	firmwareVersion: (string | undefined);
	modelName: (string | undefined);
	sdkVersion: (string | undefined);
	boardType: (string | undefined);
	UHD: (boolean | undefined);
	locale: (string | undefined);
	ip: (string | undefined);
};

export type ServiceRequester = (arg0: string, arg1: string, arg2: any) => Promise<any>;
