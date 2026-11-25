import { Button } from "@/components/Button/Button";
import { EpIconByName } from "@/components/Icon/EpIconByName";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";
import { DESCRIPTIONS_COPY_ME, type DescriptionRow } from "./descriptionsData";
import "./descriptions.css";

/** Figma Description Item · `5910:8448` */
export type DescriptionsLayout = "Horizontal" | "Vertical";
export type DescriptionsSize = "Default" | "Large" | "Small";

export type DescriptionItemProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  layout?: DescriptionsLayout;
  size?: DescriptionsSize;
  border?: boolean;
  icon?: boolean;
  span?: 1 | 2;
  children?: ReactNode;
};

export function DescriptionItem({
  label,
  layout = "Horizontal",
  size = "Default",
  border = false,
  icon = false,
  span = 1,
  className,
  children,
  ...rest
}: DescriptionItemProps) {
  const horizontal = layout === "Horizontal";

  return (
    <div
      className={cn(
        "pt-desc-item",
        span === 2 && "pt-desc-item--span-2",
        size === "Large" && "pt-desc-item--size-large",
        size === "Small" && "pt-desc-item--size-small",
        (size === "Default" || !size) && "pt-desc-item--size-default",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "pt-desc-item__inner",
          horizontal ? "pt-desc-item__inner--horizontal" : "pt-desc-item__inner--vertical",
          border && "pt-desc-item__inner--border",
        )}
      >
        <div className="pt-desc-item__label">
          {icon ? (
            <span className="pt-desc-item__icon" aria-hidden>
              <EpIconByName name="ElementPlus" size={14} />
            </span>
          ) : null}
          <span className="pt-desc-item__label-text">{label}</span>
        </div>
        <div className="pt-desc-item__content">
          {typeof children === "string" ? (
            <span className="pt-desc-item__content-text">{children}</span>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}

export type DescriptionsProps = HTMLAttributes<HTMLDivElement> & {
  layout?: DescriptionsLayout;
  size?: DescriptionsSize;
  border?: boolean;
  icon?: boolean;
  title?: ReactNode;
  extra?: ReactNode;
  rows?: DescriptionRow[];
};

export function Descriptions({
  layout = "Horizontal",
  size = "Default",
  border = false,
  icon = false,
  title = "User Info",
  extra,
  rows = DESCRIPTIONS_COPY_ME,
  className,
  ...rest
}: DescriptionsProps) {
  const showHeader = icon;
  const headerExtra =
    extra ??
    (icon ? (
      <Button buttonType="Primary" size="Small" className="w-auto shrink-0">
        Operation
      </Button>
    ) : null);

  return (
    <div className={cn("pt-descriptions", border && "pt-descriptions--border", className)} {...rest}>
      {showHeader ? (
        <div className="pt-descriptions__header">
          <h3 className="pt-descriptions__title">{title}</h3>
          {headerExtra ? <div className="pt-descriptions__extra">{headerExtra}</div> : null}
        </div>
      ) : null}
      <div className="pt-descriptions__body">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="pt-descriptions__row">
            {row.items.map((cell, cellIndex) => (
              <DescriptionItem
                key={`${rowIndex}-${cellIndex}`}
                label={cell.label}
                layout={layout}
                size={size}
                border={border}
                icon={icon}
                span={cell.span}
              >
                {cell.content ?? "Element plus"}
              </DescriptionItem>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
