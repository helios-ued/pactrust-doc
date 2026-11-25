import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";
import { EdsIconById, PT_EDS_ICONS } from "@/components/Icon/EdsIconById";
import type { InputSize, InputState } from "./Input";
import { inputSizeClasses } from "./inputFieldStyles";

/** Figma Password — docs/COMPONENTS.md */
export type PasswordProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "disabled"
> & {
  state?: InputState;
  size?: InputSize;
  display?: boolean;
  input?: boolean;
};

function EyeIcon({ hidden }: { hidden: boolean }) {
  return (
    <EdsIconById
      id={hidden ? PT_EDS_ICONS.eyeHidden : PT_EDS_ICONS.eyeOpen}
      size={14}
      className="text-el-text-placeholder"
    />
  );
}

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      state = "Default",
      size = "Default",
      display: displayProp,
      className,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(displayProp ?? false);
    const [focused, setFocused] = useState(false);
    const isDisabled = state === "Disabled";
    const visualState = focused && state === "Default" ? "Focus" : state;

    const stateClasses =
      visualState === "Error"
        ? "border-el-danger"
        : visualState === "Disabled"
          ? "cursor-not-allowed border-el-border-light bg-el-border-light/30"
          : visualState === "Focus"
            ? "border-el-primary"
            : "border-el-border hover:border-el-text-placeholder focus-within:border-el-primary";

    return (
      <div
        className={cn(
          "pt-input-field flex w-full items-center overflow-hidden rounded-el-base border bg-el-fill-blank",
          inputSizeClasses[size],
          stateClasses,
          className,
        )}
      >
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          disabled={isDisabled}
          className={cn(
            "min-w-0 flex-1 border-0 bg-transparent font-[family-name:var(--el-font-family)] text-el-text-primary outline-none",
            "placeholder:text-el-text-placeholder",
            isDisabled && "cursor-not-allowed text-el-text-disabled",
          )}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
        {!isDisabled && (
          <button
            type="button"
            className="flex shrink-0 items-center justify-center rounded-el-small p-pt-4 text-el-text-placeholder hover:text-el-text-regular"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
          >
            <EyeIcon hidden={!visible} />
          </button>
        )}
      </div>
    );
  },
);

Password.displayName = "Password";
