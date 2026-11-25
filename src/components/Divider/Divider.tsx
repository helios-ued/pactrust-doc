import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./divider.css";

/** Figma Style（`3045:70832`） */
export type DividerLineStyle = "Solid" | "Dashed" | "Point";

/** Figma Layout（横排） */
export type DividerContentLayout = "No text" | "Left" | "Center" | "Right";

export type DividerProps = {
  vertical?: boolean;
  lineStyle?: DividerLineStyle;
  contentLayout?: DividerContentLayout;
  children?: ReactNode;
  className?: string;
};

function styleMod(lineStyle: DividerLineStyle): string {
  if (lineStyle === "Dashed") return "pt-divider--dashed";
  if (lineStyle === "Point") return "pt-divider--point";
  return "pt-divider--solid";
}

function HorizontalLine({ className }: { className?: string }) {
  return <span className={cn("pt-divider__line", className)} aria-hidden />;
}

export function Divider({
  vertical = false,
  lineStyle = "Solid",
  contentLayout = "No text",
  children = "Rabindranath Tagore",
  className,
}: DividerProps) {
  const mod = styleMod(lineStyle);

  if (vertical) {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn("pt-divider pt-divider--vertical", mod, className)}
      >
        <span className="pt-divider__v-line" aria-hidden />
      </div>
    );
  }

  const hasText = contentLayout !== "No text";
  const layoutMod =
    contentLayout === "Left"
      ? "pt-divider--left"
      : contentLayout === "Center"
        ? "pt-divider--center"
        : contentLayout === "Right"
          ? "pt-divider--right"
          : "pt-divider--no-text";

  if (!hasText) {
    return (
      <div role="separator" className={cn("pt-divider pt-divider--horizontal", mod, layoutMod, className)}>
        <HorizontalLine className="pt-divider__line--full" />
      </div>
    );
  }

  return (
    <div role="separator" className={cn("pt-divider pt-divider--horizontal", mod, layoutMod, className)}>
      {contentLayout === "Center" || contentLayout === "Right" ? (
        <HorizontalLine className={contentLayout === "Right" ? undefined : "pt-divider__line--grow"} />
      ) : null}
      {contentLayout === "Left" ? <HorizontalLine className="pt-divider__line--cap" /> : null}
      <span className="pt-divider__text">{children}</span>
      {contentLayout === "Center" || contentLayout === "Left" ? (
        <HorizontalLine className={contentLayout === "Left" ? "pt-divider__line--grow" : undefined} />
      ) : null}
      {contentLayout === "Right" ? <HorizontalLine className="pt-divider__line--cap" /> : null}
    </div>
  );
}
