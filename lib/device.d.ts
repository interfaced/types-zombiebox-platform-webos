import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Rect from 'zombiebox/zb/geometry/rect';
import StatefulHtml5Video from 'zombiebox/zb/device/common/stateful-html5-video';
import Video from './video';

export default class Device extends AbstractDevice {
  init(): void;
  createVideo(rect: Rect): Video;
  createStatefulVideo(rect: Rect): StatefulHtml5Video;
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
  getEnvironment(): object;
  getLaunchParams(): object;
  showAppsManager(): void;
  static requestService(uri: string, method: string, parameters: object): Promise<object>;
  static detect(): boolean;
}
