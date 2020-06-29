import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Rect from 'zombiebox/zb/geometry/rect';
import StatefulHtml5Video from './stateful-html5-video';
import LocalStorage from 'zombiebox/zb/device/common/local-storage';
import Video from './video';
import Info from "./info";
import Input from "./input";

export default class Device extends AbstractDevice {
	init(): void;
	info: Info;
	storage: LocalStorage;
	input: Input;
	createVideo(rect: Rect): Video;
	createStatefulVideo(): StatefulHtml5Video;
	getMAC(): string;
	getIP(): string;
	exit(): void;
	setOSDOpacity(value: number): void;
	getOSDOpacity(): number;
	setOSDChromaKey(chromaKey: string): void;
	getOSDChromaKey(): string | null;
	removeOSDChromaKey(): void;
	hasOSDOpacityFeature(): boolean;
	hasOSDAlphaBlendingFeature(): boolean;
	hasOSDChromaKeyFeature(): boolean;
	isUHDSupported(): boolean;
	isUHD8KSupported(): boolean;
	getEnvironment(): object;
	getLaunchParams(): object;
	showAppsManager(): void;
	static requestService(uri: string, method: string, parameters: object): Promise<object>;
	static detect(): boolean;
}
