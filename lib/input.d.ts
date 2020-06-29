import AbstractInput from 'zombiebox/zb/device/abstract-input';
import Key from 'zombiebox/zb/device/input/key';

export default class Input extends AbstractInput {
	constructor();
	isPointingDeviceSupported(): boolean;
	enablePointingDevice(): void;
	disablePointingDevice(): void;
	protected _createKeysMap(): { [key: number]: Key };
	_listenForPointingState(): void;
}
