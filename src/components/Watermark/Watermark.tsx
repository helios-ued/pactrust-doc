import { EpIconByName } from "@/components/Icon/EpIconByName";
import { PacsTrustLogoIcon } from "@/components/brand/PacsTrustLogoIcon";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./watermark.css";

export type WatermarkType = "Text" | "Icon";

export type WatermarkProps = {
  watermarkType?: WatermarkType;
  content?: ReactNode;
  className?: string;
  children?: ReactNode;
};

const DEFAULT_TEXT = "Element Plus";

export function Watermark({
  watermarkType = "Text",
  content,
  className,
  children,
}: WatermarkProps) {
  const label = content ?? DEFAULT_TEXT;
  return (
    <div className={cn("pt-watermark", className)}>
      <div
        className={cn(
          "pt-watermark__layer",
          watermarkType === "Icon" && "pt-watermark__layer--icon",
        )}
        aria-hidden
      >
        {watermarkType === "Text"
          ? Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="pt-watermark__cell">
                <span className="pt-watermark__label">{label}</span>
              </span>
            ))
          : Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="pt-watermark__cell pt-watermark__cell--icon">
                {i % 3 === 0 ? (
                  <PacsTrustLogoIcon className="h-5 w-5 opacity-20" />
                ) : (
                  <EpIconByName name="ElementPlus" size={20} className="opacity-20" />
                )}
              </span>
            ))}
      </div>
      <div className="pt-watermark__content">{children ?? <span className="sr-only">Content</span>}</div>
    </div>
  );
}
