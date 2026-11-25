import { cn } from "@/lib/cn";
import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  ButtonGroupItemContext,
  type ButtonGroupLayout,
} from "./buttonGroupContext";

export type ButtonGroupProps = {
  children: ReactNode;
  className?: string;
  /** Figma: gap 4px separate buttons vs fused attached */
  layout?: ButtonGroupLayout;
  /** Figma Background — light track + ghost default buttons (segmented only) */
  background?: boolean;
};

function countItems(children: ReactNode) {
  return Children.toArray(children).filter(isValidElement).length;
}

export function ButtonGroup({
  children,
  className,
  layout = "segmented",
  background = false,
}: ButtonGroupProps) {
  const total = countItems(children);
  let index = 0;

  const wrapped = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const ctx = { layout, background, index, total };
    index += 1;
    return (
      <ButtonGroupItemContext.Provider key={index} value={ctx}>
        {child as ReactElement}
      </ButtonGroupItemContext.Provider>
    );
  });

  return (
    <div
      className={cn(
        "inline-flex items-center",
        layout === "segmented" && [
          "gap-[var(--pt-space-4)] rounded-[6px]",
          background && "bg-[color:var(--ds-bg-muted)] p-[2px]",
        ],
        layout === "attached" &&
          "isolate overflow-hidden rounded-[var(--el-border-radius-base)] shadow-none",
        className,
      )}
      role="group"
    >
      {wrapped}
    </div>
  );
}
