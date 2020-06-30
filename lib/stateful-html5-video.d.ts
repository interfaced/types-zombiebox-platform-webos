import BaseStatefulHtml5Video from 'zombiebox/zb/device/common/stateful-html5-video';
import Rect from 'zombiebox/zb/geometry/rect';
import { Type as DRMType } from 'zombiebox/zb/device/drm/drm';
import IDRMClient from 'zombiebox/zb/device/interfaces/i-drm-client';
import Viewport from "./view-port";
import AbstractDrmHook from './abstract-drm-hook';
import StatefulHtml5Video, {StartPositionState} from 'zombiebox/zb/device/common/stateful-html5-video';
import {ResolutionInfoItem} from 'zombiebox/zb/device/resolutions';

export default class StatefulHtml5Video extends BaseStatefulHtml5Video {
	constructor(panelResolution: ResolutionInfoItem, appResolution: ResolutionInfoItem);
	prepare(url: string, options: { [key: string]: any }): void;
	private _drmHook: AbstractDrmHook | null;
	protected _onDRMErrorBound: (event: any, error: any) => void;
	protected _sourceElement: HTMLSourceElement;
	protected _requestedStartPosition: StartPositionState;
	protected _startPositionState: StartPositionState;
	protected _init(): void;
	protected _viewport: Viewport;
	attachDRM(client: IDRMClient): void;
	detachDRM(type: DRMType): Promise<any>;
	destroy(): void;
	static isDRMSupported(type: DRMType): boolean;
}
