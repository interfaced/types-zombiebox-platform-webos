import EventPublisher from 'zombiebox/zb/events/event-publisher';
import { Type } from 'zombiebox/zb/device/drm/drm';
import IDrmClient from 'zombiebox/zb/device/interfaces/i-drm-client';
import MediaOption from './media-option';

export default abstract class AbstractDrmHook extends EventPublisher {
	type: Type | string;
	EVENT_ERROR: string;
	constructor(client: IDrmClient);
	prepare(): Promise<any>;
	destroy(): Promise<any>;
	getMediaOption(): MediaOption;
	protected _webosClientDrmType: string;
	protected _mediaOptionDrmType: string;
	protected _drmSystemId: string;
	protected _drmMessageType: string;
	protected _client: any;
	protected _errorSubscription: any;
	protected _drmMessageId: string | null;
	protected _initPromise: Promise<any>;
	protected _webosClientId: string | null;
	protected _init(): Promise<any>;
	protected _onClientError: (event: any, error: any) => any;
	protected _assertNotDestroyed(): void;
	protected _getMessage(): string;
	protected _lunaRequest(url: string, method: string, parameters: any, callback: (arg0: any) => ): unknown;
	protected _lunaFetch(url: string, method: string, parameters: any): Promise<any>;
	protected _unloadPreviousClient(): Promise<any>;
	protected _unloadClient(clientId: string | null): Promise<any>;
	protected _onLunaError(data: any): void;
}
