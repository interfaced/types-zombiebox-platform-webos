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
}