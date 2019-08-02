import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Rect from 'zombiebox/zb/geometry/rect';
import IVideo from 'zombiebox/zb/device/interfaces/i-video';

export default class Device extends AbstractDevice {
  public init(): void;
  public createVideo(rect: Rect): IVideo;
  public getMAC(): string;
  public getIP(): string;
  public exit(): void;
  public setOSDOpacity(value: number): void;
  public getOSDOpacity(): number;
  public setOSDChromaKey(chromaKey: string): void;
  public getOSDChromaKey(): string | null;
  public removeOSDChromaKey(): void;
  public hasOSDOpacityFeature(): boolean;
  public hasOSDAlphaBlendingFeature(): boolean;
  public hasOSDChromaKeyFeature(): boolean;
  public isUHDSupported(): boolean;
  public getEnvironment(): object;
  public getLaunchParams(): object;
  public showAppsManager(): void;
  public static requestService(uri: string, method: string, parameters: object): Promise<object>;
  public static detect(): boolean;
}
