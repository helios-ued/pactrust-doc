import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { ButtonType } from "./Button";
import { useButtonGroupItem } from "./buttonGroupContext";
import { iconButtonGroupItemClasses } from "./buttonGroupStyles";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  buttonType?: ButtonType;
  plain?: boolean;
  round?: boolean;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      buttonType = "Primary",
      plain = false,
      round = false,
      icon,
      className,
      type = "button",
      ...rest
    },
    ref,
  ) => {
    const group = useButtonGroupItem();
    const inAttached = group?.layout === "attached";

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center text-lg",
          !inAttached && "size-10 rounded-el-base border",
          inAttached && "text-sm",
          round && !inAttached && "rounded-el-circle",
          !inAttached &&
            (plain
              ? "border-el-primary bg-transparent text-[color:var(--el-color-primary)]"
              : buttonType === "Primary"
                ? "border-el-primary bg-el-primary text-el-text-write"
                : "border-el-border bg-el-fill-blank text-el-text-regular"),
          iconButtonGroupItemClasses(group, buttonType, plain),
          className,
        )}
        {...rest}
      >
        {icon ?? "＋"}
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
