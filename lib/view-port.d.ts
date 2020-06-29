import HTML5ViewPort from 'zombiebox/zb/device/common/HTML5-view-port';
import { AspectRatio } from 'zombiebox/zb/device/aspect-ratio/aspect-ratio';

export default class ViewPort extends HTML5ViewPort {
	isAspectRatioSupported(ratio: AspectRatio): boolean;
	updateViewPort(): void;
	protected _forceRedraw(element: HTMLElement): void;
}
