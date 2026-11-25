import {
  mountBlueFlutedGlass,
  unmountBlueFlutedGlass,
  type MotionRuntimeHandle,
} from "../motion-runtime";
import type { BlueFlutedGlassOptions } from "../BlueFlutedGlassEngine";

/** Vanilla：挂载到已有 DOM 节点 */
export function mount(
  host: HTMLElement,
  options?: BlueFlutedGlassOptions,
): MotionRuntimeHandle {
  return mountBlueFlutedGlass(host, options);
}

export function unmount(handle: MotionRuntimeHandle | null): void {
  unmountBlueFlutedGlass(handle);
}
