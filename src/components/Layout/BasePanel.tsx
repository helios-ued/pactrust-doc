import { cn } from "@/lib/cn";
import type { CSSProperties, ReactNode } from "react";
import "./base-panel.css";

/** Figma `BasePanel` · `9146:3168` */
export type BasePanelLayout = "Single" | "Vertical" | "Horizontal";
export type BasePanelPadding = "Default" | "None";

export type BasePanelProps = {
  layout?: BasePanelLayout;
  padding?: BasePanelPadding;
  /** Single · Content-Slot；多槽时为主内容区 */
  children?: ReactNode;
  contentSlot?: ReactNode;
  /** Vertical / Horizontal · Actions */
  actionsSlot?: ReactNode;
  /** Vertical / Horizontal · Footer */
  footerSlot?: ReactNode;
  /** 覆盖 Single · Content-Slot 内边距（Layout 帧） */
  slotPadding?: string;
  className?: string;
  placeholder?: boolean;
  placeholderText?: string;
};

function SlotPlaceholder({ text }: { text: string }) {
  return (
    <div className="pt-base-panel__placeholder-wrap">
      <p className="pt-base-panel__placeholder">{text}</p>
    </div>
  );
}

function PanelSlot({
  name,
  padded,
  paddingNoneSingle,
  children,
  placeholder,
  placeholderText,
  style,
}: {
  name: "content" | "actions" | "footer";
  padded?: boolean;
  paddingNoneSingle?: boolean;
  children?: ReactNode;
  placeholder?: boolean;
  placeholderText: string;
  style?: CSSProperties;
}) {
  const showPlaceholder = placeholder && children == null;
  return (
    <div
      className={cn(
        "pt-base-panel__slot",
        padded && "pt-base-panel__slot--pad-default",
        paddingNoneSingle && "pt-base-panel__slot--single-none",
      )}
      data-slot={name}
      style={style}
    >
      {showPlaceholder ? <SlotPlaceholder text={placeholderText} /> : children}
    </div>
  );
}

export function BasePanel({
  layout = "Single",
  padding = "Default",
  children,
  contentSlot,
  actionsSlot,
  footerSlot,
  slotPadding,
  className,
  placeholder,
  placeholderText = "内容区域",
}: BasePanelProps) {
  const content = children ?? contentSlot;
  const isSingle = layout === "Single";
  const isHorizontal = layout === "Horizontal";

  const contentStyle =
    isSingle && slotPadding ? ({ padding: slotPadding } as CSSProperties) : undefined;

  if (isSingle) {
    const slotPadded = padding === "Default" && !slotPadding;
    const paddingNoneSingle = padding === "None" && !slotPadding;
    return (
      <section
        className={cn(
          "pt-base-panel",
          "pt-base-panel--single",
          padding === "Default" && "pt-base-panel--pad-default",
          padding === "None" && "pt-base-panel--pad-none",
          className,
        )}
        data-base-panel-layout={layout}
        data-base-panel-padding={padding}
        data-figma-node="9146:3168"
      >
        <PanelSlot
          name="content"
          padded={slotPadded}
          paddingNoneSingle={paddingNoneSingle}
          placeholder={placeholder}
          placeholderText={placeholderText}
          style={contentStyle}
        >
          {content}
        </PanelSlot>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "pt-base-panel",
        isHorizontal ? "pt-base-panel--horizontal" : "pt-base-panel--vertical",
        padding === "Default" && "pt-base-panel--pad-default",
        padding === "None" && "pt-base-panel--pad-none",
        className,
      )}
      data-base-panel-layout={layout}
      data-base-panel-padding={padding}
      data-figma-node="9146:3168"
    >
      <PanelSlot name="content" placeholder={placeholder} placeholderText={placeholderText}>
        {content}
      </PanelSlot>
      <PanelSlot name="actions" placeholder={placeholder} placeholderText={placeholderText}>
        {actionsSlot}
      </PanelSlot>
      <PanelSlot name="footer" placeholder={placeholder} placeholderText={placeholderText}>
        {footerSlot}
      </PanelSlot>
    </section>
  );
}