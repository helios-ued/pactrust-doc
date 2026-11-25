import { cn } from "@/lib/cn";
import type { ButtonType } from "./Button";
import type { ButtonGroupItemContextValue } from "./buttonGroupContext";

/** Figma default button height in groups: 32px */
export const groupButtonSize =
  "!h-8 !min-h-8 !max-h-10 !w-auto shrink-0 !px-[var(--pt-spacing-xl)] !py-[var(--pt-space-4)]";

export const groupFocusClass =
  "focus-visible:!outline-none focus-visible:!ring-2 focus-visible:!ring-inset focus-visible:!ring-[color:var(--el-color-primary-light-5)]";

const fillMap: Record<ButtonType, string> = {
  Default: "bg-el-fill-blank text-el-text-primary",
  Primary: "bg-el-primary text-el-text-write",
  Success: "bg-[color:var(--el-color-success)] text-el-text-write",
  Warning: "bg-[color:var(--el-color-warning)] text-el-text-write",
  Danger: "bg-el-danger text-el-text-write",
  Info: "bg-el-text-placeholder text-el-text-write",
};

/** Attached 组内：无独立外描边，仅内部分隔（Figma border-r primary-5） */
export function attachedButtonFillClasses(
  group: ButtonGroupItemContextValue,
  buttonType: ButtonType,
  plain: boolean,
): string {
  const { index, total } = group;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const isOnly = total === 1;

  const radius = isOnly
    ? "rounded-[var(--el-border-radius-base)]"
    : cn(
        isFirst && "rounded-l-[var(--el-border-radius-base)] rounded-r-none",
        isLast && "rounded-r-[var(--el-border-radius-base)] rounded-l-none",
        !isFirst && !isLast && "rounded-none",
      );

  if (plain) {
    return cn(
      radius,
      "border border-el-border bg-el-fill-blank",
      !isFirst && "!border-l-0",
      !isLast && "!border-r-0",
    );
  }

  const filled = buttonType !== "Default";
  if (filled) {
    return cn(
      radius,
      fillMap[buttonType],
      "hover:opacity-90",
      "!border-0 !border-solid",
      !isLast &&
        cn(
          buttonType === "Primary" &&
            "!border-r !border-[color:var(--el-color-primary-light-5)]",
          buttonType === "Danger" &&
            "!border-r !border-[color:color-mix(in_srgb,var(--el-color-danger)_40%,transparent)]",
        ),
    );
  }

  // Default 段：仅最外缘描边（混合 Confirm 的取消钮）
  return cn(
    radius,
    fillMap.Default,
    isOnly && "border border-el-border",
    !isOnly &&
      cn(
        "border border-el-border",
        isFirst && !isLast && "border-r-0",
        !isFirst && isLast && "border-l-0",
        !isFirst && !isLast && "border-x-0 border-y border-el-border",
      ),
  );
}

export function buttonGroupItemClasses(
  group: ButtonGroupItemContextValue | null,
  buttonType: ButtonType,
  plain: boolean,
): string {
  if (!group) return "";

  const { layout, background } = group;

  if (layout === "segmented") {
    return cn(
      groupButtonSize,
      "!rounded-[var(--el-border-radius-base)]",
      groupFocusClass,
      background &&
        buttonType === "Default" &&
        !plain &&
        "!border-0 !bg-transparent !shadow-none hover:!bg-[color:var(--el-fill-color-blank)]",
    );
  }

  return cn(
    groupButtonSize,
    attachedButtonFillClasses(group, buttonType, plain),
    groupFocusClass,
  );
}

export function iconButtonGroupItemClasses(
  group: ButtonGroupItemContextValue | null,
  buttonType: ButtonType = "Primary",
  plain = false,
): string {
  if (!group || group.layout !== "attached") return "";
  const { index, total } = group;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  /** Mix Split 右侧下拉：32×32（Figma size-[32px]） */
  const isSplitChevron = total === 2 && index === 1;

  const radius = cn(
    isFirst && "rounded-l-[var(--el-border-radius-base)] rounded-r-none",
    isLast && "rounded-r-[var(--el-border-radius-base)] rounded-l-none",
    !isFirst && !isLast && "rounded-none",
  );

  if (isSplitChevron) {
    return cn(
      "!h-8 !min-h-8 !max-h-10 !w-8 !min-w-8 !p-0",
      radius,
      plain || buttonType === "Default"
        ? cn(
            "!border !border-el-border !border-l-0 !bg-el-fill-blank text-el-text-regular",
            isLast && "!rounded-r-[var(--el-border-radius-base)]",
          )
        : cn(
            "!border-0 !bg-el-primary text-el-text-write hover:opacity-90",
            buttonType === "Danger" && "!bg-el-danger",
          ),
      groupFocusClass,
    );
  }

  // Copy me · Icon-button ×3：Primary 46×32 + 内部分隔 primary-5
  const filled = !plain && buttonType !== "Default";
  if (filled || buttonType === "Primary") {
    return cn(
      groupButtonSize,
      "!w-[46px] !min-w-[46px] !max-w-[46px] !px-0",
      radius,
      fillMap[buttonType],
      "hover:opacity-90",
      "!border-0 !border-solid",
      !isLast && "!border-r !border-[color:var(--el-color-primary-light-5)]",
      groupFocusClass,
    );
  }

  return cn(
    groupButtonSize,
    "!w-[46px] !min-w-[46px] !px-0",
    radius,
    fillMap.Default,
    "border border-el-border",
    !isFirst && "!border-l-0",
    !isLast && "!border-r-0",
    groupFocusClass,
  );
}
