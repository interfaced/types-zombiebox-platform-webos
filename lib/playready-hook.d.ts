import PlayReadyClient from 'zombiebox/zb/device/drm/playready-client';
import AbstractDrmHook from './abstract-drm-hook';

export default class PlayReadyHook extends AbstractDrmHook {
    constructor(client: PlayReadyClient);
}