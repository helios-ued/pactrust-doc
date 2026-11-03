import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";
import type { InputSize, InputState } from "./Input";

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
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="text-el-text-placeholder"
    >
      {hidden ? (
        <>
          <path
            d="M1 7s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="7" cy="7" r="1.75" stroke="currentColor" strokeWidth="1.2" />
          <path d="M2 2l10 10" stroke="currentColor" strokeWidth="1.2" />
        </>
      ) : (
        <>
          <path
            d="M1 7s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="7" cy="7" r="1.75" stroke="currentColor" strokeWidth="1.2" />
        </>
      )}
    </svg>
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

    const sizeClasses: Record<InputSize, string> = {
      Default: "min-h-10 px-pt-12 py-pt-8 text-el-base leading-el-base",
      Large: "min-h-11 px-pt-3xl py-pt-8 text-el-base leading-el-base",
      Small: "min-h-6 px-pt-8 py-pt-4 text-el-base leading-el-base",
    };

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
          "flex w-full items-center gap-pt-8 overflow-hidden rounded-el-base border bg-el-fill-blank",
          sizeClasses[size],
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
