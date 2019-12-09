export const serialize: (mediaOption: MediaOption) => string;
export const merge: (target: Object, source: Object) => Object;

type MediaOption = {
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
}

export default MediaOption;