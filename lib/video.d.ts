import HTML5Video from 'zombiebox/zb/device/common/HTML5-video';
import Rect from 'zombiebox/zb/geometry/rect';
import IViewPort from 'zombiebox/zb/device/interfaces/i-view-port';

export default class Video extends HTML5Video {
  protected _mimeType: string | null;
  protected _mediaOption: MediaOption;
  constructor(rect: Rect);
  play(url: string, startFrom?: number): void;
  setMimeType(mimeType?: string): void;
  setMediaOption(mediaOption: MediaOption): void;
  protected _createVideoObject(): HTMLVideoElement;
  protected _createViewPort(containerRect: Rect): IViewPort;
  protected _initEvents(): void;
  protected _replaceEventListener(event: string, listener: () => void): void;
  protected _applyTypeAttribute(mediaOption: MediaOption): void;
  protected _deepAssign(target: object, source: object): object;
  static createStartTimeMediaOption(startTime: number): MediaOption;
  static serializeMediaOption(mediaOption: MediaOption): string;
}

export type MediaOption = {
  mediaTransportType?: string;
  option?: {
    mediaFormat?: {
      type?: string;
    };
    drm?: {
      type?: string;
      clientId?: string;
      widevine?: {
        separatedStream?: boolean;
      };
    };
    transmission?: {
      playTime?: {
        start?: number;
      };
    };
    adaptiveStreaming?: {
      audioOnly?: boolean;
      apativeResolution?: boolean;
      seamlessPlay?: boolean;
      maxWidth?: number;
      maxHeight?: number;
      bps?: {
        start?: number;
      };
    };
    mode3d?: string;
  };
};
