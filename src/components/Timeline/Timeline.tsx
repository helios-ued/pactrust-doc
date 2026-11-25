import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import "./timeline.css";

/** Figma Component/Timeline Item Slots — Type */
export type TimelineItemType =
  | "Default"
  | "Primary"
  | "Success"
  | "Warning"
  | "Error"
  | "Info";

export type TimelineItemSize = "Default" | "Large";

/** Figma Timeline-Cell — Type */
export type TimelineCellType = "Vertical" | "Horizontal" | "Card";

export type TimelineItemData = {
  title?: ReactNode;
  timestamp?: ReactNode;
  /** Card 模式卡片内说明 */
  description?: ReactNode;
  itemType?: TimelineItemType;
};

export type TimelineProps = {
  cellType?: TimelineCellType;
  size?: TimelineItemSize;
  hollow?: boolean;
  /** 高亮节点索引（Copy me 首项 Primary） */
  activeIndex?: number;
  activeType?: TimelineItemType;
  items?: TimelineItemData[];
  className?: string;
};

const DEFAULT_ITEMS: TimelineItemData[] = [
  { title: "Event start", timestamp: "2022-07-20 20:00" },
  { title: "Event start", timestamp: "2022-07-20 20:00" },
  { title: "Event start", timestamp: "2022-07-20 20:00" },
];

const CARD_ITEMS: TimelineItemData[] = [
  {
    title: "Event start",
    timestamp: "2022-07-20 20:00",
    description: "Tom committed 2022-07-20 20:00",
  },
  {
    title: "Event start",
    timestamp: "2022-07-20 20:00",
    description: "Tom committed 2022-07-20 20:00",
  },
  {
    title: "Event start",
    timestamp: "2022-07-20 20:00",
    description: "Tom committed 2022-07-20 20:00",
  },
];

const typeClass: Record<TimelineItemType, string> = {
  Default: "pt-timeline__dot--default",
  Primary: "pt-timeline__dot--primary",
  Success: "pt-timeline__dot--success",
  Warning: "pt-timeline__dot--warning",
  Error: "pt-timeline__dot--error",
  Info: "pt-timeline__dot--info",
};

function TimelineDot({
  itemType,
  size,
  hollow,
}: {
  itemType: TimelineItemType;
  size: TimelineItemSize;
  hollow: boolean;
}) {
  return (
    <span
      className={cn(
        "pt-timeline__dot",
        size === "Large" ? "pt-timeline__dot--size-large" : "pt-timeline__dot--size-default",
        typeClass[itemType],
        hollow && "pt-timeline__dot--hollow",
      )}
      aria-hidden
    />
  );
}

function TimelineItemBody({
  cellType,
  item,
}: {
  cellType: TimelineCellType;
  item: TimelineItemData;
}) {
  const title = item.title ?? "Event start";
  const timestamp = item.timestamp ?? "2022-07-20 20:00";

  if (cellType === "Card") {
    return (
      <div className="pt-timeline__card-wrap">
        <span className="pt-timeline__timestamp">{timestamp}</span>
        <div className="pt-timeline__card">
          <span className="pt-timeline__title">{title}</span>
          <span className="pt-timeline__card-desc">
            {item.description ?? `Tom committed ${timestamp}`}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pt-timeline__text",
        cellType === "Horizontal" && "pt-timeline__text--horizontal",
      )}
    >
      <span className="pt-timeline__title">{title}</span>
      <span className="pt-timeline__timestamp">{timestamp}</span>
    </div>
  );
}

export function Timeline({
  cellType = "Vertical",
  size = "Default",
  hollow = false,
  activeIndex = 0,
  activeType = "Primary",
  items,
  className,
}: TimelineProps) {
  const list =
    items ?? (cellType === "Card" ? CARD_ITEMS : DEFAULT_ITEMS);
  const isHorizontalLayout = cellType === "Horizontal";

  return (
    <div
      className={cn(
        "pt-timeline",
        isHorizontalLayout && "pt-timeline--horizontal",
        className,
      )}
      role="list"
    >
      {list.map((item, index) => {
        const isLast = index === list.length - 1;
        const itemType =
          item.itemType ??
          (index === activeIndex ? activeType : "Default");

        return (
          <div key={index} className="pt-timeline__item" role="listitem">
            <div className="pt-timeline__track">
              <TimelineDot itemType={itemType} size={size} hollow={hollow} />
              {!isLast ? <span className="pt-timeline__line" aria-hidden /> : null}
            </div>
            <div className="pt-timeline__body">
              <TimelineItemBody cellType={cellType} item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
