import VerimatrixClient from 'zombiebox/zb/device/drm/verimatrix-client';
import AbstractDrmHook from './abstract-drm-hook';

export default class VerimatrixHook extends AbstractDrmHook {
    constructor(client: VerimatrixClient);
}