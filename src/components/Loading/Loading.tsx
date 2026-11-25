import { cn } from "@/lib/cn";
import "./loading.css";

export type LoadingIconType = "Round" | "Icon";
export type LoadingSize = "Small" | "Default" | "Large";

export type LoadingProps = {
  iconType?: LoadingIconType;
  size?: LoadingSize;
  text?: string;
  className?: string;
};

const SPINNER_PX: Record<LoadingSize, number> = {
  Small: 32,
  Default: 40,
  Large: 42,
};

/** Figma `1505:46934` · 区块加载 */
export function Loading({
  iconType = "Round",
  size = "Default",
  text = "loading",
  className,
}: LoadingProps) {
  const px = SPINNER_PX[size];
  return (
    <div className={cn("pt-loading", className)} role="status" aria-live="polite">
      <div className="pt-loading__inner">
        <div
          className={cn(
            "pt-loading__spinner",
            iconType === "Icon" && "pt-loading__spinner--icon",
          )}
          style={{ width: px, height: px }}
          aria-hidden
        />
        <span className="pt-loading__text">{text}</span>
      </div>
    </div>
  );
}
