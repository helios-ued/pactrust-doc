import { onMounted, onUnmounted, watch, type Ref } from "vue";
import {
  mountBlueFlutedGlass,
  unmountBlueFlutedGlass,
  type MotionRuntimeHandle,
} from "../motion-runtime";
import type { BlueFlutedGlassOptions } from "../BlueFlutedGlassEngine";

/** Vue 3 composable · 模板 `<div ref="host" />` */
export function useBlueFlutedGlass(
  host: Ref<HTMLElement | null>,
  options: Ref<BlueFlutedGlassOptions> | BlueFlutedGlassOptions = {},
) {
  let handle: MotionRuntimeHandle | null = null;

  const mountNow = () => {
    const el = host.value;
    if (!el) return;
    unmountBlueFlutedGlass(handle);
    const opts = "value" in options ? options.value : options;
    handle = mountBlueFlutedGlass(el, opts);
  };

  onMounted(() => {
    mountNow();
    if ("value" in options) {
      watch(options, mountNow, { deep: true });
    }
  });

  onUnmounted(() => {
    unmountBlueFlutedGlass(handle);
    handle = null;
  });
}
