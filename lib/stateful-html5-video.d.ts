import BaseStatefulHtml5Video from 'zombiebox/zb/device/common/stateful-html5-video';
import Rect from 'zombiebox/zb/geometry/rect';
import { Type as DRMType } from 'zombiebox/zb/device/drm/drm';
import IDRMClient from 'zombiebox/zb/device/interfaces/i-drm-client';

export default class StatefulHtml5Video extends BaseStatefulHtml5Video {
    constructor(rect: Rect);
    prepare(url: string, options: { [key: string]: any }): void;
    attachDRM(client: IDRMClient): void;
    detachDRM(type: DRMType): void;
    destroy(): void;
    static isDRMSupported(type: DRMType): boolean;
}