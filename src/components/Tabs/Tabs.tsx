import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./tabs.css";

/** Figma Tabs-top · Tabs-card · Border */
export type TabsVisualType = "Default" | "Card" | "Border-card";

/** Figma Tabs-vertical Layout */
export type TabsPosition = "Top" | "Left" | "Right";

/** Figma Tabs-top Align */
export type TabsAlign = "Left" | "Center" | "Right";

/** Figma Tabs/item State */
export type TabItemState = "Default" | "Hover" | "Selected";

/** Figma Tabs/item · card-item Layout */
export type TabItemLayout = "Default" | "Left" | "Center" | "Right";

export const COPY_ME_TAB_LABELS = ["User", "Config", "Role", "Task"] as const;

export type TabsProps = {
  tabType?: TabsVisualType;
  position?: TabsPosition;
  align?: TabsAlign;
  /** 1-based · Copy me 默认第 2 项 Config */
  active?: 1 | 2 | 3 | 4;
  className?: string;
  labels?: readonly string[];
};

function tabTypeClass(tabType: TabsVisualType): string {
  if (tabType === "Card") return "pt-tabs--card";
  if (tabType === "Border-card") return "pt-tabs--border-card";
  return "pt-tabs--default";
}

function positionClass(position: TabsPosition): string {
  if (position === "Left") return "pt-tabs--left";
  if (position === "Right") return "pt-tabs--right";
  return "pt-tabs--top";
}

function alignClass(align: TabsAlign): string | false {
  if (align === "Center") return "pt-tabs--align-center";
  if (align === "Right") return "pt-tabs--align-right";
  return "pt-tabs--align-left";
}

export function Tabs({
  tabType = "Default",
  position = "Top",
  align = "Left",
  active = 2,
  className,
  labels = COPY_ME_TAB_LABELS,
}: TabsProps) {
  const resolvedPosition =
    tabType !== "Default" && position !== "Top" ? "Top" : position;

  return (
    <div
      className={cn(
        "pt-tabs",
        tabTypeClass(tabType),
        positionClass(resolvedPosition),
        resolvedPosition === "Top" && alignClass(align),
        className,
      )}
      aria-label="Tabs"
    >
      <ul className="pt-tabs__nav" role="tablist">
        {labels.map((label, index) => (
          <li key={label} role="presentation">
            <TabItem
              tabType={tabType}
              position={resolvedPosition}
              label={label}
              selected={index + 1 === active}
              layout="Default"
              itemIndex={index}
              activeIndex={active - 1}
              itemCount={labels.length}
            />
          </li>
        ))}
        {tabType === "Border-card" && resolvedPosition === "Top" ? (
          <li className="pt-tabs__nav-tail" aria-hidden />
        ) : null}
      </ul>
      {resolvedPosition !== "Top" ? (
        <div className="pt-tabs__panel" aria-hidden />
      ) : tabType === "Border-card" ? (
        <div className="pt-tabs__panel pt-tabs__panel--border-cap" aria-hidden />
      ) : null}
    </div>
  );
}

export type TabItemProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  tabType?: TabsVisualType;
  position?: TabsPosition;
  state?: TabItemState;
  selected?: boolean;
  layout?: TabItemLayout;
  label?: ReactNode;
  showIcon?: boolean;
  icon?: ReactNode;
  itemIndex?: number;
  activeIndex?: number;
  itemCount?: number;
};

function cardItemSegmentClass(
  itemIndex: number | undefined,
  itemCount: number | undefined,
): string | false {
  if (itemIndex === undefined || itemCount === undefined) return false;
  if (itemIndex === 0) return "pt-tabs__item--card-first";
  if (itemIndex === itemCount - 1) return "pt-tabs__item--card-last";
  return "pt-tabs__item--card-mid";
}

function borderCardItemClass(
  itemIndex: number | undefined,
  activeIndex: number | undefined,
  itemCount: number | undefined,
): string | false {
  if (itemIndex === undefined || activeIndex === undefined) return false;
  if (itemIndex === activeIndex) {
    if (itemIndex === 0) return "pt-tabs__item--bc-selected pt-tabs__item--bc-selected-first";
    if (itemCount !== undefined && itemIndex === itemCount - 1) {
      return "pt-tabs__item--bc-selected pt-tabs__item--bc-selected-last";
    }
    return "pt-tabs__item--bc-selected";
  }
  if (itemIndex === 0) return "pt-tabs__item--bc-first";
  return "pt-tabs__item--bc-segment";
}

/** Figma Tabs/item · card-item · border-card-item 单条目预览 */
export function TabItem({
  tabType = "Default",
  position = "Top",
  state,
  selected = false,
  layout = "Default",
  label = "Tab",
  showIcon = false,
  icon,
  itemIndex,
  activeIndex,
  itemCount,
  className,
  ...rest
}: TabItemProps) {
  const selectedVisual = state ? state === "Selected" : selected;
  const hoverVisual = state === "Hover";

  const layoutMod =
    layout === "Left"
      ? "pt-tabs__item--layout-left"
      : layout === "Right"
        ? "pt-tabs__item--layout-right"
        : layout === "Center"
          ? "pt-tabs__item--layout-center"
          : false;

  const iconSlot =
    showIcon && icon ? <span className="pt-tabs__icon" aria-hidden>{icon}</span> : null;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selectedVisual}
      className={cn(
        "pt-tabs__item",
        layoutMod,
        selectedVisual && "pt-tabs__item--selected",
        hoverVisual && "pt-tabs__item--hover",
        tabType === "Card" && cardItemSegmentClass(itemIndex, itemCount),
        tabType === "Border-card" && borderCardItemClass(itemIndex, activeIndex, itemCount),
        className,
      )}
      data-pt-tab-type={tabType}
      data-pt-tab-position={position}
      {...rest}
    >
      {iconSlot}
      <span className="pt-tabs__label">{label}</span>
    </button>
  );
}

export type TabItemPreviewProps = Omit<TabItemProps, "selected"> & {
  state?: TabItemState;
};

export function TabItemPreview(props: TabItemPreviewProps) {
  const { tabType = "Default", position = "Top", state = "Default", className, ...rest } = props;
  return (
    <div
      className={cn(
        "pt-tabs",
        tabTypeClass(tabType),
        positionClass(position),
        "pt-tabs__item-preview-wrap",
      )}
    >
      <TabItem
        {...rest}
        tabType={tabType}
        position={position}
        state={state}
        selected={state === "Selected"}
        className={cn("pt-tabs__item-preview", className)}
      />
    </div>
  );
}
