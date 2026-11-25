import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import {
  mountBlueFlutedGlass,
  unmountBlueFlutedGlass,
  type MotionRuntimeHandle,
} from "./motion-runtime";
import type { BlueFlutedGlassOptions } from "./BlueFlutedGlassEngine";

export type BlueFlutedGlassProps = BlueFlutedGlassOptions & {
  className?: string;
  style?: CSSProperties;
};

/** Blue Fluted Glass Background · React */
export function BlueFlutedGlass({
  height,
  reducedMotion,
  brandLogo,
  className,
  style,
}: BlueFlutedGlassProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<MotionRuntimeHandle | null>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    handleRef.current = mountBlueFlutedGlass(el, {
      height,
      reducedMotion,
      brandLogo,
    });
    return () => {
      unmountBlueFlutedGlass(handleRef.current);
      handleRef.current = null;
    };
  }, [height, reducedMotion, brandLogo]);

  return (
    <div
      ref={hostRef}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: height ?? "100%",
        minHeight: 0,
        maxWidth: "100%",
        overflow: "hidden",
        ...style,
      }}
    />
  );
}
